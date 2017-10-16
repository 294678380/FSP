
module.exports = function(app){
	app.use("/api/v1/streams",require("./fsp_streams"));
}