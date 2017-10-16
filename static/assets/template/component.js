
//header
window.HeaderBar = React.createClass({
					propTypes:{
					},
					render:function(){
						var user = JSON.parse(localStorage.getItem("user"));
						return <header>
									<div className="heading">
										<a className="logo" href={this.props.home}>
											<img src="/assets/images/logo.png"/>
										</a>
										{
											this.props.isLogin==undefined?
												<div className="header-right">
													<div className="user">{user.user_name}</div>
													<a id="signOut" href="/user/signOut">[退出]</a>
												</div>
											:
											<div className="header-right">
													<div className="user">还未登录</div>
													<a id="signOut" href="/login">登录</a>
												</div>
										}
										
									</div>
								</header>;
					}
				});
//navbar
var navbar = [
		{
			title:"数据流配置",
			href:"/"
		},
		{
			title:"数据流管理",
			href:"/guanli"
		},
		{
			title:"规则配置",
			href:"/peizhi"
		},
		{
			title:"监控管理",
			href:"/jiankong"
		},
		{
			title:"用户列表",
			href:"/user"
		}
	];
window.Navbar = React.createClass({
	propTypes:{
		index:React.PropTypes.string.isRequired //当前index索引
	},
	render:function(){
		var self = this;
		return <div className="navbar">
					<ul>
						{
							navbar.map(function(value,index){
								return <li key={index}>
											<a	className={self.props.index == index?'active':''} href={value.href}>{value.title}</a>
										</li>
							})
						}
					</ul>
				</div>;
	}
});
//container
window.Container = React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired //内容名称
	},
	render:function(){
		document.title = this.props.title;
		return <div className="container">
					<div className="container-c">
						<div className="cc-title">{this.props.title}</div>
						<ContainerBox/>
					</div>
			   </div>;
	}
});
window.SearchBox = React.createClass({
	propTypes:{
		callback:React.PropTypes.func //搜索回调函数
	},
	render:function(){
		return <div className="sjl-line searchbox">
						<input className="sjl_input" ref="search_text" type="text" placeholder="数据流名称"/>
						<input className="sjl-submit" onClick={this.submit} type="button" title="搜索" value=""/>
					</div>
	},
	submit:function(event){
		var self = this;
		var target = $(event.target);
		if(!target.hasClass("not_search")){
			target.addClass("not_search");
			self.props.callback(self.refs["search_text"].value,function(){
				target.removeClass("not_search")
			});
		}
		
	}
})
//chackbox
window.Checkbox = React.createClass({
	propTypes:{
		types:React.PropTypes.string.isRequired //传入选择的类型  checkbox 或者 radio
	},
	render:function(){
		return <label>
					<div className="t-checkbox">
						<input onChange={this.checkboxChange} name="t-check" type={this.props.types}/>
					</div>
				</label>
	},
	componentDidMount:function(){
		$("input[type='"+this.props.types+"']").each(function(){
			$(this).trigger("change");
		});
	},
	checkboxChange:function(event){
		if(event.target.checked){
			if(this.props.types == "radio"){
				$(".t-checkbox").removeClass("active");
			}
			
			$(event.target).parents(".t-checkbox").addClass("active");
		}else{
			$(event.target).parents(".t-checkbox").removeClass("active");
			
		}
	}

})
//table list
//生成标题
function th(th,index){
	return <div className="th" key={index}>
				{
					th.map(function(item,key){
						return <div key={key} className="td" style={item.style}>{item.title}</div>
					})
				}
			</div>
}
//生成列表
function tr(tr,index){
	
	return <div className="tr" data-index={index} key={index}>
				{
					tr.map(function(item,key){
						return <div className="td" key={key} style={item.style}>
						{
							item.title == 'checkbox' || item.title == 'radio'?
								<Checkbox types={item.title}/>
								:item.title
						}
						</div>
					})
				}
			</div>
}
window.TableList = React.createClass({
	propTypes:{
		tabledata:React.PropTypes.object.isRequired //传入table数据udixiang {th:[[{title:"",style:""}],[]],}
	},
	render:function(){
		var self = this;
		return <div className="c-table" key={0}>
					{
						this.props.tabledata.th.map(function(value,name){
							return th(value,name)
						})
					}

					{
						this.props.tabledata.tr.length == 0?
							<div className="tr">
								<div className="td" key={0} style={{width:"100%"}}>还没有数据</div>
							</div>
							:this.props.tabledata.tr.map(function(value,name){
								return tr(value,name)
							})
					}
				</div>
	}
});
//选择组件
window.Selects = React.createClass({
	propTypes:{
		options:React.PropTypes.array.isRequired //传入选项 {title:,value:}
	},
	componentDidMount:function(){
		$("select").each(function(){
			var opt = $(this).find("option").eq(0);
			opt[0].selected = true;
			$(this).prev(".select-bg").html(opt.text());
		});
	},
	render:function(){
		return	<div className="select-xt">
						<div className="select-bg">
						</div>
						<select onChange={this.selectChange} name="" >
							{
								this.props.options.map(function(value,name){
										return <option  key={name} value={value.value}>{value.title}</option>
								})
							}
						</select>
					</div>
	},
	selectChange:function(event){
			var selecs = $(event.target);
			selecs.prev(".select-bg").html(selecs.find("option:selected").text());
	}
});
//loading
window.Loading = React.createClass({
	propTypes:{
		isShow:React.PropTypes.number.isRequired //是否显示
	},
	render:function(){
		return <div>
					{
						this.props.isShow==1?<div className="loading" style={
							{width:"120px",height:"44px",position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",margin:"auto",zIndex:"10"}
						}>
														<img width="100%" height="100%" src="/assets/images/loading.gif"/>
												</div>
												:<div></div>
					}
				</div>
	}
})