window.ContainerBox = React.createClass({displayName: "ContainerBox",
	render:function(){
		return React.createElement("div", {className: "userlist"}
				)
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null), 
		React.createElement(Navbar, {index: "4"}), 
		React.createElement(Container, null)
	)
	,$(".content")[0]
);