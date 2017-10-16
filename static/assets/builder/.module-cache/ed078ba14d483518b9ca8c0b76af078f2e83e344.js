window.ContainerBox = React.createClass({displayName: "ContainerBox",
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
						title:React.createElement("a", {href: "javascript:;"}, "操作"),
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
						title:React.createElement("a", {onClick: this.click, href: "javascript:;"}, "操作"),
						style:{width:"25%"}
					}
				]
			]
		}
		return React.createElement("div", {className: "containerbox"}, 
					React.createElement(SearchBox, null), 
					React.createElement(TableList, {tabledata: tableList}), 
					React.createElement("div", {className: "titles"}, "监控管理")
					
				)
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {home: "/", signOut: "./index.html"}), 
		React.createElement(Navbar, {index: "3"}), 
		React.createElement(Container, {title: "监控管理"})
	)
	,$(".content")[0]
);