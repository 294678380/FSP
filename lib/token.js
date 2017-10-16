/*
 设置和获取token
 * */
var config = require("config-lite");
var b6 = require("../lib/encodePass");
var b64_md5 =  b6.b64_md5;

global.jcpt_token=[];
module.exports = {
	setToken:function(name){
		var token = b64_md5(new Date().getTime()+"t"+name);
				global.jcpt_token.push({
					name:name,
					token:token
				});
				//过期删除
				setTimeout(function(){
					
					global.jcpt_token.forEach((value,key)=>{
						
						
						if(value.name == name && value.token == token){
							global.jcpt_token.splice(key,1);
						}
					});
				},config.tokenAge);
		return token;
	},
	getToken:function(name){
		var token =  {};
		global.jcpt_token.forEach((value,name)=>{
			if(value.name == name && value.token == token){
				token =  value;
			}
		});
		return token;
	}
}
