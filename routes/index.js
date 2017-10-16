module.exports = function(app){
	app.use("/",require("./home"));
	app.use("/user",require("./user"));
	app.use("/guanli",require("./guanli"));
	app.use("/peizhi",require("./peizhi"));
	app.use("/jiankong",require("./jiankong"));
	app.use("/login",require("./login"));
	require("./api/v1/restful_router.js")(app)
}