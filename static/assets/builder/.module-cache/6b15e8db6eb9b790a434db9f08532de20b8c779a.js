

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
			return React.createElement("a", {"data-relname": relname, href: "javascript:;"}, "测试接口");
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
					)
					
					
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
	retest:function(){
		
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