//container
var Container = React.createClass({displayName: "Container",
	render:function(){
		return React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "container-c"}, 
						React.createElement("div", {className: "cc-title"}, this.props.title), 
						this.props.cBox
					)
			   );
	}
});
var ContainerBox = React.createClass({displayName: "ContainerBox",
	render:function(){
		return React.createElement("div", {className: "containerbox"}, 
					"数据流配置的内容"
				);
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
	]
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"}), 
		React.createElement(Navbar, {nav: navbar}), 
		React.createElement(Container, {title: "数据流配置", cbox: ContainerBox})
	)
	,$(".content")[0]
);