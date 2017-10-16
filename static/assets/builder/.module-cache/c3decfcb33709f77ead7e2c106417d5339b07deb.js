
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
					React.createElement("input", {className: "sjl_name", type: "text", placeholder: "数据流名称"})
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