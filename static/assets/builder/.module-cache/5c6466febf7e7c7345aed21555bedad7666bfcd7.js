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
					React.createElement("div", {className: "titles"}, "规则配置"), 
					React.createElement("div", {className: "gzpz"}, 
						React.createElement("textarea", {name: "", placeholder: "请输入sql语句", id: "", cols: "30", rows: "10", pla: true})
					), 
					React.createElement("div", {className: "gzpz-submit"}, 
						React.createElement("a", {className: "zjfb-test test", href: "javascript:;"}, "测试"), 
						React.createElement("input", {type: "button", className: "zjfb-submit submit yellow", value: "发布"})
					)
				)
	}
})
ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(HeaderBar, {home: "./index.html", signOut: "./index.html"}), 
		React.createElement(Navbar, {index: "2"}), 
		React.createElement(Container, {title: "规则配置"})
	)
	,$(".content")[0]
);