/**
 * 更改数据
 * 
 * */
var connect = require("../model/pg/pg.connect");
module.exports = (field,from,end,callback)=>{
	var sql = "update "+field+" set "+from+" "+end;
	connect().then(function (pg,client,done){
		//创建表
			client.query(sql,function(err,result){
				pg.end();
				done();
				if(err){
					callback(false);
					return console.error("error running query["+sql+"]",err);
				}
				callback(true,result);
			});
	});
}
