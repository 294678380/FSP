ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null), 
		React.createElement(Navbar, {index: "4"})
		
	)
	,$(".content")[0]
);