
window.RestfulTest = React.createClass({
	componentDidMount:function(){

	},
	render:function(){
		return <div ref="restful_test" className="restful_test none">
					<div className="ajax_demo">
						<h2>请求示例</h2>
						<pre>
							<p>$.ajax(&#123;</p>
							<p>	      type:"post",</p>
							<p>	      url:"<span style={{color:"#ff9000"}}>http://{location.host}/api/v1/streams/add/<span id="restul_test_relname"></span></span>",</p>
							<p>	      async:true,</p>
							<p>	      dataType:"json",</p>
							<p>	      data:&#123;</p>
							<p>            key:"用户凭证",</p>
							<p>            field:"字段名",//多个字段名使用,号隔开</p>
							<p>            value:"字段内容"//多个字段内容使用,号隔开</p>
							<p>	      &#125;,</p>
							<p>	      success:function(res)&#123;</p>
							<p>		      .....返回api响应;</p>
							<p>	            &#125;</p>
							<p>&#125;);</p>
						</pre>
					</div>
			   </div>
	}
});
window.ContainerBox = React.createClass({
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
			return <a href='javascript:;' data-relname={relname} onClick={this.reset}>直接发布</a>;
		}else{
			return <a data-relname={relname}  onClick={this.retest} href='javascript:;'>测试接口</a>;
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
		return <div className="containerbox">
					<SearchBox callback={this.getTableData}/>
					<Loading isShow={
						this.state.loading
					}/>
					<TableList tabledata={this.state.tableData}></TableList>
					<div className="titles">
						关联kafka
					</div>
					<div className="kafka">
						<input type="text" className="kafka_input" placeholder="输入kafka的ip地址使用,号隔开"/>
						<a className="kafka-test test" href="javascript:;">测试</a>
						<input type="button" className="kafka-submit submit" value="关联"/>
					</div>
					<RestfulTest/>
				</div>
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
				self.retest(event);
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
			
			K.confirm({
				width:"680px",
				title:"测试接口",
				content:restful_test[0],
				ok:function(){

				},
				init:function(){
					$("#restul_test_relname").html(relname);
				}
			});
	}
});
ReactDOM.render(
	<div>
		<HeaderBar home="/"/>
		<Navbar index="1"/>
		<Container title="数据流管理"/>
	</div>
	,$(".content")[0]
)