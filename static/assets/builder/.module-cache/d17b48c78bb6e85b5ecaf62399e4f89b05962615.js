//container
var Container = React.createClass({displayName: "Container",
	render:function(){
		return React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "container-c"}
						
					)
			   )
	}
})
//navbar
var navbar = [
		{
			title:"数据流配置",
			href:"./index.html",
			active:1
		},
		{
			title:"管理数据流 ",
			href:"#"
		},
		{
			title:"规则配置",
			href:"#"
		},
		{
			title:"监控管理",
			href:"#"
		}
	]
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"}), 
		React.createElement(Navbar, {nav: navbar}), 
		React.createElement(Container, null)
	)
	,$(".content")[0]
);