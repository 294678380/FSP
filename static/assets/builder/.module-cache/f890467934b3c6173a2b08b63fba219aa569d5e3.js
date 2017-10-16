ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null), 
		React.createElement(Navbar, null)
	)
	,$(".content")[0]
);