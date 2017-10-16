module.exports = {
	port:8090,//启动端口
	//pg配置
	pg:{
		user:"bukong",
		database:"pipeline",
		password:"xdhSIS123",
		local:"68.28.6.58:1922"
	},
	//restful 流量控制
	flow:{
		maxAge:1*60*1000, //多长时间内 单位毫秒
		maxLen:90 //一分钟内限制多少条
	},
	//登陆认证过期时间 单位毫秒
	tokenAge:30*60*1000
}
