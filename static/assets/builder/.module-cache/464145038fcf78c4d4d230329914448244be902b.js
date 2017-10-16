
window.RestfulTest = React.createClass({displayName: "RestfulTest",
	componentDidMount:function(){

	},
	render:function(){
		return React.createElement("div", {ref: "restful_test", className: "restful_test none"}, 
					React.createElement("div", {className: "ajax_demo"}, 
						React.createElement("h2", null, "请求示例"), 
						React.createElement("pre", null, 
							React.createElement("p", null, "$.ajax({"), 
							React.createElement("p", null, "       type:\"post\","), 
							React.createElement("p", null, "       url:\"本域名/api/v1/streams/add/test2\","), 
							React.createElement("p", null, "       async:true,"), 
							React.createElement("p", null, "       dataType:\"json\","), 
							React.createElement("p", null, "       data:{"), 
							React.createElement("p", null, "            key:\"用户凭证\","), 
							React.createElement("p", null, "            field:\"字段名\",//多个字段名使用,号隔开"), 
							React.createElement("p", null, "            value:\"字段内容\"//多个字段内容使用,号隔开"), 
							React.createElement("p", null, "       },"), 
							React.createElement("p", null, "       success:function(res){"), 
							React.createElement("p", null, "        .....返回api响应;"), 
							React.createElement("p", null, "             }"), 
							React.createElement("p", null, "});")
						)
					), 
					React.createElement("div", {className: "insert_demo"}
						
					)
			   )
	}
});
window.ContainerBox = React.createClass({displayName: "ContainerBox",
	th:[[
			{
				title:"",
				style:{width:"25%"}
			},
			{
				title:"数据流名称",
				style:{width:"25%"}
			},
			{
				title:"描述",
				style:{width:"25%"}
			},
			{
				title:"操作",
				style:{width:"25%"}
			}
	]],
	componentDidMount:function(){
		this.getTableData();
	},
	getBtn:function(reset,relname){
		if(reset == null || reset == 'null'){
			return React.createElement("a", {href: "javascript:;", "data-relname": relname, onClick: this.reset}, "直接发布");
		}else{
			return React.createElement("a", {"data-relname": relname, onClick: this.retest, href: "javascript:;"}, "测试接口");
		}
		
	},
	//获取内容
	getTableData:function(relname,callback){
		var self = this;
		var data = {};
			if(relname != undefined && relname != ""){
				data = {relname:relname}
			}
		self.setState({
			loading:1
		});
		$.post("/guanli",data,function(res){
			if(res.success){
				var rows = res.rows;
				var tr = [];
				for(var i=0,len=rows.length;i<len;i++){
					tr.push([
							{
								title:"radio",
								style:{width:"25%"}
							},
							{
								title:rows[i].relname,
								style:{width:"25%"}
							},
							{
								title:rows[i].reltext,
								style:{width:"25%"}
							},
							{
								title:self.getBtn(rows[i].reset,rows[i].relname),
								style:{width:"25%"}
							}
						]);
				}
				self.setState({
					tableData:{
						th:self.th,
						tr:tr
					},
					loading:0
				});
				if(callback){
					callback();
				}
			}
		});
	},
	getInitialState:function(){
		var self = this;
		return {
			tableData:{
				th:self.th,
				tr:[]
			},
			loading:1
		}
	},
	render:function(){
		return React.createElement("div", {className: "containerbox"}, 
					React.createElement(SearchBox, {callback: this.getTableData}), 
					React.createElement(Loading, {isShow: 
						this.state.loading
					}), 
					React.createElement(TableList, {tabledata: this.state.tableData}), 
					React.createElement("div", {className: "titles"}, 
						"关联kafka"
					), 
					React.createElement("div", {className: "kafka"}, 
						React.createElement("input", {type: "text", className: "kafka_input", placeholder: "输入kafka的ip地址使用,号隔开"}), 
						React.createElement("a", {className: "kafka-test test", href: "javascript:;"}, "测试"), 
						React.createElement("input", {type: "button", className: "kafka-submit submit", value: "关联"})
					), 
					React.createElement(RestfulTest, null)
				)
	},
	//直接发布
	reset:function(event){
		var target = $(event.target);
		var relname = target.attr("data-relname");
		var self = this;
		if(target.hasClass("not-submit")){
			return false;
		}
		target.addClass("not-submit");
		$.post("/guanli/reset",{relname:relname},function(res){
			if(res.success){
				K.tips("发布成功");
				self.getTableData();
			}else{
				K.tips("发布失败");
			}
			target.removeClass("not-submit");
		});
	},
	//测试接口
	retest:function(event){
		var target = $(event.target);
		var relname = target.attr("data-relname");
		var restful_test = $(".restful_test");
			console.log(restful_test)
			K.confirm({
				width:"680px",
				title:"测试接口",
				content:restful_test[0],
				ok:function(){

				},
				init:function(){

				}
			});
	}
});
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {home: "/"}), 
		React.createElement(Navbar, {index: "1"}), 
		React.createElement(Container, {title: "数据流管理"})
	)
	,$(".content")[0]
)