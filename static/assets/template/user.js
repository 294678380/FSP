window.ContainerBox = React.createClass({
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
	getBtn:function(id){ //<a href='javascript:;' data-id={id} onClick={this.edit}>编辑</a>
			return <div className="btns">
					 <a href='javascript:;' data-id={id} onClick={this.delete}>删除</a>
				   </div>
		
	},
	//获取内容
	getTableData:function(callback){
		var self = this;
		self.setState({
			loading:1
		});
		$.get("/user/list",{pageSize:100,pageNo:1},function(res){
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
		return <div className="userlist">
					<Loading isShow={
						this.state.loading
					}/>
					<TableList tabledata={this.state.tableData}></TableList>
					<div className="add-user">
						<div className="titles">添加用户</div>
						<ul className="form-list">
							<li>
								<div className="name">用户名：</div>
								<div className="value">
									<input type="text" ref="username" className="input" placeholder="用户名"/>
								</div>
							</li>
							<li>
								<div className="name">密码：</div>
								<div className="value">
									<input type="password" ref="password" className="input" placeholder="密码"/>
								</div>
							</li>
							<li>
								<div className="name">确认密码：</div>
								<div className="value">
									<input type="password" ref="zpass" className="input" placeholder="确认密码"/>
								</div>
							</li>
							<li>
								<input type="button" className="user-submit" onClick={this.add} value="添加"/>
							</li>
						</ul>
					</div>
				</div>
	},
	edit:function(){

	},
	add:function(){
		var self = this;
		var username = this.refs["username"].value;
		var password = this.refs["password"].value;
		var zpass = this.refs["zpass"].value;
		var rex = /^[\w\d\=\-\_\,]{2,}$/g;
		if(!rex.test(username)){
			K.tips("用户名格式不正确");
			return false;
		}
		var rex = /^[\w\d\=\-\_\,]{2,}$/g;
		if(!rex.test(password)){
			K.tips("密码格式不正确");
			return false;
		}
		if(password !== zpass){
			K.tips("两次输入的密码不一致");
			return false;
		}

		$.post("/user",{
				user:JSON.stringify({
						username:username,
						password:password,
						group:1,
						active:1
			})
			},function(res){
				if(res.success){
						K.tips("添加成功");

						self.getTableData();
					}else{
						K.tips("添加添加失败");
					}
			});
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
	<div>
		<HeaderBar/>
		<Navbar index="4"/>
		<Container title="用户列表"/>
	</div>
	,$(".content")[0]
);