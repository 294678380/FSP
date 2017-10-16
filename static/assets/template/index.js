


window.ContainerBox = React.createClass({
	//设置状态机
	getInitialState:function(){
		return {
			input_field:[]
		}
	},
	//已插入真实dom 在安装组件后立即被调用
	componentDidMount:function(){
		var old = this.state.input_field.concat();
		old.push({
			length:this.inputFieldLen
		});
		this.setState({ 
			input_field:old
		});
	},
	render:function(){
		var self = this;
		return <div className="containerbox">
					<div className="sjl-line">
						<input className="sjl_input sjl_name" ref="sjl_name" type="text" placeholder="数据流名称"/>
					</div>
					<div className="sjl-line">
						<textarea className="sjl_input" ref="sjl_text" rows="5" cols="10" placeholder="数据流描述"></textarea>
					</div>
					<div className="titles">
						详细配置
					</div>
					<div className="sjl-detail">
						<div className="field-list">
							<div className="field">
								<ul>
									<li></li>
									<li>字段名</li>
									<li>类型</li>
								</ul>
							</div>
							<div>
							{
								self.state.input_field.map(function(value,index){
									return self.getInputField(value.length,index)
								})
							}
							</div>
							<div className="field">
								<ul>
									<li></li>
									<li className="add-field" onClick={this.addField}>
										<div className="icon">+</div>
										添加字段
									</li>
									<li className="add-submit">
										<a onClick={this.addSubmit} href="javascript:;">保存</a>
									</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>;
	},
	inputFieldLen:1,
	/**
		获取输入字段节点
	*/
	getInputField:function(length,index){
		return <div className="field field-input" key={index} ref={'field_'+length} id={'field_'+length}>
								<ul>
									<li>
										<a data-index={index} className="field-delete" data-index={length-1} onClick={this.deleteField} href="javascript:;">✖</a>
										<div className="field-name">
											字段<span className="len">{length}</span>
										</div>
									</li>
									<li>
										<input type="text" ref={'field_name'+length} placeholder="字段名" />
									</li>
									<li>
										<input type="text" ref={'field_type'+length} value="text" placeholder="类型" />
									</li>
								</ul>
							</div>
	},
	addField:function(){
		this.inputFieldLen++;
		var old = this.state.input_field.concat();
		old.push({
			length:this.inputFieldLen
		});
		for(var i=0;i<old.length;i++){
			old[i].length = i+1;
		}
		this.setState({ 
			input_field:old
		});
	},
	deleteField:function(event){
		var old = this.state.input_field.concat();
		$(event.target).parents(".field-input").hide().addClass("hide");
		old[event.target.getAttribute('data-index')].isHide = true;
		this.inputFieldLen--;

		var oldlen = [];

		for(var i=0;i<old.length;i++){
			if(!old.isHide){
				oldlen.push(old[i])
			}
		}

		for(var i=0;i<oldlen.length;i++){
			oldlen[i].length = i+1;
		}

		this.setState({ 
			input_field:oldlen
		});
	},
	addSubmit:function(event){
		var target = $(event.target);
		if(target.hasClass("not-submit")){
			return false;
		}
		target.addClass("not-submit");
		target.html("正在提交...");

		var data = {
			title:this.refs.sjl_name.value,
			text:this.refs.sjl_text.value,
			field:[]
		}
		for(var i=1;i<=this.state.input_field.length;i++){
			var field = {
				name:this.refs["field_name"+i].value,
				type:this.refs["field_type"+i].value
			}
			if(!$(this.refs["field_name"+i]).parents(".field-input").hasClass("hide")){
				data.field.push(field);
			}
			
		}
		//submit
		this.submit(data,function(){
			target.removeClass("not-submit").html("保存");
		});
	},
	//表单验证
	vidor:function(data){
		var formV = {
			title:function(val){
				var rex = /^[0-9a-zA-Z\-_\.\*]{2,}$/g;
				if(!rex.test(val)){
					return "数据流名称必须是2位以上的数字英文组合，可包含特殊字符-_.*";
				}
			},
			text:function(val){

			},
			field_name:function(val){
				var rex = /^[0-9a-zA-Z\-_\.\*]{2,}$/g;
				if(!rex.test(val)){
					return "字段名必须是2位以上的数字英文组合，可包含特殊字符-_.*";
				}
			},
			field_type:function(val){
				var rex = /^[0-9a-zA-Z\-_\.\*]{2,}$/g;
				if(!rex.test(val)){
					return "请输入正确的字段类型";
				}
			}
		}
		for(i in data){
			if(typeof(data[i])=="string"){
				var msg = formV[i](data[i]);
				if(msg){
					return msg;
				}
			}else{
				for(var b = 0,len=data[i].length ; d=data[i][b++] ;){
					var msg;
						msg = formV[i+"_name"](d.name);
						if(msg){
							return msg;
						}
						msg = formV[i+"_type"](d.type);
						if(msg){
							return msg;
						}
				}
			}
		}
	},
	//提交
	submit:function(data,callback){
		var msg = this.vidor(data);
		if(msg){
			K.tips(msg);
			callback();
			return false;
		}
		$.post("/",{data:JSON.stringify(data)},function(res){
			if(res.success){
				K.tips("保存成功");
				setTimeout(function(){
					location.href="/guanli"
				},500);
			}else{
				callback();
				K.tips(res.msg);
			}
		});

	}

});
ReactDOM.render(
	<div>
		<HeaderBar home="/" />
		<Navbar index="0" />
		<Container title="数据流配置"/>
	</div>
	,$(".content")[0]
);