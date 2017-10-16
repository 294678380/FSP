


window.ContainerBox = React.createClass({displayName: "ContainerBox",
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
		return React.createElement("div", {className: "containerbox"}, 
					React.createElement("div", {className: "sjl-line"}, 
						React.createElement("input", {className: "sjl_input sjl_name", ref: "sjl_name", type: "text", placeholder: "数据流名称"})
					), 
					React.createElement("div", {className: "sjl-line"}, 
						React.createElement("textarea", {className: "sjl_input", ref: "sjl_text", rows: "5", cols: "10", placeholder: "数据流描述"})
					), 
					React.createElement("div", {className: "titles"}, 
						"详细配置"
					), 
					React.createElement("div", {className: "sjl-detail"}, 
						React.createElement("div", {className: "field-list"}, 
							React.createElement("div", {className: "field"}, 
								React.createElement("ul", null, 
									React.createElement("li", null), 
									React.createElement("li", null, "字段名"), 
									React.createElement("li", null, "类型")
								)
							), 
							React.createElement("div", null, 
							
								self.state.input_field.map(function(value,index){
									return self.getInputField(value.length,index)
								})
							
							), 
							React.createElement("div", {className: "field"}, 
								React.createElement("ul", null, 
									React.createElement("li", null), 
									React.createElement("li", {className: "add-field", onClick: this.addField}, 
										React.createElement("div", {className: "icon"}, "+"), 
										"添加字段"
									), 
									React.createElement("li", {className: "add-submit"}, 
										React.createElement("a", {onClick: this.addSubmit, href: "javascript:;"}, "保存")
									)
								)
							)
							
						)
					)
				);
	},
	inputFieldLen:1,
	/**
		获取输入字段节点
	*/
	getInputField:function(length,index){
		return React.createElement("div", {className: "field field-input", key: index, ref: 'field_'+length, id: 'field_'+length}, 
								React.createElement("ul", null, 
									React.createElement("li", null, 
										React.createElement("a", {"data-index": index, className: "field-delete", "data-index": length-1, onClick: this.deleteField, href: "javascript:;"}, "✖"), 
										React.createElement("div", {className: "field-name"}, 
											"字段", React.createElement("span", {className: "len"}, length)
										)
									), 
									React.createElement("li", null, 
										React.createElement("input", {type: "text", ref: 'field_name'+length, placeholder: "字段名"})
									), 
									React.createElement("li", null, 
										React.createElement("input", {type: "text", ref: 'field_type'+length, value: "text", placeholder: "类型"})
									)
								)
							)
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
		if($(event.target).hasClass("not-submit")){
			return false;
		}
		$(event.target).addClass("not-submit");
		$(event.target).html("正在提交...");

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
		this.submit(data,event);
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
	submit:function(data,event){
		var msg = this.vidor(data);
		if(msg){
			K.tips(msg);
			return false;
		}
		$.post("/",{data:JSON.stringify(data)},function(res){
			if(res.success){
				K.tips("保存成功");
				setTimeout(function(){
					location.href="/guanli"
				},500);
			}else{
				K.tips(res.msg);
			}
		});

	}

});
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "/"}), 
		React.createElement(Navbar, {index: "0"}), 
		React.createElement(Container, {title: "数据流配置"})
	)
	,$(".content")[0]
);