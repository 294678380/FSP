//header
window.HeaderBar = React.createClass({displayName: "HeaderBar",
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

window.Navbar = React.createClass({displayName: "Navbar",
	render:function(){
		return React.createElement("div", {className: "navbar"}, 
					React.createElement("ul", null, 
						
							this.props.nav.map(function(value){
								return React.createElement("li", {className: 
												'active'
										}, 
											React.createElement("a", {href: value.href}, value.title)
										)
							})
						
					)
				);
	}
});