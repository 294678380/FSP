/*@ ztf
 *@email 294678380@qq.com
 *@date 2016-6-8 11:45:32
 * */
var K = {
	/*弹窗dialog封装
	 *http://lab.seaning.com/_doc/API.html#options  参数文档地址
	 * */
	confirm:function(o){
				var b={
						 title: '温馨提示',
						    content: '温馨提示',
						    lock:true,
						    fixed:true,
						    background:"#000000",
						    width:'auto',
						    height:'auto',
						    opacity:"0.5",
						    okVal:'确定',
						    cancelVal:'取消',
						    zIndex:"2016",
						    esc:true,
						    ok: function(){
						        //ok按钮执行的函数
						    },
						    cancel:function(){
						    	//取消按钮执行的函数
						    }
					};
					var opts = $.extend(true,b,o);
					//添加行为
					
					var fart = art.dialog(opts);
					return fart;
				},
				/*@see 新建提示框
				 * @param t{String} 提示内容字符串
				 * @param type{Number} 提示的类型
				 * @param d{Number} 提示的持续时间
				 * @return {Object} art对象
			 	*/
				tips:function(t,type,d){
					if($(".aui_outer1,.aui_outer2,.aui_outer3").length>=1){
						return;
					}
					$('.aui_outer').removeClass('aui_outer1');
					typeof t=='string'?t=t:t="提示";
					typeof d=='number'?d=d:d=3;
					typeof type=='number'?type=type:type=1;
					var opts={
						title: "温馨提示",
						time:d,
						fixed: true,
						cancel:true,
						cancelVal:"确定",
						id:"tips",
						content:t,
						init:function(){
							$(this.DOM.outer[0]).parent("div").css("zIndex",9999);
							$(this.DOM.outer[0]).addClass('aui_outer'+type);
						},
						close:function(){
							this.DOM.outer.removeClass('aui_outer'+type);
						}
					};
					return art.dialog(opts);
				},
	getdata:function(id){
					var obj = $("textarea#"+id);
					if(obj.length<1){
						console.error("错误！没找到"+id+"数据域");
						return;
					}
					if(K.trim(obj.val()).length<1){
						console.error("错误！域"+id+"数据为空");
						return {};
					}
					var _json = JSON.parse(K.trim(obj.val()));
					obj.remove();
					return _json;
				},
	open:function(url,options,cache){
			var opts=$.extend({
				title: false,
				loK: true,
				skin: "",
				opacity: 0.3,
				fixed: true,
				padding: 0,
				content: null,
				okVal:"确定",
				cancelVal:"取消",
				ok:null,
				cancel:null
			}, options);
			opts.skin="artDialog_diySkin1 QXT-popup-open "+opts.skin;
			return art.dialog.open(url,opts,cache);
		},
	pull:function(url,options,cache){
		var win = $(window.top);
		var opts=$.extend({
			title: "创可后台管理",
			loK: true,
			skin: "K-openon",
			opacity: 0.5,
			fixed: true,
			resize:true,
			esc:true,
			left:"100%",
			top:"0px",
			width:"800px",
			height:"100%",
			padding: 0,
			content: null,
			okVal:"确定",
			cancelVal:"取消",
			show:false,
			ok:null,
			cancel:null,
			init:function(){
				//打开后回调
				api = this;
	           wrap = api.DOM.wrap[0];
	          main = api.DOM.main[0];
	         fot = api.DOM.footer[0];
	         head = api.DOM.header[0];
	         $(wrap).show(); 
	         //修复内容高度
	         $(main).css("height",win.height()-$(fot).outerHeight()-$(head).outerHeight()+"px");
	         $(wrap).css({
					'left':win.width()-parseInt(opts.width)+"px",
				});
			},
			close:function(){
				api = this;
	           wrap = api.DOM.wrap[0];
	           $(wrap).css({
					'left':win.width()+"px"
				});
				setTimeout(function(){
					api.hide();
					$(wrap).remove();
				},500);
				return false;
			}
		}, options);
		opts.skin="artDialog_diySkin1 K-rightbar "+opts.skin;
		var fartopen = art.dialog.open(url,opts,cache);
		return fartopen;
	},
	//对话框
	confirmtip:function(a,b,c){
		return artDialog.confirm(a,b,c);
	},
			/* @see 设置cookie
			 * @param name{String} 设置cookie的名称
			 * @param value{*} 设置cookie的值
			 * @param Time{Number} 设置cookie的存活时间 单位为毫秒
			*/	
				setCookie:function(name,value,Time){
					/* iDay 表示过期时间   
	
	    			cookie中 = 号表示添加，不是赋值 */   
					var oDate=new Date();   
					oDate.setTime(oDate.getTime()+Time);       
					document.cookie=name+'='+value+';expires='+oDate;
				},
			/* @see 获取cookie
			 * @param name{String} cookie的名称
			 * @return {*}
			*/	
				getCookie:function(name){
					/* 获取浏览器所有cookie将其拆分成数组 */   
					var arr=document.cookie.split('; ');  
					for(var i=0;i<arr.length;i++)    {
							var arr2=arr[i].split('=');               
							if(arr2[0]==name){           
									return arr2[1];       
							}   
					}       
					return '';
				},
	//当前页面索引
	leftsliderbarindex:function(n,i){
		/*u表示当前所在的选项  i表示当前索引*/
		var o = $('.leftsliderbar');
		o.children('.leftsliderbar-list:eq('+n+')').children('ul').children('li:eq('+i+')').addClass('active');
	},
	//选择城市联动 需要引入插件 area.js  obj=select对象
	addeventcity:function(obj){
		obj.on('change',function(){
			var sval = $(this).val();
			$(this).next(".s_province-lk-bg").html(sval);
			$(this).parent("div").attr("title",sval);
		});
	},
	//获取get参数 t:要获取的参数名 s:参数设置默认值
	getres:function(t,s){
		var f = window.location.href,
		n=f.indexOf("?")
		if(n==-1){
			return s;
		}else{
			f=f.substring(n+1);
			f = f.split(/[=&]/);
			for(n=0;n<f.length;n++){
				if(f[n]===t){
					return f[n+1];
				}
			}
		}
	},
	//日历方法  api地址 http://laydate.layui.com/
	clendar:function(obj,opts){
		var options = $.extend({
			  	elem:"#"+obj.attr("id"),//目标元素
				format: 'YYYY-MM-DD hh:mm:ss', //选择格式
			   	max: '2099-06-16 23:59:59',//最大选择时间
			    min:"1970-06-16 23:59:59",//最小选择时间
			    choose: function(datas){
				       //选择结束回调
				   }
		},opts)
		try{
			obj[0].onclick=function(){
				window.laydate(options);
			}	
		}catch(e){
			
		}
		
	},
	//单选，多选按钮  o为laebl元素对象  cheKed-on选中样式
	checkboxval:function(o){
	    var cheb = o.children("input[type=checkbox]");
		var c = cheb.is(":checked");
		c?o.addClass("checked-on"):o.removeClass("checked-on");
		o.on("click",function(){
			c = cheb.is(":checked");
			c?o.addClass("checked-on"):o.removeClass("checked-on");
		});
	},
	//手机号验证 t为输入文本 返回布尔值
	phonecode:function(t){
		var rex = /^1[3456789][0-9]{9,9}$/g;
		var tl = rex.test(t);
		if(!tl){
			this.tips("请输入正确的手机号码");
		}
		return tl;
	},
	emailcode:function(t){
		var rex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
		var tl = rex.test(t);
		if(!tl){
			this.tips("请输入正确的邮箱");
		}
		return tl;
	},
	//公共select
	Kselect:function(){
		$(".selbtn,.s_province").on("change",function(){
				$(this).next(".formselect-bg").html($(this).find("option:selected").text());
			});
		$(".selbtn,.s_province").each(function(){
			$(this).next(".formselect-bg").html($(this).find("option:selected").text());
		});
	},
	//bind函数  fn为绑定function context为执行环境对象
	bind:function(fn,context){
		var _arg = [].slice.call(arguments,2);
		return function(){
			var _fnarg = _arg.concat([].slice.call(arguments));
			return fn.apply(context,_fnarg);
		}
	},
	//选项卡公共函数  oul::选项卡ul  callbaK回调函数第一个参数返回当前点击event 第二个返回当前项索引 
	tab:function(oul,callbaK,cd){
		var child = "li";
		if(cd!=undefined){
			child=cd;
		}
		oul.on("click",child,function(event){
			$(this).siblings(child).removeClass("active");
			$(this).addClass("active");
			if(callbaK){
				callbaK(event,$(this).index());
			}
		});
	},
	//数组去重 返回数组副本
	groupArray:function(arr){
			var garr =	[],
				farr = arr.concat() ,
				data,
				i=0,
				len=farr.length;
				//循环
			for(i;i<len;i++){
				data =  farr.shift();//取出值
				if(garr.indexOf(data)==-1){	//值不存在则存入副本数组
					garr.push(data);
				}
			}
			return garr;
	},
	//settimeout 异步循环遍历 name为array类型 需要循环的array对象  time设置每次运行的时间
	volist:function(name,id,callbaK,time){
		if(time==undefined){time=30;};
		var fattr = name.concat();//克隆数组
		setTimeout(function(){
			if(fattr.length>0){
				id(fattr.shift());  //执行每一个数组项运行的函数
				setTimeout(arguments.callee,time);
			}else{
				callbaK();
			}
		},time);
	},
	//menu修复
	TopMenuhide:function(){
		$(".head_menushow").hide();
		$(".hnav ul li").removeClass("active");
	},
	//plupload上传方法封装  api:http://www.cnblogs.com/2050/p/3913184.html
	plupload:function(o){
		var opts = $.extend(true,{
				 browse_button : 'uploadbox', //触发文件选择对话框的按钮，为那个元素id
			        url : 'upload.php', //服务器端的上传页面地址
			        flash_swf_url : 'Moxie.swf', //swf文件，当需要使用swf方式进行上传时需要配置该参数
			        silverlight_xap_url : 'Moxie.xap', //silverlight文件，当需要使用silverlight方式进行上传时需要配置该参数
					filters: {
							  mime_types : [ //只允许上传图片格式和zip文件
							    { title : "Image files", extensions : "jpg,gif,png" }
							  ],
							  max_file_size : '2000kb', //最大只能上传1000kb的文件
							  prevent_duplicates : false //允许选取重复文件
					},
					file_data_name:"file",//指定上传name
					multi_selection:false,//是否支持选择框多选
					multipart_params:""//上传附加参数
			},o);
		var uploader = new plupload.Uploader(opts);
		uploader.init();
		//开始上传不断触发   预封装进度条 
		    uploader.bind('UploadProgress',function(uploader,files){
		    	//进度条
		    	var up = uploader.files[uploader.files.length-1];
		    	$(".fileloding").css("width",up.percent+"%");
		    	$(".fileloding").css("opacity",100-up.percent);
		    	
		    });
		   
		return uploader;        //返回实例化后的上传对象
	},
	//去除字符串首尾空白
	trim:function(str){
		var s = str.replace(/^\s+/,""),
			end = s.length-1,
			ws=/\s/;
			while(ws.test(s.charAt(end))){
				end--;
			}
			return s.slice(0,end+1);
	}
	
}


