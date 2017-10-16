/*
  角色管理
 * */
var express = require("express");
var router = express.Router();
var check = require("../lib/check");
var select = require("../db/select");
var insert = require("../db/insert");
var db_delete = require("../db/delete");
/**
 * {/groups} {get} {查询所有角色接口}
 */
router.get("/",check,(req,res,next)=>{
		select("*","jcpt_groups","")
		.then((result)=>{
				res.send({
					success:true,
					rows:result.rows
				});
		})
		.catch((e)=>{
				console.error(e);
				res.send({
					success:false
				})
		});
});

/**
 * {/groups} {post} {添加角色接口}
 */
router.post("/",check,(req,res,next)=>{
	var groups =  JSON.parse(req.body.form);
	var username = JSON.parse(req.body.token).user;
	select("groups","jcpt_users","where user_name='"+username+"'")
		.then((result)=>{
			var groups_id = result.rows[0].groups;
			return select("json","jcpt_groups","where _id="+groups_id);
		})
		.then((gr_result)=>{
					var _json = {qs:[]};
					//确认权限
					var user_qs = JSON.parse(gr_result.rows[0].json);
					if(user_qs.qs != "all"){
						groups.json.forEach((value,name)=>{
							user_qs.qs.forEach((item,key)=>{
								if(value === item){
									_json.qs.push(item);
									return;
								}
							});
						});
					}else{
						_json.qs = groups.json;
					}
					if(_json.qs.length == 0){
						res.send({
								success:false
							});
						return;
					}
					//插入
					insert("jcpt_groups(title,json)","'"+groups.groupname+"'"+","+"'"+JSON.stringify(_json)+"'",(result)=>{
						if(result == true){
							res.send({
								success:true
							});
						}else{
							res.send({
								success:false
							});
						}
					});
		})
	.catch((e)=>{
			console.error(e);
			res.send({
					success:false
				})
	})
});
/**
 * {/delete} {post}删除用户
 * @param _id 用户id
 * */
router.post("/delete",check,(req,res,next)=>{
	var _id = Number(req.body["_id"]);
	db_delete("jcpt_groups","where _id="+_id,(result)=>{
		res.send({
			success:result
		});
	});
});
module.exports = router;