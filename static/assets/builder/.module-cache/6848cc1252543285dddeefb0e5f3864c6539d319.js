window.ContainerBox = React.createClass({displayName: "ContainerBox",
	th:[[
			{
				title:"用户id",
				style:{width:"10%"}
			},
			{
				title:"用户名",
				style:{width:"20%"}
			},
			{
				title:"认证key",
				style:{width:"30%"}
			},
			{
				title:"创建时间",
				style:{width:"25%"}
			},
			{
				title:"操作",
				style:{width:"15%"}
			}
	]],
	componentDidMount:function(){
		this.getTableData();
	},
	getBtn:function(id){
			return React.createElement("div", {className: "btns"}, 
					 React.createElement("a", {href: "javascript:;", "data-id": id, onClick: this.edit}, "编辑"), 
					 React.createElement("a", {href: "javascript:;", "data-id": id, onClick: this.delete}, "删除")
				   )
		
	},
	//获取内容
	getTableData:function(callback){
		var self = this;
		self.setState({
			loading:1
		});
		$.get("/user/list",{},function(res){
			if(res.success){
				var rows = res.rows;
				var tr = [];
				for(var i=0,len=rows.length;i<len;i++){
					tr.push([
								{
									title:rows[i]._id,
									style:{width:"10%"}
								},
								{
									title:rows[i].user_name,
									style:{width:"20%"}
								},
								{
									title:rows[i].res_key,
									style:{width:"30%"}
								},
								{
									title:rows[i].create_time,
									style:{width:"25%"}
								},
								{
									title:self.getBtn(rows[i]._id),
									style:{width:"15%"}
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
		return React.createElement("div", {className: "userlist"}, 
					React.createElement(Loading, {isShow: 
						this.state.loading
					}), 
					React.createElement(TableList, {tabledata: this.state.tableData}), 
					React.createElement("div", {className: "add-user"}, 
						React.createElement("div", {className: "titles"}, "添加用户"), 
						React.createElement("ul", {className: "form-list"}, 
							React.createElement("li", null, 
								React.createElement("div", {className: "name"}), 
								React.createElement("div", {className: "value"}, 
									React.createElement("input", {type: "text", className: "input", placeholder: "用户名"})
								)
							), 
							React.createElement("li", null

							), 
							React.createElement("li", null

							)
						)
					)
				)
	},
	edit:function(){

	},
	delete:function(event){
		var self = this;
		var target = $(event.target);
		var id = target.attr("data-id");
		var user = JSON.parse(localStorage.getItem("user"));
		if(id == user._id){
			K.tips("不可以删除你自己");
			return;
		}
		if(id == 1){
			K.tips("不可以删除admin");
			return;
		}
		K.confirm({
			title:"温馨提示",
			content:"确认删除此用户？",
			ok:function(){
				$.post("/user/delete",{_id:id},function(res){
					if(res.success){
						K.tips("删除成功");
						self.getTableData();
					}else{
						K.tips("删除失败");
					}
				});
			}
		})
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, null), 
		React.createElement(Navbar, {index: "4"}), 
		React.createElement(Container, {title: "用户列表"})
	)
	,$(".content")[0]
);