const path = require("path");
const fs = require("fs");
module.exports = (text,pathName)=>{
	var deferred = new Deferred();
	var FilePath = path.join(__dirname,pathName+".txt");
	fs.writeFile(FilePath,text+"\n",{encoding:"utf-8",mode:438,flag:'a'},deferred.callback());
	return deferred.promise;
}