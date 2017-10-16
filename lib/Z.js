/**
 * Z.js
 * 
 * */
class Promise{
	constructor(){
		this.queue = [];
		this.isPromise = true;
	}
	then(fulfilledHandler,errorHandler){
		var handler = {};
		if(typeof fulfilledHandler == "function"){
			handler.fulfilled = fulfilledHandler;
		}
		if(typeof errorHandler == "function"){
			handler.errored = errorHandler;
		}
			this.queue.push(handler);
		return this;
	}
	catch(errorHandler){
		var handler = {};
		if(typeof errorHandler == "function"){
			handler.errored = errorHandler;
		}
		this.queue.push(handler);
		return this;
	}
}
class Deferred{
	constructor(){
		this.promise = new Promise();
	}
	callback(){
		var self = this;
		var arg = Array.prototype.slice.call(arguments);
		var calld = false;
		return function(err){
			if(calld){
				return;
			}
			calld = true;
			if(err){
				//错误日志
				console.error(err);
				self.reject(err);
				return;
			}
			//转换合并两个arguments
				arg = arg.concat(Array.prototype.slice.call(arguments,1));
				self.resolve.apply(self,arg);
			
		}
	}
	//完成态
	resolve(){
		var self = this;
		var _promise = self.promise;
		var arg = Array.prototype.slice.call(arguments);
		var calld = [];
		var handler;
			while((handler = _promise.queue.shift())){
				if(handler && handler.fulfilled){
						var res = handler.fulfilled.apply(self,arg);
						calld.push(handler.id);
					if(res && res.isPromise){
						res.queue = _promise.queue;
						self.promise = res;
						return;
					}
				}
			}
	}
	//失败态
	reject(err){
		var _promise = this.promise;
		var handler;
		while((handler = _promise.queue.shift())){
			if(handler && handler.errored){
				
				var res = handler.errored.apply(this,Array.prototype.slice.call(arguments));
				if(res && res.isPromise){
					res.queue = _promise.queue;
					this.promise = res;
					return;
				}
			}
		}
	}
	
}

module.exports = {
	Deferred:Deferred
}
