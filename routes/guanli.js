/**
 * 详细配置
 * */
var express = require("express");
var router = express.Router();
var config = require("config-lite");
var check = require("../lib/check");
var select = require("../db/select");
var save = require("../db/save");

router.get("/",check,(req,res,next)=>{
	res.render("index",{
		pageName:"guanli"
	})
});

/**
	查询流列表
	@method {POST}
	@router {/}
	@param {streamData}
*/
router.post("/",check,(req,res,next)=>{
	let where = "order by id";
	if(req.body.relname != undefined){
		where = "where relname='"+req.body.relname.replace(/\'/g,"a")+"' "+"order by id";
	}
	select("*","fsp_streams",where)
	.then((result)=>{
		res.send({
			success:true,
			rows:result.rows
		})
	})
	.catch((e)=>{
		console.error(e);
	})
});

/**
	直接发布
	@method {POST}
	@router {/reset}
	@param {relname}
*/
router.post("/reset",check,(req,res,next)=>{
	var relname = req.body.relname.replace(/\'/g,"a");
	save("fsp_streams","reset=1","where relname='"+relname+"'",(success)=>{
		res.send({
			success:success
		})
	})
});
module.exports = router;