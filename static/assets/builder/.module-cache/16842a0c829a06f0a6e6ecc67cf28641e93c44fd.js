//header
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
//navbar
var Navbar = React.createClass({displayName: "Navbar",
	render:function(){
		return React.createElement("div", {className: "navbar"}, 
					React.createElement("ul", null, 
						this.props.nav
						
					)
				);
	}
});
var navbar = [
		{
			title:"数据流配置",
			href:"./index.html"
		},
		{
			title:"管理数据流 ",
			href:"#"
		},
		{
			title:"规则配置",
			href:"#"
		},
		{
			title:"监控管理",
			href:"#"
		}
	]
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"}), 
		React.createElement(Navbar, {nav: "{navbar}"})
	)
	,$(".content")[0]
);