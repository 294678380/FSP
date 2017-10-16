window.ContainerBox = React.createClass({
	render:function(){
		var tableList = {
			th:[
				[
					{
						title:"",
						style:{
							width:"25%"
						}
					},
					{
						title:"数据流名称",
						style:{
							width:"25%"
						}
					},
					{
						title:"描述",
						style:{
							width:"25%"
						}
					},
					{
						title:"操作",
						style:{
							width:"25%"
						}
					}
				]
			],
			tr:[
				[
					{
						title:"checkbox",
						style:{width:"25%"}
					},
					{
						title:"卡口数据流",
						style:{width:"25%"}
					},
					{
						title:"实时从kafka读取卡口数据",
						style:{width:"25%"}
					},
					{
						title:<a href='javascript:;'>操作</a>,
						style:{width:"25%"}
					}
				],
				[
					{
						title:"checkbox",
						style:{width:"25%"}
					},
					{
						title:"卡口数据流",
						style:{width:"25%"}
					},
					{
						title:"实时从kafka读取卡口数据",
						style:{width:"25%"}
					},
					{
						title:<a onClick={this.click} href='javascript:;'>操作</a>,
						style:{width:"25%"}
					}
				]
			]
		}
		return <div className="containerbox">
					<SearchBox/>
					<TableList tabledata={tableList}/>
					<div className="titles">监控管理</div>
					
				</div>
	}
})
ReactDOM.render(
	<div>
		<HeaderBar home="/" />
		<Navbar index="3"/>
		<Container title="监控管理"/>
	</div>
	,$(".content")[0]
);