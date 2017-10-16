const kafka = require("kafka-node");
/*
var Consumer = kafka.Consumer;
var client = new kafka.Client('10.40.144.202:9094,10.40.144.203:9094,10.40.144.206:9094'); //测试
var Offset = kafka.Offset;
var offset = new Offset(client);
console.log("连接kafka中...");

var topics = [
	{
		topic:"sh_gt_tlxx_smz",
		partition:2,
		offset:0
	},
	{
		topic:"sh_gt_tlxx_smz",
		partition:2,
		offset:0
	},
	{
		topic:"sh_gt_tlxx_smz",
		partition:2,
		offset:0
	}
];

var options = {
	autoCommit:false,
	autoCommitMsgCount:100,
	autoCommitIntervalMs:1000,

	fetchMaxWaitMs:100,
	fetchMinBytes:1,
	fetchMaxBytes:1024*10,
	fetchOffset:true,
	fromBeginning:false,

	"security.protocol":"sasl_plaintext",
	"sasl.mechanisms":"PLAIN",
	"sasl.username":"st",
	"sasl.password":"stkafka",
	"api.version.request":true

}
var consumer = new Consumer(client,topics,options);

consumer.on("ready",function(message){
	var key = message.key.toString();
	console.log("ready");
	console.log(key);
});

consumer.on("offsetOutOfRange",function(err){
	console.log("offset");
	console.log(err);
});

consumer.on("message",function(message){
	var key = message.key.toString();
	console.log(key);
});

consumer.on("error",function(message){
	console.error("kafka错误:",message);
});*/
var Producer = kafka.Producer;
var Client = kafka.Client;
var client = new Client("10.40.144.203:9094");
var topics = [
	{
		topic:"sh_gt_tlxx_smz",
		partition:2,
		offset:0
	}
];

var producer = new Producer(client,{
	requireAcks:1,
	"security.protocol":"sasl_plaintext",
	"sasl.mechanisms":"PLAIN",
	"sasl.username":"st",
	"sasl.password":"stkafka",
	"api.version.request":true
});
console.log("连接kafka中...");
producer.on("ready",function(message){
	console.log("ready");
	console.log(key);
});
producer.on("error",function(err){
	console.log("error");
	console.log(err);
});
producer.on("offsetOutOfRange",function(err){
	console.log("offset");
	console.log(err);
});

producer.on("message",function(message){
	var key = message.key.toString();
	console.log(key);
});