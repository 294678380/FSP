var HeaderBar = React.createClass({displayName: "HeaderBar",
				render:function(){
					return React.createElement("header", null, 
								React.createElement("div", {className: "heading"}, 
									React.createElement("a", {className: "logo", href: "{this.props.home}"}, 
										React.createElement("img", {src: "../assets/images/logo.png"})
									), 
									React.createElement("div", {className: "header-right"}, 
										React.createElement("div", {className: "user"}, this.props.userName), 
										React.createElement("a", {id: "signOut", href: "{this.props.signOut}"}, "[退出]")
									)
								)
							);
				}
		});

ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"})
	)
	,$(".content")[0]
);