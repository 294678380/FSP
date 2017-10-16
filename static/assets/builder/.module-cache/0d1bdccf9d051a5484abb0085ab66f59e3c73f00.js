//container
var Container = React.createClass({displayName: "Container",
	render:function(){
		return React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "container-c"}
						
					)
			   )
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"}), 
		React.createElement(Navbar, {nav: navbar}), 
		React.createElement(Container, null)
	)
	,$(".content")[0]
);