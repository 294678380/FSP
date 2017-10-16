React.createClass({
	render:function(){
		return React.createElement("div", {className: "login_form"}, 
					React.createElement("div", {className: "lf-line"}, 
						React.createElement("input", {type: "text", className: "input"}), 
						React.createElement("div", {className: "tips"}, "用户名:")
					), 
					React.createElement("div", {className: "lf-line"}, 
						React.createElement("input", {type: "password", className: "input"}), 
						React.createElement("iv", {className: "tips"}, "密码:")
					), 
					React.createElement("div", {className: "lf-line"}, 
						React.createElement("input", {type: "button", title: "点击登录", className: "button", value: "登录"})
					)
				)
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {home: "./login.html", signOut: "./login.html", isLogin: false}), 
		React.createElement("div", {className: "login"}, 
			React.createElement("div", {className: "loginbox"}, 
				React.createElement("div", {className: "logo"}, React.createElement("img", {src: "../assets/images/logo1.png"})), 
				React.createElement(LoginForm, null)
			)
		)
	)
	,$(".content")[0]
);