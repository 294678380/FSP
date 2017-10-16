/**
 * 详细配置
 * */
var express = require("express");
var router = express.Router();
var config = require("config-lite");
var check = require("../lib/check");
var select = require("../db/select");

router.get("/",check,(req,res,next)=>{
	res.render("index",{
		pageName:"peizhi"
	})
});

module.exports = router;