/**
 * 详细配置
 * */
var express = require("express");
var router = express.Router();
var config = require("config-lite");
var check = require("../lib/check");
var select = require("../db/select");
var create = require("../db/create");

router.get("/",check,(req,res,next)=>{
	res.render("index",{
		pageName:"index"
	})
});

//创建流
	//表单验证
var vidor= function(data){
		var formV = {
			title:function(val){
				var rex = /^[0-9a-zA-Z\-_\.\*]{2,}$/g;
				if(!rex.test(val)){
					return "数据流名称必须是2位以上的英文组合，可包含特殊字符-_.*";
				}
			},
			text:function(val){

			},
			field_name:function(val){
				var rex = /^[0-9a-zA-Z\-_\.\*]{2,}$/g;
				if(!rex.test(val)){
					return "字段名必须是2位以上的英文组合，可包含特殊字符-_.*";
				}
			},
			field_type:function(val){
				var rex = /^[a-zA-Z\-_\.\*]{2,}$/g;
				if(!rex.test(val)){
					return "请输入正确的字段类型";
				}
			}
		}
		for(i in data){
			if(typeof(data[i])=="string"){
				var msg = formV[i](data[i]);
				if(msg){
					return msg;
				}
			}else{
				for(var b = 0,len=data[i].length ; d=data[i][b++] ;){
					var msg;
						msg = formV[i+"_name"](d.name);
						if(msg){
							return msg;
						}
						msg = formV[i+"_type"](d.type);
						if(msg){
							return msg;
						}
				}
			}
		}
	}
/**
	创建流
	@method {POST}
	@router {/}
	@param {streamData}
*/
router.post("/",check,(req,res,next)=>{
	let stream = JSON.parse(req.body.data);
	
	let msg = vidor(stream);
		if(msg){
			res.send({
				success:false,
				msg:msg
			});
			return;
		}
		select("count(*) as len","pg_class","where relname='"+stream.title+"'")
		.then((msg)=>{
				if(msg.rows[0].len == 0){
					create.createStream(stream,function(success){
						if(success){
							msg = "创建成功";
						}else{
							msg = "创建失败";
						}
						res.send({
							success:success,
							msg:msg
						});
					});
				}else{
					res.send({
							success:false,
							msg:"流已存在"
						});
				}
		})
		.catch((e)=>{
			console.error(e);
		});
		/**/
		
})

module.exports = router;
