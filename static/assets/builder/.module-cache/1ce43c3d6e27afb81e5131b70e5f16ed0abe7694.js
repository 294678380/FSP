window.ContainerBox = React.createClass({displayName: "ContainerBox",
	render:function(){
		return React.createElement("div", {className: "userlist"}, 
					"用户列表"
				)
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null), 
		React.createElement(Navbar, {index: "4"}), 
		React.createElement(Container, {title: "用户列表"})
	)
	,$(".content")[0]
);