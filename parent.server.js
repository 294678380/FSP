var fork = require("child_process").fork;
var workers = [];
var appsPath = ["./index.js"];

var createWorker = function(appPath){
	var worker = fork(appPath);
		worker.on("exit",()=>{
			console.log("worker:"+worker.pid+"exited");
			delete workers[worker.pid];
			createWorker(appPath);
		});
		workers[worker.pid] = worker;
		console.log("Create worker:"+worker.pid);
}
appsPath.forEach((value,name)=>{
	createWorker(value);
});

process.on("exit",function(){
	for( var pid in workers){
		workers[pid].kill();
	}
	fork("./parent.server.js");
});
