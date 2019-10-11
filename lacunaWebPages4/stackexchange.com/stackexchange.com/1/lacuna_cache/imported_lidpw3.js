// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
!function(t,e,i){"function"==typeof define?define(i):"undefined"!=typeof module?module.exports=i():e[t]=i(e)}("klass",this,function(t){function e(t){return o.call(i(t)?t:function(){},t,1)}function i(t){return typeof t===r}function n(t,e,i){return function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[257:384]", functionData => eval(functionData))}}function s(t,e,s){for(var o in e)e.hasOwnProperty(o)&&(t[o]=i(e[o])&&i(s[u][o])&&l.test(e[o])?n(o,e[o],s):e[o])}function o(t,e){function n(){}function a(){this.initialize?this.initialize.apply(this,arguments):(e||h&&r.apply(this,arguments),d.apply(this,arguments))}n[u]=this[u];var r=this,l=new n,h=i(t),d=h?t:this,c=h?{}:t;return a.methods=function(t){return s(l,t,r),a[u]=l,this},a.methods.call(a,c).prototype.constructor=a,a.extend=o,a[u].implement=a.statics=function(t,e){return t="string"==typeof t?function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[899:925]", functionData => eval(functionData))}():t,s(this,t,r),this},a}t=t||this;var a=t.klass,r="function",l=/.*/,u="prototype";return e.noConflict=function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1038:1061]", functionData => eval(functionData))},e}),StackExchange.topbar=function(){function t(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1111:1175]", functionData => eval(functionData))}function e(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1188:1268]", functionData => eval(functionData))}function i(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1280:1324]", functionData => eval(functionData))}function n(e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1337:1496]", functionData => eval(functionData))}function s(){var t=$(".js-top-bar"),e=$(".js-search-field"),i=!1;e.on({"focus":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1585:1613]", functionData => eval(functionData))},"blur":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1631:1681]", functionData => eval(functionData))},"keydown":function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1703:1728]", functionData => eval(functionData))}})}function o(){function t(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1757:1796]", functionData => eval(functionData))}var e=$(".js-searchbar"),i=$(".js-searchbar-trigger a"),n=$(".js-search-field"),s="topbar-icon-on",o="searchbar__open",a=!0;i.on("mousedown",function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1947:1965]", functionData => eval(functionData))}).on("click",function(e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[1989:2035]", functionData => eval(functionData))});var r=StackExchange.helpers.DelayedReaction(function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[2091:2098]", functionData => eval(functionData))},0);$(".js-searchbar").focusout(r.trigger).focusin(r.cancel)}function a(){var t=$("#js-gdpr-consent-banner"),e=t.find(".js-notice-close");e.click(function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[2254:2478]", functionData => eval(functionData))})}var r=klass({"name":"","url":"","cssClass":"","button":null,"$dialog":null,"$loadingPlaceholder":null,"$preloadedDialog":null,"hasRead":!1}).statics({"$corral":$(".js-topbar-dialog-corral")}).methods({"isLoading":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[2703:2742]", functionData => eval(functionData))},"isLoaded":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[2764:2791]", functionData => eval(functionData))},"isVisible":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[2814:2893]", functionData => eval(functionData))},"toggle":function(t,e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[2916:3309]", functionData => eval(functionData))},"showOrHide":function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[3334:3430]", functionData => eval(functionData))},"loadChildContent":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[3460:3785]", functionData => eval(functionData))},"loadDialog":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[3809:4467]", functionData => eval(functionData))},"afterLoad":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[4490:4492]", functionData => eval(functionData))},"getLoadingPlaceholder":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[4527:4750]", functionData => eval(functionData))},"positionDialogUnderButton":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[4789:5158]", functionData => eval(functionData))},"fetchUrl":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[5180:5276]", functionData => eval(functionData))},"markAsRead":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[5300:5404]", functionData => eval(functionData))},"handleRealtimeMessage":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[5439:5465]", functionData => eval(functionData))},"clearLoadedDialog":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[5496:5572]", functionData => eval(functionData))}}),l=klass({"name":"","selector":"","dialog":null,"$button":null,"onClass":"","unreadCountPrefix":"","queuedUnreadCount":0,"showsOnMouseOver":!1}).methods({"initialize":function(){this.dialog.name=name,this.dialog.button=this,m.push(this.dialog);var t=this;this.$button=$(this.selector),this.$button.click(function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[5888:5910]", functionData => eval(functionData))}),this.showsOnMouseOver&&this.$button.mouseover(function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[5968:5989]", functionData => eval(functionData))}),this.onClass="topbar-icon-on"+(this.onClass?" ":"")+this.onClass},"toggle":function(t,e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[6079:6206]", functionData => eval(functionData))},"showOnMouseOver":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[6235:6356]", functionData => eval(functionData))},"isOn":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[6374:6418]", functionData => eval(functionData))},"markAsRead":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[6442:6592]", functionData => eval(functionData))},"dequeuePendingUnreadCount":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[6631:6759]", functionData => eval(functionData))},"setUnreadCount":function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[6788:7068]", functionData => eval(functionData))},"addUnreadClass":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[7096:7165]", functionData => eval(functionData))},"handleRealtimeMessage":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[7200:7202]", functionData => eval(functionData))}}),u=r.extend({"url":"/topbar/site-switcher","cssClass":"siteSwitcher-dialog","$searchItems":null}).methods({"afterLoad":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[7333:7977]", functionData => eval(functionData))},"doSearch":function(t,e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[8002:8361]", functionData => eval(functionData))},"filterSites":function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[8387:8535]", functionData => eval(functionData))}}),h=l.extend({"name":"SiteSwitcher","selector":".js-site-switcher-button","dialog":new u,"showsOnMouseOver":!1,"onClass":"icon-site-switcher-on"}),d=r.extend({"url":"/topbar/inbox","cssClass":"inbox-dialog"}),c=l.extend({"name":"Inbox","selector":".js-inbox-button","dialog":new d,"showsOnMouseOver":!1}).methods({"handleRealtimeMessage":function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[8885:8926]", functionData => eval(functionData))}}),g=r.extend({"url":"/topbar/achievements","cssClass":"achievements-dialog"}).methods({"afterLoad":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[9036:9115]", functionData => eval(functionData))},"alignRep":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[9137:9305]", functionData => eval(functionData))},"bindDateGroupToggles":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[9339:9681]", functionData => eval(functionData))},"displayUtcTime":function(){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[9709:9961]", functionData => eval(functionData))}}),f=l.extend({"name":"Achievements","selector":".js-achievements-button","dialog":new g,"unreadCountPrefix":"+","showsOnMouseOver":!0}).methods({"handleRealtimeMessage":function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[10142:10260]", functionData => eval(functionData))}}),p=[],m=[];return{"init":function(){window.devicePixelRatio>=1.5&&$(".js-avatar-me").attr("src",function(t,e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[10371:10406]", functionData => eval(functionData))});var t=new c,n=new f;p.push(t),p.push(n),p.push(new h),$(document).click(function(t){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[10491:10564]", functionData => eval(functionData))}),$.get("/topbar/get-unread-counts",function(e){lacuna_lazy_load("lacuna_cache/imported_lidpw3.js[10611:10671]", functionData => eval(functionData))});var r=document.body.style;"justifyContent"in r||"WebkitJustifyContent"in r||$(".top-bar *:visible").css({"display":"inline-block","white-space":"nowrap","vertical-align":"middle"}).not(".-logo, .-logo *, svg, .-badges *").css("width","auto"),s(),o(),a()},"hideAll":i,"handleRealtimeMessage":n}}();