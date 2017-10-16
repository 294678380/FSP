/**
 * 大数据基础平台
 * 2017-5-26 15:11:11
 * 
 * */
const express = require("express");
const path = require("path");
var config = require("config-lite");
var pack = require("./package.json");
var app = express();
var routes = require("./routes");
var create = require("./db/create");
var check = require("./lib/check");
//设置全局属性
global.Deferred = require("./lib/Z").Deferred;
global.getClientIp = (req)=>{
	return req.headers["x-forwarded-for"]||
	req.connection.remoteAddress ||
	req.soket.remoteAddress ||
	req.connection.socket.remoteAddress;
}
global.flow = { //插入峰值
} 
//创建表
create.createTable();
	//解析请求主体
	var bodyParser = require("body-parser");
		app.use(bodyParser.urlencoded({
		  extended: false
		}));
		app.use(bodyParser.json());

	//设置模板引擎
		app.set("view engine","ejs");
		app.set("views",path.join(__dirname,"views"));
	//设置中间件
		app.use(express.static(path.join(__dirname,"static")));
		//限制流量
		app.use((req,res,next)=>{
			var newTime = new Date().getTime();
			var ip = getClientIp(req);
			if(global.flow[ip] == undefined){
				global.flow[ip] = {len:0,endTime:""}
			} //通过ip确定流量来源

			if(global.flow[ip].len <= 0){
				global.flow[ip].endTime = newTime+config.flow.maxAge;
			}
			if(newTime <= global.flow[ip].endTime){
				global.flow[ip].len++;
				console.log("global.flow[ip].len",ip+"||",global.flow[ip].len);

				if(global.flow[ip].len >= config.flow.maxLen){
					res.header("Access-Control-Allow-Origin","*"); 
					res.header("Access-Control-Allow-Methods","POST");
					res.header("Access-Control-Allow-Headers","Content-Type,X-PINGOTHER");
					res.send({
						success:false,
						msg:"当前连接过多,请稍后重试"
					})
					return;
				}
			}else{
				global.flow[ip].len=0;
			 //记录次数
			}
			next();
		});
	//设置路由 
		routes(app);
		app.listen(config.port,()=>{
			console.log(pack.name + "to" + config.port + "port");
		});
	
