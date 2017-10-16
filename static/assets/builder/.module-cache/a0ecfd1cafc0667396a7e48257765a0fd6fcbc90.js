
//header
window.HeaderBar = React.createClass({displayName: "HeaderBar",
					propTypes:{
						home: React.PropTypes.string.isRequired, //首页链接
						userName: React.PropTypes.string.isRequired, //用户名
						signOut: React.PropTypes.string.isRequired //退出地址
					},
					render:function(){
						var user = JSON.parse(localStorage.getItem("user"));
						return React.createElement("header", null, 
									React.createElement("div", {className: "heading"}, 
										React.createElement("a", {className: "logo", href: this.props.home}, 
											React.createElement("img", {src: "/assets/images/logo.png"})
										), 
										
											this.props.isLogin==undefined?
												React.createElement("div", {className: "header-right"}, 
													React.createElement("div", {className: "user"}, user.user_name), 
													React.createElement("a", {id: "signOut", href: "/user/signOut"}, "[退出]")
												)
											:
											React.createElement("div", {className: "header-right"}, 
													React.createElement("div", {className: "user"}, "还未登录"), 
													React.createElement("a", {id: "signOut", href: "/login"}, "登录")
												)
										
										
									)
								);
					}
				});
//navbar
var navbar = [
		{
			title:"数据流配置",
			href:"/"
		},
		{
			title:"数据流管理",
			href:"/guanli"
		},
		{
			title:"规则配置",
			href:"/peizhi"
		},
		{
			title:"监控管理",
			href:"/jiankong"
		}
	];
window.Navbar = React.createClass({displayName: "Navbar",
	propTypes:{
		index:React.PropTypes.string.isRequired //当前index索引
	},
	render:function(){
		var self = this;
		return React.createElement("div", {className: "navbar"}, 
					React.createElement("ul", null, 
						
							navbar.map(function(value,index){
								return React.createElement("li", {key: index}, 
											React.createElement("a", {	className: self.props.index == index?'active':'', href: value.href}, value.title)
										)
							})
						
					)
				);
	}
});
//container
window.Container = React.createClass({displayName: "Container",
	propTypes:{
		title:React.PropTypes.string.isRequired //内容名称
	},
	render:function(){
		document.title = this.props.title;
		return React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "container-c"}, 
						React.createElement("div", {className: "cc-title"}, this.props.title), 
						React.createElement(ContainerBox, null)
					)
			   );
	}
});
window.SearchBox = React.createClass({displayName: "SearchBox",
	propTypes:{
		callback:React.PropTypes.func //搜索回调函数
	},
	render:function(){
		return React.createElement("div", {className: "sjl-line searchbox"}, 
						React.createElement("input", {className: "sjl_input", ref: "search_text", type: "text", placeholder: "数据流名称"}), 
						React.createElement("input", {className: "sjl-submit", onClick: this.submit, type: "button", title: "搜索", value: ""})
					)
	},
	submit:function(event){
		var self = this;
		var target = $(event.target);
		if(!target.hasClass("not_search")){
			target.addClass("not_search");
			self.props.callback(self.refs["search_text"].value,function(){
				target.removeClass("not_search")
			});
		}
		
	}
})
//chackbox
window.Checkbox = React.createClass({displayName: "Checkbox",
	render:function(){
		return React.createElement("label", null, 
					React.createElement("div", {className: "t-checkbox"}, 
						React.createElement("input", {onChange: this.checkboxChange, type: "checkbox"})
					)
				)
	},
	componentDidMount:function(){
		$("input[type='checkbox']").each(function(){
			$(this).trigger("change");
		});
	},
	checkboxChange:function(event){
		if(event.target.checked){
			$(event.target).parents(".t-checkbox").addClass("active");
		}else{
			$(event.target).parents(".t-checkbox").removeClass("active");
			
		}
	}

})
//table list
//生成标题
function th(th,index){
	return React.createElement("div", {className: "th", key: index}, 
				
					th.map(function(item,key){
						return React.createElement("div", {key: key, className: "td", style: item.style}, item.title)
					})
				
			)
}
//生成列表
function tr(tr,index){
	
	return React.createElement("div", {className: "tr", "data-index": index, key: index}, 
				
					tr.map(function(item,key){
						return React.createElement("div", {className: "td", key: key, style: item.style}, 
						
							item.title == 'checkbox'?
								React.createElement(Checkbox, null)
								:item.title
						
						)
					})
				
			)
}
window.TableList = React.createClass({displayName: "TableList",
	propTypes:{
		tabledata:React.PropTypes.object.isRequired //传入table数据udixiang {th:[[{title:"",style:""}],[]],}
	},
	render:function(){
		var self = this;
		return React.createElement("div", {className: "c-table", key: 0}, 
					
						this.props.tabledata.th.map(function(value,name){
							return th(value,name)
						}), 
					

					
						this.props.tabledata.tr.length == 0?
							React.createElement("div", {className: "tr"}, 
								React.createElement("div", {className: "td", key: 0, style: {width:"100%"}}, "还没有数据")
							)
							:this.props.tabledata.tr.map(function(value,name){
								return tr(value,name)
							})
					
				)
	}
});
//选择组件
window.Selects = React.createClass({displayName: "Selects",
	propTypes:{
		options:React.PropTypes.array.isRequired //传入选项
	},
	componentDidMount:function(){
		$("select").each(function(){
			var opt = $(this).find("option").eq(0);
			opt[0].selected = true;
			$(this).prev(".select-bg").html(opt.text());
		});
	},
	render:function(){
		return	React.createElement("div", {className: "select-xt"}, 
						React.createElement("div", {className: "select-bg"}
						), 
						React.createElement("select", {onChange: this.selectChange, name: ""}, 
							
								this.props.options.map(function(value,name){
										return React.createElement("option", {key: name, value: value.value}, value.title)
								})
							
						)
					)
	},
	selectChange:function(event){
			var selecs = $(event.target);
			selecs.prev(".select-bg").html(selecs.find("option:selected").text());
	}
});
//loading
window.Loading = React.createClass({displayName: "Loading",
	propTypes:{
		isShow:React.PropTypes.number.isRequired //是否显示
	},
	render:function(){
		return React.createElement("div", null, 
					
						this.props.isShow==1?React.createElement("div", {className: "loading", style: 
							{width:"120px",height:"44px",position:"absolute",left:"0",top:"0",right:"0",bottom:"0",margin:"auto",zIndex:"10"}
						}, 
														React.createElement("img", {width: "100%", height: "100%", src: "/assets/images/loading.gif"})
												)
												:React.createElement("div", null)
					
				)
	}
})