$(function(){ 	 
 K.Kselect();
//ztree高度修复
$(".ztree").css("height",$(window).height()-100+"px");
//判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
 	placeholder=function(input){
		var text = input.attr('placeholder'),
		defaultValue = input.defaultValue;
		if(!defaultValue){
			input.val(text).addClass("phcolor");
		}
		input.focus(function(){
		if(input.val() == text){
			$(this).val("");
		  }
		});
		input.blur(function(){
		if(input.val() == ""){
		$(this).val(text).addClass("phcolor");
		  }
		});
		//输入的字符不为灰色
		input.keydown(function(){
			$(this).removeClass("phcolor");
		    });
		  };
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
 	$('input').each(function(){
 		text = $(this).attr("placeholder");
 		if($(this).attr("type") == "text"){
 		placeholder($(this));
      }
    });
  }
  
 });

//ajax chongxie

(function($){
	var _ajax = $.ajax;
		$.ajax = function(opt){
			var _opt = $.extend(opt,{
					
					xhr:function(){
						var xhr = jQuery.ajaxSettings.xhr();
							xhr.withCredentials = true;
						return xhr;
					},
					xhrFields:{
						Credentials:true
					}
				});
			return _ajax(_opt);
		}
		$.get = function(url,data,callback,err){
			$.ajax({
					url:url,
					type:"get",
					dataType:"json",
					data:data,
					xhr:function(){
						var xhr = jQuery.ajaxSettings.xhr();
							xhr.withCredentials = true;
						return xhr;
					},
					xhrFields:{
						Credentials:true
					},
					success:callback,
					error:function(e){
						if(err != undefined){
							err(e);
						}
					}
				
			});
		}
		$.post = function(url,data,callback,err){
			$.ajax({
					url:url,
					type:"post",
					dataType:"json",
					data:data,
					xhr:function(){
						var xhr = jQuery.ajaxSettings.xhr();
							xhr.withCredentials = true;
						return xhr;
					},
					xhrFields:{
						Credentials:true
					},
					success:callback,
					error:function(e){
						if(err != undefined){
							err(e);
						}
					}
				
			});
		}
})(jQuery);
 
