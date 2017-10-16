/*
 控制登陆信息
 * 
 * */
var cookie = require("cookie");
module.exports = (req,res,next)=>{
	try{
			var token = JSON.parse(cookie.parse(req.headers.cookie).token);
			var len = 0;
				global.jcpt_token.forEach((value,name)=>{
					if(value.token === token.t && value.name === token.user+getClientIp(req)){
						len++;
						next();
						return;
					}
				});
				if(len == 0){
					res.redirect("/login");
				}
	}catch(e){
		//next();
		res.redirect("/login");
		return;
	}
	
}
