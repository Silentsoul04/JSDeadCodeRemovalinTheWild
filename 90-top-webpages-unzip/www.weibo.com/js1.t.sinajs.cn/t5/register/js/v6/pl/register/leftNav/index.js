STK.register("v6.lib.kit.dom.parseDOM",function(a){return function(a){for(var b in a)a[b]&&a[b].length==1&&(a[b]=a[b][0]);return a}});
STK.register("v6.pl.register.leftNav.source.init",function(a){return function(b){function j(){h.setNodePosition()}function i(c){a.foreach(a.sizzle("[action-type=filter_cat]",b),function(b){var d=a.sizzle("a",b)[0];c===b?a.addClassName(d,"cur"):a.removeClassName(d,"cur")})}var c=a.v6.lib.kit.dom.parseDOM,d=c(a.builder(b).list),e=d.UG_fixed_nav,f=a.delegatedEvent(b),g=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){a()},h={objHeight:e&&e.offsetHeight,IE6:a.core.util.browser.IE6,TOP:50,BOTTOM:1800,INITTOP:66,docElem:document.documentElement,body:document.body,winSize:{winHeight:0,winWidth:0},setNodeStyle:function(a,b,c){g(function(){a.style[b]!=c&&(a.style[b]=c)})},getDocHeight:function(){return Math.max(this.body.scrollHeight,this.docElem.scrollHeight,this.body.offsetHeight,this.docElem.offsetHeight,this.docElem.clientHeight)},getWinClientSize:function(){var a,b;window.innerWidth?b=window.innerWidth:document.body&&document.body.clientWidth&&(b=document.body.clientWidth);window.innerHeight?a=window.innerHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight);if(document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth){a=document.documentElement.clientHeight;b=document.documentElement.clientWidth}return winSize={winHeight:a,winWidth:b}},isFixedTop:function(a){return a<=this.INITTOP+this.objHeight+this.BOTTOM},startFixedTop:function(a){return a+this.TOP>=this.INITTOP},startFixedBottom:function(a){return a-this.INITTOP-this.objHeight<=this.BOTTOM},setNodePosition:function(){var a=window.pageYOffset||this.docElem.scrollTop||this.body.scrollTop,b=this.getWinClientSize().winHeight,c=this.getDocHeight(),d;if(this.IE6)if(this.isFixedTop(b)){this.setNodeStyle(e,"position","absolute");this.setNodeStyle(e,"top",this.INITTOP+"px");if(this.startFixedTop(a)){d=a+this.TOP;this.setNodeStyle(e,"position","absolute");this.setNodeStyle(e,"top",d+"px")}}else{d=Math.min(a+b,c)-this.BOTTOM-this.objHeight;this.setNodeStyle(e,"position","absolute");this.setNodeStyle(e,"top",NaN)}else if(this.isFixedTop(b)){this.setNodeStyle(e,"position","absolute");this.setNodeStyle(e,"top",this.INITTOP+"px");if(this.startFixedTop(a)){this.setNodeStyle(e,"position","fixed");this.setNodeStyle(e,"bottom","auto");this.setNodeStyle(e,"top",this.TOP+"px")}}else{this.setNodeStyle(e,"position","fixed");this.setNodeStyle(e,"top",this.INITTOP+"px")}}};f.add("filter_cat","click",function(b){var c=b.el.getAttribute("category_id");if(c!="video"){i(b.el);a.listener.fire("unloginPage","filterFeed",c);history.replaceState&&history.replaceState("",null,"?category="+c)}});a.addEvent(window,"scroll",j);return{destroy:function(){f.destroy();a.removeEvent(window,"scroll",j)}}}});
STK.pageletM.register("pl_unlogin_home_leftnav",function(a,b){return a.v6.pl.register.leftNav.source.init(a.E(b))});
