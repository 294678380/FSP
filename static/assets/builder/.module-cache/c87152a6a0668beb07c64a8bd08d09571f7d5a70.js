
//navbar
var navbar = [
		{
			title:"数据流配置",
			href:"./index.html",
			active:1
		},
		{
			title:"管理数据流 ",
			href:"#",
			active:0
		},
		{
			title:"规则配置",
			href:"#",
			active:0
		},
		{
			title:"监控管理",
			href:"#",
			active:0
		}
	];
window.ContainerBox = React.createClass({displayName: "ContainerBox",
	render:function(){
		return React.createElement("div", {className: "containerbox"}, 
					React.createElement("div", {className: "sjl-line"}, 
						React.createElement("input", {className: "sjl_input sjl_name", type: "text", placeholder: "数据流名称"})
					), 
					React.createElement("div", {className: "sjl-line"}, 
						React.createElement("textarea", {className: "sjl_input", rows: "5", cols: "10", placeholder: "数据流描述"})
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
							React.createElement("div", {className: "field"}, 
								React.createElement("ul", null, 
									React.createElement("li", null, 
										React.createElement("div", {className: "field-name"})
									), 
									React.createElement("li", null, 
										React.createElement("input", {type: "text", placeholder: "字段名"})
									), 
									React.createElement("li", null)
								)
							)

						)
					)
				);
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"}), 
		React.createElement(Navbar, {nav: navbar}), 
		React.createElement(Container, {title: "数据流配置"})
	)
	,$(".content")[0]
);