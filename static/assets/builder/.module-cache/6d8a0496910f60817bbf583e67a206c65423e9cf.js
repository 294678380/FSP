var HeaderBar = React.createClass({displayName: "HeaderBar",
				render:function(){
					return React.createElement("header", null, 
								React.createElement("div", {className: "heading"}, 
									React.createElement("a", {className: "logo", href: "#"}, 
										React.createElement("img", {src: "../assets/images/logo.png"})
									), 
									React.createElement("div", {className: "header-right"}, 
										React.createElement("div", {className: "user"}, "admin"), 
										React.createElement("a", {id: "signOut", href: "javascript:;"}, "[退出]")
									)
								)
							);
				}
		});

ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null)
	)
	,$(".content")[0]
);