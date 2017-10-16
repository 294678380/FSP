/**
 * 大数据基础平台-用户管理
 * */
var express = require("express");
var router = express.Router();
var config = require("config-lite");
var b6 = require("../lib/encodePass");
var select = require("../db/select");
var insert = require("../db/insert");
var db_delete = require("../db/delete");
var save = require("../db/save");
var tableName = "fsp_users";
var b64_md5 =  b6.b64_md5;
var base64 =  new b6.Base64();
var token = require("../lib/token");
var check = require("../lib/check");
var cookie = require("cookie");
setInterval(function(){
	console.log(global.jcpt_token);
	console.log("--------------------------------");
	console.log("--------------------------------");
},1*60*1000);

/**
	用户界面
	{/} {get}
*/
router.get("/",check,(req,res,next)=>{
	res.render("index",{
		pageName:"user"
	});
});
/**
 * {/list} {get} 用户列表
 * */
router.get("/list",check,(req,res,next)=>{
	try{
		var pageSize = 2;
		var pageNo = 1;
		if(req.query.pageNo != undefined){
			pageNo = Number(req.query.pageNo);
			pageSize = Number(req.query.pageSize);
		}
		var limit = Number(pageNo*pageSize-pageSize);
		
		var where = "where fsp_groups._id=fsp_users.groups order by fsp_users._id desc offset "+limit+" limit "+pageSize;
		if(req.query.id != undefined){
			where = "where fsp_groups._id=fsp_users.groups and fsp_users._id="+Number(req.query.id);
		}
		var users = {};
		select(tableName+".*,fsp_groups.title as gt","fsp_users,fsp_groups",where)
			.then((result)=>{
				users = result.rows;
				return select("count(_id) as total","fsp_users","");
			})
			.then((total)=>{
						for(u in users){ 
							delete users[u].pass_word;
						}
						res.send({
							success:true,
							rows:users,
							total:Number(total.rows[0].total)
						});
						
			})
			.catch((e)=>{
				console.log(e);
				res.send({
					success:false
				})
			});
	}catch(e){
		res.redirect("/user")
	}
});
/**
 * {/} {post} 添加用户
 * @param {String} user
 * */
router.post("/",check,(req,res,next)=>{
	var user = JSON.parse(req.body.user);
	if(user.group == 0){
		res.send({
			success:false
		});
		return;
	}
	var user_name = user.username.replace(/\'/g,"a");
	select("count(_id) as len",tableName,"where user_name='"+user_name+"'")
		.then((result)=>{
			if(result.rows[0].len > 0){
				res.send({
					success:false,
					msg:"用户名已重复"
				});
				return;
			}else{
				var pass_word = b64_md5(user.password);
				var d = new Date();
				var mounth = parseInt(d.getMonth())+1;
				var create_time = d.getFullYear()+"-"+mounth+"-"+d.getDate();
				var re_key = new Date().getTime();

				insert(tableName+"(user_name,pass_word,res_key,groups,active,create_time)","'"+user_name+"'"+","+"'"+pass_word+"'"+","+"'"+b64_md5(re_key+user_name)+"',"+user.group+","+user.active+","+"'"+create_time+"'",(insert_result)=>{
					if(insert_result){
						res.send({
							success:true
						});
					}
				});
			}
		})
		.catch((e)=>{
			res.send({
				success:false
			});
		});
});
/**
 * {/signIn} {post}登陆 
 * @param {String} user_name
 * @param {String} pass_word
 * */

	router.post("/signIn",(req,res,next)=>{
		var body = req.body;
		try{
			var u = base64.decode(body.u).split(":");
			var user_name = u[0];
			var pass_word = b64_md5(u[1]);
			var clientIp = getClientIp(req);
			user_name = user_name.replace(/\'/g,"a");
			pass_word = pass_word.replace(/\'/g,"a");
			select("*",tableName,"where active=1 and user_name='"+user_name+"' and pass_word='"+pass_word+"'")
			.then((result)=>{
				var user = result.rows;
				if(user.length == 0){
					res.send({
						success:false
					});
					return false;
				}
				delete user[0].pass_word;
				//生成token
				var t = token.setToken(user_name+clientIp);
				res.cookie("token",JSON.stringify({
											t:t,
											user:user[0].user_name
										}),{maxAge:config.tokenAge,httpOnly:true,path:"/"});
				res.send({
					success:true,
					rows:user,
					ambariLocation:config.ambariAction
				});
			})
			.catch((e)=>{
				res.send({
					success:false
				});
				console.log(e);
			});
			
		}catch(e){
			res.send({
				success:false,
				rows:[]
			});
		}
	});
/**
 * {/signOut} {post}登出
 * @param {String} user_name
 * */
router.get("/signOut",(req,res,next)=>{
	try{
		if(global.jcpt_token.length <= 0){
			res.redirect("/login");
		}
		var token = JSON.parse(cookie.parse(req.headers.cookie).token);
			var len = 0;
				global.jcpt_token.forEach((value,name)=>{
					if(value.token === token.t && value.name === token.user+getClientIp(req)){
						global.jcpt_token.splice(name,1);
						res.redirect("/login");
					}
				});
	}catch(e){
		res.redirect("/login");
	}
});
/**
 * {/delete} {post}删除用户
 * @param _id {Number} 用户id
 * */
router.post("/delete",check,(req,res,next)=>{
	var _id = Number(req.body["_id"]);
	db_delete(tableName,"where _id="+_id,(result)=>{
		res.send({
			success:result
		});
	});
});
/**
 * {/save} {post}更改用户
 * @param _id {Number} 用户id
 * */
router.post("/save",check,(req,res,next)=>{
	var user_name = req.body.user_name;
	user_name = user_name.replace(/\'/g,"a");
	var _id = Number(req.body.id);
	var groups = Number(req.body.groups);
	var active = Number(req.body.active);
	save(tableName,"user_name='"+user_name+"',active="+active+",groups="+groups,"where _id="+_id,(succ,result)=>{
		res.send({
			success:succ
		});
	});
});
module.exports = router;