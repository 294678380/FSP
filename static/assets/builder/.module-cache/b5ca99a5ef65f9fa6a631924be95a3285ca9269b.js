var HeaderBar = React.createClass({displayName: "HeaderBar",
				render:function(){
					return React.createElement("header", null, 
								React.createElement("div", {class: "heading"}, 
									React.createElement("a", {class: "logo", href: "#"}, 
										React.createElement("img", {src: "../assets/images/logo.png"})
									), 
									React.createElement("div", {class: "header-right"}, 
										React.createElement("a", {href: "javascript:;"}, "[退出]")
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