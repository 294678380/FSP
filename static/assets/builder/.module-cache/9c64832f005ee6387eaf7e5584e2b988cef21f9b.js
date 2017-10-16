window.ContainerBox = React.createClass({displayName: "ContainerBox",
	
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null), 
		React.createElement(Navbar, {index: "4"}), 
		React.createElement(Container, null)
	)
	,$(".content")[0]
);