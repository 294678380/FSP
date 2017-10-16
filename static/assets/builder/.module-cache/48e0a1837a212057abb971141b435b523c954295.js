

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
	getTableData:function(relname,callback){
		var self = this;
		var data = {};
			if(relname != undefined){
				data = {relname:relname}
			}
		$.post("/guanli",data,function(res){
			if(res.success){
				var rows = res.rows;
				var tr = [];
				for(var i=0,len=rows.length;i<len;i++){
					tr.push([
							{
								title:"checkbox",
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
								title:"操作",
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
		var kafka_option = [
			{
				title:"选项1",
				"value":"1"
			},
			{
				title:"选项2",
				"value":"1"
			}
		]
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
						React.createElement("div", {className: "sel"}, 
							React.createElement(Selects, {key: 0, options: kafka_option})
						), 
						React.createElement("a", {className: "kafka-test test", href: "javascript:;"}, "测试"), 
						React.createElement("input", {type: "button", className: "kafka-submit submit", value: "关联"})
					), 
					React.createElement("div", {className: "titles"}, 
						"直接发布"
					), 
					React.createElement("div", {className: "zjfb"}, 
						React.createElement("a", {className: "zjfb-test test", href: "javascript:;"}, "测试"), 
						React.createElement("input", {type: "button", className: "zjfb-submit submit yellow", value: "发布"})
					)
				)
	},
	click:function(){
		
	}
});
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {userName: "admin", signOut: "/signOut", home: "./index.html"}), 
		React.createElement(Navbar, {index: "1"}), 
		React.createElement(Container, {title: "数据流管理"})
	)
	,$(".content")[0]
)