/**
 * 插入数据
 * */
var connect = require("../model/pg/pg.connect");

module.exports = (fields,values,callback)=>{
	connect().then(function (pg,client,done){
		var sql = "insert into "+fields+" values("+values+")";
		client.query(sql,(err,result)=>{
			pg.end();
			done();
			if(err){
				callback(false);
				return console.error("insert into "+sql+" error:"+err);
			}
			callback(true);
		});
	});
}
