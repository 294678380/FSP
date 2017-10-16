/**
	restful stream
*/
var express = require("express");
var select = require("../../../db/select");
var insert = require("../../../db/insert");
var router = express.Router();
var b6 = require("../../../lib/encodePass");
var Writelog = require("../../../log/log");
var b64_md5 =  b6.b64_md5;
var base64 = new b6.Base64();
var tableName = "fsp_users";
/**
	查询流 
	@method {GET}
	@router {/}
	@param {relname}
*/
router.get("/",(req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*"); 
	res.header("Access-Control-Allow-Methods","GET");
	res.header("Access-Control-Allow-Headers","Content-Type,X-PINGOTHER");

	select("relname,reltext","fsp_streams","where reset='1'")
		.then((result)=>{
			res.send({
				success:true,
				streams:result.rows
			});
		})
		.catch((e)=>{
			res.send({
				success:false
			});
		})
});
/**
	流插入数据 
	@method {POST}
	@router {/add/:relname}
	@param {relname}
*/
router.post("/add/:relname",(req,res,next)=>{
		res.header("Access-Control-Allow-Origin","*"); 
		res.header("Access-Control-Allow-Methods","POST");
		res.header("Access-Control-Allow-Headers","Content-Type,X-PINGOTHER");
		//Authorization 登陆信息 base 64位  //ISMvKXpXpadDiUoOSoAfww
		var body = req.body;
		//验证参数信息
		var exple = function(text){
				let rex = /^[\w\d\=\-\_\,]{2,}$/g;
					if(
						(text == undefined || text == 'undefined' || text == "") 
						|| 
						!rex.test(text)
						||
						text.indexOf("select") != -1
						||
						text.indexOf("delete") != -1
						||
						text.indexOf("update") != -1
						||
						text.indexOf("where") != -1
						){
							console.log(text);
							return false;
					}
					return true;
				}
			if(!exple(req.params.relname) || !exple(body.field) || !exple(body.value)|| !exple(body.key)){

				res.send({
						success:false,
						msg:"参数错误"
					});
				return false;
			}
			
			body.field = body.field.split(",");
			body.value = body.value.split(",");
			
		//验证通过 验证用户restful的key
		var res_key = body.key;
			
			//请求客户端ip
			var clientIp = getClientIp(req);
			select("*",tableName,"where active=1 and res_key='"+res_key+"'")
			.then((users)=>{
				var user = users.rows;
				if(user.length == 0){
					res.send({
						success:false,
						msg:"认证失败"
					});
					return false;
				}
				delete user[0].pass_word;
				//验证用户正确之后 插入流数据
				var values = []; 
				body.value.forEach((value,name)=>{
					values.push("'"+value+"'");
				});
				//日志信息收集
				var log = {};
				//验证流是否是发布状态
				select("relname,reltext","fsp_streams","where relname='"+req.params.relname+"' and reset='1'")
					.then((result)=>{
						if(result.rows.length < 1){
							res.send({
								success:false,
								msg:req.params.relname+"不存在"
							});
							return false;
						}
						log.userName = user[0]["user_name"];
						log.createTime = new Date().getTime();
						log.clientIp = getClientIp(req);
						
						//插入数据
								var insertSql = [req.params.relname+"("+body.field.join(",")+")",values.join(",")];
						log.insert = insertSql.join("---");
								insert(insertSql[0],insertSql[1],(success)=>{
									log.success = success;
									//记录日志
									Writelog(JSON.stringify(log),"fsp_streams_log")
									.then(()=>{
										console.log("已记录日志");
									}).catch((e)=>{
										console.error(err);
									});
									if(success){
										res.send({
											success:success,
											msg:req.params.relname+"成功插入一条数据"
										});
									}else{
										res.send({
											success:success,
											msg:req.params.relname+"插入数据失败"
										});
										return false;
									}
									
								});

				}).catch((e)=>{
					res.send({
						success:success,
						msg:req.params.relname+"不存在"
					});
				});
			
				
				
			})
			.catch((e)=>{
				res.send({
					success:false
				});
				console.log(e);
			});
});

module.exports = router;