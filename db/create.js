/**
 * 创建表
 * 
 * */
var connect = require("../model/pg/pg.connect");
var insert = require("./insert");
module.exports = {
	//创建流
	createStream:(stream,callback)=>{
		let field = "(";
			stream.field.forEach((value,name)=>{
				field += value.name+" "+value.type;
				if(name+1 != stream.field.length){
					field += ",";
				}
			});
			field+=")";
			connect().then(function (pg,client,done){
				var createStream = "create stream " + stream.title + field;
				client.query(createStream,function(err,result){
					if(!err){
						insert("fsp_streams(relname,reltext,edit_time,create_time)"
						,"'"+stream.title+"',"+"'"+stream.text+"',"+new Date().getTime()+","+new Date().getTime()
						,function(res){
							if(res){
								callback(true);
							}else{
								//日志收集
								callback(res);
							}
						});
						pg.end();
						done();
					}else{
						//日志收集
						console.error(err);
						callback(false);
					}

				});
			});
	},
	createTable:()=>{
		connect().then(function (pg,client,done){
			var sql = "create table fsp_streams(id SERIAL not null PRIMARY key,relname varchar(40),reltext text,reset int,edit_time varchar(40),create_time varchar(40),kafka text)";
			client.query(sql,function(err,result){
				//日志收集
				var users = "create table fsp_users(user_name varchar(32),pass_word varchar(40),res_key varchar(40),_id SERIAL not null PRIMARY key,groups int,active int,create_time date)";
				client.query(users,function(err,result){
					//日志收集
					if(!err){
						insert("fsp_users(user_name,pass_word,res_key,groups,active,create_time)","'admin','ISMvKXpXpadDiUoOSoAfww','ISMvKXpXpadDiUoOSoAfww',1,1,'2017-6-19'",function(err){
							if(!err){
								pg.end();
								done();
							}
						});
					}
					
				});

				var groups = "create table fsp_groups(_id SERIAL primary key not null,title varchar(40),json text)";
				client.query(groups,function(err,result){
					//日志收集
					if(err){
						
					}
				});
			});
		});
	}
}
