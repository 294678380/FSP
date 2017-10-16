/**
 * postgreSQL数据连接
 * 
 * */
var config = require("config-lite");
var pg = require("pg");
var pgconfig = config.pg;

var contString = "postgres://"+pgconfig.user+":"+pgconfig.password+"@"+pgconfig.local+"/"+pgconfig.database;

module.exports = (callback)=>{
	var deferred = new Deferred();
	pg.connect(contString,deferred.callback(pg));
	return deferred.promise;
}

