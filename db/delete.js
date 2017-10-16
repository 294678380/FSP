/**
 * 删除数据
 * 
 * */
var connect = require("../model/pg/pg.connect");
module.exports = (from,end,callback)=>{
	var sql = "delete from "+from+" "+end;
	connect().then(function (pg,client,done){
		
			client.query(sql,function(err,result){
				pg.end();
				done();
				if(err){
					callback(false);
					return console.error("delete--- "+sql+" error:"+err);
				}
				callback(true);
			});
	});
}
