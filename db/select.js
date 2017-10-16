/**
 * 查询数据
 * 
 * */
var connect = require("../model/pg/pg.connect");
module.exports = (field,from,end,callback)=>{
	var deferred = new Deferred();
	var sql = "select "+field+" from "+from+" "+end;
	var pgo = null;
	var donefn = null;
	connect().then(function (pg,client,done){
		pgo = pg;
		donefn = done;
		return client.query(sql,deferred.callback());
	}).then(function(){
		pgo.end();
		donefn();
	});
	return deferred.promise;
}
