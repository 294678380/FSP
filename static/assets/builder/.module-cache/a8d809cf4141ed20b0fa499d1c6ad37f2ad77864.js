function Base64() {
 // private property
 _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 // public method for encoding
 this.encode = function (input) {
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;
  input = _utf8_encode(input);
  while (i < input.length) {
   chr1 = input.charCodeAt(i++);
   chr2 = input.charCodeAt(i++);
   chr3 = input.charCodeAt(i++);
   enc1 = chr1 >> 2;
   enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
   enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
   enc4 = chr3 & 63;
   if (isNaN(chr2)) {
    enc3 = enc4 = 64;
   } else if (isNaN(chr3)) {
    enc4 = 64;
   }
   output = output +
   _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
   _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }
  return output;
 }
 // public method for decoding
 this.decode = function (input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
   enc1 = _keyStr.indexOf(input.charAt(i++));
   enc2 = _keyStr.indexOf(input.charAt(i++));
   enc3 = _keyStr.indexOf(input.charAt(i++));
   enc4 = _keyStr.indexOf(input.charAt(i++));
   chr1 = (enc1 << 2) | (enc2 >> 4);
   chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
   chr3 = ((enc3 & 3) << 6) | enc4;
   output = output + String.fromCharCode(chr1);
   if (enc3 != 64) {
    output = output + String.fromCharCode(chr2);
   }
   if (enc4 != 64) {
    output = output + String.fromCharCode(chr3);
   }
  }
  output = _utf8_decode(output);
  return output;
 }
 // private method for UTF-8 encoding
 _utf8_encode = function (string) {
  string = string.replace(/\r\n/g,"\n");
  var utftext = "";
  for (var n = 0; n < string.length; n++) {
   var c = string.charCodeAt(n);
   if (c < 128) {
    utftext += String.fromCharCode(c);
   } else if((c > 127) && (c < 2048)) {
    utftext += String.fromCharCode((c >> 6) | 192);
    utftext += String.fromCharCode((c & 63) | 128);
   } else {
    utftext += String.fromCharCode((c >> 12) | 224);
    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
    utftext += String.fromCharCode((c & 63) | 128);
   }
  }
  return utftext;
 }
 // private method for UTF-8 decoding
 _utf8_decode = function (utftext) {
  var string = "";
  var i = 0;
  var c = c1 = c2 = 0;
  while ( i < utftext.length ) {
   c = utftext.charCodeAt(i);
   if (c < 128) {
    string += String.fromCharCode(c);
    i++;
   } else if((c > 191) && (c < 224)) {
    c2 = utftext.charCodeAt(i+1);
    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
    i += 2;
   } else {
    c2 = utftext.charCodeAt(i+1);
    c3 = utftext.charCodeAt(i+2);
    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
    i += 3;
   }
  }
  return string;
 }
}

var LoginForm = React.createClass({displayName: "LoginForm",
					render:function(){
						return React.createElement("div", {className: "login_form"}, 
									React.createElement("div", {className: "lf-line"}, 
										React.createElement("input", {type: "text", ref: "username", className: "input"}), 
										React.createElement("div", {className: "tips"}, "用户名:")
									), 
									React.createElement("div", {className: "lf-line"}, 
										React.createElement("input", {type: "password", ref: "password", className: "input"}), 
										React.createElement("iv", {className: "tips"}, "密码:")
									), 
									React.createElement("div", {className: "lf-line"}, 
										React.createElement("input", {type: "button", onClick: this.login, title: "点击登录", className: "button", value: "登录"})
									)
								)
					},
					login:function(){
						var base64 = new Base64();
						var username = this.refs["username"].value;
						var password = this.refs["password"].value;
						$.post("/user/signIn",{u:base64.encode(username+":"+password)},function(res){
							if(res.success){
								
								setTimeout(function(){
									location.href="/";
								},100);
							}else{
								K.tips("用户名或密码错误");
							}
						});
					}
				});
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