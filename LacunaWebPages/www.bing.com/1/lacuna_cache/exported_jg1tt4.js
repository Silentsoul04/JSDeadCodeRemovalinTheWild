//<![CDATA[
(function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13, 119);onload=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 34, 118);_G.BPT=new Date;n&&n();!_w.sb_ppCPL&&t&&sb_st(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 91, 114);t(new Date)},0)}})(_w.onload,_w.si_PP);RMS2=new function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 150, 976);function s(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 161, 382);for(var f=6,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",i=n?n.split(""):[],e,u=~~(t/f);i.length<=u;)i.push(r.charAt(0));return e=r.indexOf(i[u])|1<<t%f,i[u]=r.charAt(e),i.join("")}function h(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 382, 466);var t=sj_cook.get("RMS",n.n);sj_cook.set("RMS",n.n,s(t,n.c),!1,"/",0)}function c(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 466, 522);_d.domain==r&&(n.P&&n.P(),o=new Date,t(0))}function t(r){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 522, 754);var s=i[r],e,c;if(s){if(e=sj_gx(),!e)return;e.open("get",s.u,!0);c=sb_st(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 609, 666);e[u]!=4&&(e[f]=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 635, 647);},e.abort(),t(r+1))},5e3);e[f]=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 677, 723);e[u]==4&&(sb_ct(c),h(i[r]),t(r+1))};e.send(null)}else n.I&&n.I(o)}var i=[],r="",u="readyState",f="onreadystatechange",e,o,n=_w.RmsConfig||{};this.RegisterResources=function(n,t,u,f){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 852, 975);r=_d.domain;for(var o=0;o<n.length;o++)i.push({n:u,u:n[o],c:f[o]});e||(e=!0,sj_evt.bind("onP1",c,1,1e3))}};var _anim=function(n,t,i,r,u,f,e,o){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 987, 3640);var a="ease-in",v="ease-in-out",y="ease",s=function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1056, 1097);return typeof n!="undefined"},h=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1100, 1445);var n=function(n,t,i,r,u){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1117, 1164);var f=t/i;return r+u*f*f*f},t=function(n,t,i,r,u){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1167, 1220);var f=t/i-1;return r+u*(f*f*f+1)},i=function(n,t,i,r,u){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1223, 1303);var f=t/(i/2);return f<1?r+u/2*f*f*f:(f-=2,r+u/2*(f*f*f+2))};return{In:{css3TransitionName:a,fallbackScript:n},Out:{css3TransitionName:v,fallbackScript:i},InOut:{css3TransitionName:y,fallbackScript:t}}}(),l=function(u,f,o,l,a){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1450, 2980);var st=a.unit||"",b=a.duration||500,v=b,it="transition",k="Transition",rt="End",dt="end",d=a.easing||h.InOut,y=it,g,ht,ut=typeof f=="string"&&f,ct=typeof f=="function"&&f,p=u.style,ft,et,ot,w,nt,lt=typeof sj_b.style.MozTransition!="undefined",at,tt=ut&&ut.replace(/-(\w)/g,function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1743, 1780);return t.toUpperCase()}),vt=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1785, 1829);bt();lt?sb_ct(at):yt(1);ft&&ft()},yt=function(i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1833, 1900);if(lt)i||(at=sb_st(vt,v));else{var r=i?t:n;r(u,ht,vt)}},pt=function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1904, 1947);et=n;tt?p[tt]=n+st:ct&&ct(u,n)},wt=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 1951, 2229);var n;if(!tt||!d.css3TransitionName)return!1;var u=i||r,f=u.style,e="ms "+d.css3TransitionName+" 0s",t=["","ms","Webkit","O"],o=[it+dt,"MS"+k+rt,"webkit"+k+rt,"o"+k+rt];for(n=0;n<t.length;n++)if(y=t[n],y+=t[n]!=""?k:it,s(f[y]))return g=ut+" "+v+e,ht=o[n],!0;return!1},bt=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2233, 2356);for(var i=p[y],t=i.split(","),n=0;n<t.length;n++)t[n]&&t[n].indexOf(g)>=0&&(t.splice(n,1),n--);p[y]=t.join(",")},gt=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2360, 2396);p[y]?p[y]+=", "+g:p[y]=g},kt=function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2400, 2457);ft=n;gt();yt();c(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2431, 2453);p[tt]=t+st},1)},ni=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2461, 2852);function h(u,s){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2472, 2610);(n||(i=0),i!==s)&&(n&&et?(v=e()-r,w=et,nt=s===t?l:o):(v=b,s===t?(w=o,nt=l):(w=l,nt=o)),ot=nt-w,i=s,f=u,r=e(),c(a,5),n=!0)}function a(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2610, 2729);var t=e()-r;t>=v?(pt(d.fallbackScript(u,v,v,w,ot)),n=!1,f&&f()):(pt(d.fallbackScript(u,t,v,w,ot)),c(a,5))}var t=1,y=2,i=0,n=!1,r,f;return{start:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2767, 2786);h(n,t)},revert:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2794, 2813);h(n,y)},updateDur:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2824, 2850);s(n)&&(v=b=n)}}},ti={start:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2863, 2883);kt(n,l)},revert:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2891, 2911);kt(n,o)},updateDur:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2922, 2958);bt();s(n)&&(v=b=n);wt()}};return wt()?ti:ni()},c=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 2983, 3166);return _w.requestAnimationFrame||_w.webkitRequestAnimationFrame||_w.mozRequestAnimationFrame||_w.oRequestAnimationFrame||_w.msRequestAnimationFrame||function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3143, 3165);f(n,16.7)}}(),p=function(n,t,i,f,e){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3171, 3608);function a(t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3191, 3259);n&&n.style&&(n.style.visibility=t?"hidden":"visible")}var p=o&&!s(r.style.opacity)?function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3288, 3313);u(n,t*100)}:"opacity",v=s(f)&&f||0,y=s(e)&&e||1,w=s(i)&&i||s(t)&&t,c=l(n,p,v,y,{duration:t,ease:h.In});return{up:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3415, 3496);v===0&&a(!1);c.updateDur(t);c.start(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3463, 3494);y===0&&a(!0);n&&n()})},down:function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3502, 3584);y===0&&a(!1);c.updateDur(w);c.revert(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3551, 3582);v===0&&a(!0);n&&n()})},updateDur:c.updateDur}};return{animE:l,fadeE:p,ease:h}}(sj_be,sj_ue,sj_b,sb_de,sj_so,sb_st,sb_gt,sb_ie);(function(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3690, 5363);function f(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3706, 3746);!u.end&&s===a&&s>0&&i(w,0)}function o(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3746, 3836);if(n&&n.length)return r[n]||(r[n]={start:0,end:0,actual:0,done:0},s++),r[n]}function v(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3836, 3991);var n=[];for(var t in r)r.hasOwnProperty(t)&&(n.push(t),u.actual+=r[t].actual);return n.sort(function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3942, 3987);return r[t].actual-r[n].actual}),n}function y(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 3991, 4238);var f=[],e=0,t=v(),i,n,u;if(t.length>0)do if(i=t.shift(),n=r[i],!(n.start<_G.ST)){if(u='"'+i+'":{"S":'+(n.start-_G.ST)+',"E":'+(n.end-_G.ST)+',"T":'+n.actual+"}",e+=u.length+1,e>=d)break;f.push(u)}while(t.length>0);return f.join(",")}function p(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4238, 4437);function i(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4251, 4316);return n=n.toString().replace(/\"/g,"'"),'"'+n+'"'}var r=[],t,n;for(t in e)e.hasOwnProperty(t)&&(n=e[t],typeof n!="number"&&(n=i(n)),r.push(i(t)+":"+n));return r.join(",")}function w(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4437, 4681);u.end||(u.end=new Date,(new Image).src=_G.lsUrl+'&Type=Event.PPT&DATA={"S":'+(u.start-_G.ST)+',"E":'+(u.end-_G.ST)+',"T":'+u.actual+',"I":'+u.numInvalid+',"N":{'+y()+'},"M":{'+p()+"}}"+(_G.P?"&P="+_G.P:"")+(_G.DA?"&DA="+_G.DA:""))}function b(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4681, 4737);var t=r[n];t&&!t.done&&(t.done=1,a++,f())}function h(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4737, 4895);var r=n.task;if(r){var u=r,t=n.ns,f=n.delay||0;if(t&&t.length>0){l(t);function e(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4821, 4875);var i=new Date,n;r();n=new Date;c(t,i,n)}u=e}f>0?i(u,f):u()}}function c(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 4895, 5037);var r,e;(f(),r=o(n),r)&&(e=i-t,(e<0||i<r.end||r.start&&t<r.start)&&++u.numInvalid,r.actual+=e,r.start||(r.start=t),r.end=i)}function l(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5037, 5060);f();o(n)}function k(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5060, 5087);f();e[n]=t}var u={start:new Date,end:0,actual:0,numInvalid:0},r={},s=0,a=0,e=t._cm||{},d=600;n("onP1",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5178, 5359);var i,r,n;for(t.register=l,t.schedule=h,t.complete=b,t.recordTimings=c,t.reportCustomMetric=k,r=t._ns||[];i=r.shift();)o(i);for(n=t._reg||[];n.length>0;)h(n.shift());f()},1)})(sj_evt.bind,sched,sb_st);var AnytimeInput;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5408, 5872);(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5420, 5868);var n=_ge("sb_form_q"),t=function(t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5456, 5845);var i=t.keyCode,r,u;!t.altKey&&t.ctrlKey&&i>64&&i<91||(i===32||i>47&&i<91||i>95&&i<106||i>185&&i<223)&&n&&!n.getAttribute("disabled")&&("createTextRange"in n?_d.activeElement!==n&&(r=n.createTextRange,r.collapse(!1),r.select(),n.focus()):"getSelection"in _w&&(r=_w.getSelection(),r.rangeCount===0&&(u=_d.createRange(),u.selectNode(n),r.addRange(u),r.collapse(n,0)),n.focus()))};sj_be(_d,"keydown",t)})()})(AnytimeInput||(AnytimeInput={}));function fadeComplete(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 5907, 6165);var i,n,t;_G.KPT=new Date;i=_ge("sw_filt");i||(n=_ge("sb_sl"),t=_ge("sb_form"),n&&t&&(n.style.width=t.offsetWidth+"px",n.style.display="block"));_w.g_NPLE||(sj_evt.fire("onRBComplete"),_w._H&&_H.postrb&&sj_evt.fire("postRBComplete"))}function hpResize(n,t,i,r){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 6165, 6851);function h(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 6192, 6701);var h,c;if(n&&o){if((_w.g_img&&_w.g_img.hdon===1&&_w.g_img.hdsup===1||o.clientWidth>f||o.clientHeight>e)&&(f=1920,e=1080),_H.fullimg===1){var a=o.clientWidth/f,v=o.clientHeight/e,l=Math.max(a,v);f*=l;e*=l}var t=o.getBoundingClientRect(),i=Math.min(Math.round(t.right-t.left),f),r=Math.min(Math.round(t.bottom-t.top),e);i/f>r/e?(h=Math.ceil(e*i/f),u.width=i+s,u.height=h+s,u.top=(r-h)/2+s,u.left=0):(c=Math.ceil(f*r/e),u.height=r+s,u.width=c+s,u.top=0,u.left=(i-c)/2+s);sj_evt.fire("onHPResize")}}var c="resize",s="px",f=i||1366,e=r||768,u=n&&n.style,o=t||_ge("hp_container");o&&u&&(h(),sj_be(_w,c,h),sj_be(_w,"unload",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 6823, 6848);sj_ue(_w,c,h)}))}var HpLargeS1;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 6866, 7586);if(sb_st(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 6886, 6944);sj_evt.fire("onBgLoad");sj_evt.fire("onBgSet")},1),_H.loadiotd&&(_ge("bgLink")||_w.g_img)){var n=new Image;sj_be(n,"error",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7020, 7076);_w.hp_log("Error","HPImage","LoadFailed",!1)});n.src=_ge("bgLink")?_ge("bgLink").href:_w.g_img.url;n.onload=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7139, 7169);t();fadeComplete()};function t(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7170, 7584);var t,n;performance.mark!==undefined&&(_ge("bgLink")?t=performance.getEntriesByName(_ge("bgLink").href):_w.g_img&&(t=performance.getEntriesByName(_w.location.origin+_w.g_img.url)),t&&t.length>0&&t[0]!=null&&(n=t[0],n.startTime&&(_w.hp_llog&&hp_llog("W3C_ImageStart",Math.round(n.startTime)),n.responseEnd&&n.responseEnd>n.startTime&&_w.hp_llog&&hp_llog("W3C_ImageLoaded",Math.round(n.responseEnd)))))}}})(HpLargeS1||(HpLargeS1={})); (function() {___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7617, 7948); var e=0; if(!_H.pnfe){ sj_evt.bind("onBgSet",Wait,1); sj_evt.bind("OnBnpLoaded",Wait,1); } function Wait(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7721, 7755);if(++e==2){Req()}} function Req(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7756, 7946); if(Bnp===void(0)) return; if(Bnp.Global){ Bnp.Global.RawRequestURL="/"; Bnp.Global.Referer=null; } var r=new Bnp.Partner.Request("HomePage"); r.IID="SERP.2000"; r.Submit(); } })();;0;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7956, 8903);function i(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 7967, 8361);var f,e,o,s,i;u(window.location.href)||(f=sj_cook.get(n,"CW"),(!f||window.sj_b&&f!=sj_b.clientWidth)&&sj_cook.set(n,"CW",(sb_de.clientWidth||sj_b.clientWidth).toString(),!0,"/",null),e=sj_cook.get(n,"CH"),o=sb_de.clientHeight.toString(),e&&e===o||sj_cook.set(n,"CH",o,!0,"/",null),t&&(s=_w.TPane,i=r(_w.innerWidth),i!=s&&(Log&&Log.Log&&Log.Log("Info","TPResize",s+i),_w.TPane=i)))}function u(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 8361, 8450);return n.match(/\/images\/search.*[?&]view=detailv2.*nocookie=1\b/i)!=null}function f(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 8450, 8713);var u=sj_cook.get(n,"DPR"),t=_w.devicePixelRatio,i,r;t&&(!u||parseInt(u)!==t)&&sj_cook.set(n,"DPR",t.toString(),!0,"/",null);i=sj_cook.get(n,"UTC");r=((new Date).getTimezoneOffset()*-1).toString();(i==null||i!==r)&&sj_cook.set(n,"UTC",r,!0,"/",null)}function e(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 8713, 8790);i();f();t=_ge("b_context")!=null;t&&(_w.TPane=r(_w.innerWidth))}function r(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 8790, 8839);return n<=1193?"N":n<=1281?"M":"W"}var n="SRCHHPGUSR",t=!1;sj_be(_w,"load",e);sj_be(_w,"resize",i)})();hpResize(_ge('bgDiv'));;var DynamicResolutionUHD;(function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 8957, 9140);function t(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 8969, 9122);var n=Math.round(1920*devicePixelRatio),t=Math.round(1080*devicePixelRatio),i=n>3840||t>2160,r=i?3840:n,u=i?2160:t;return{width:r,height:u}}n.getDimensions=t})(DynamicResolutionUHD||(DynamicResolutionUHD={}));hpResize(_ge('vid'));;function LimitSizeToDeviceMaxResolution(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 9213, 9585);var t=_ge("hp_container"),i=_ge("sw_footL"),f=_ge("sb_foot"),n=sj_b.clientWidth+"px",r=sj_b.clientHeight+"px",u=i.offsetWidth+16;t.style.minWidth=n;t.style.maxWidth=n;t.style.minHeight=r;t.style.maxHeight=r;u>parseInt(n)?(i.style.whiteSpace="pre-wrap",_ge("sb_foot").style.height="70px"):(i.style.whiteSpace="",f.style.height="")}(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 9586, 9858);var t=1366,i=_ge("sw_footL"),r=_ge("hp_container"),n;i&&r&&(n=i.offsetWidth+16,i.setAttribute("data-width",n.toString()),n>t&&(n=t),n>1085&&(r.style.minWidth=n+"px"),/iPad/.test(_w.navigator.userAgent)&&sj_evt.bind("onHPResize",LimitSizeToDeviceMaxResolution))})();sa_config={"f":"sb_form","i":"sb_form_q","c":"sw_as","u":"%2fAS%2fSuggestions%3fpt%3dpage.home%26mkt%3dnl-nl%26qry%3d","removeSuggUrl":"/historyHandler?oma=delete_matching_queries\u0026qt=%7b0%7d\u0026sig=1C0B743ECB2363AC004079CECAE962AA\u0026response=json\u0026FORM=ASRMHS","searchHistoryUrl":"/profile/history?FORM=ASRMHP","enabledDataSources":["Web"],"eHC":1,"fetchOnEmpty":1,"fetchOnDownArrowKey":1,"t":1,"ol":1,"suppnores":1,"hdm":1,"handleDuplicateFetch":1,"d":100,"removeTextLength":47};sa_loc= {"Suggestions":"Suggestions","SearchRemoved":"This search was removed from your %eSearch history%E"};;sa_loader=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 10476, 10639);_w.rms.js({'rms:answers:AutoSuggest:AutoSug':'\/rb\/G\/cj,nj\/70f84d8d\/2547da9c.js?bu=HUjmAekB7AEvLy8v7wHUAS8vLy8vL6MBswG2AcsBLy8vzgEvLy-CArsB',d:1});};;var sa_eL=!1;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 10655, 11175);function e(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 10666, 10766);n&&sj_ue(n,t,e);sa_eL=sa_eL||i;f||(f=!0,sj_evt.fire("AS.bootload",n),sa_loader())}function r(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 10766, 10826);sj_be(n,t,function(r){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 10794, 10824);e(n,t,i,sj_ev(r))})}var t=sa_config,n=_ge(t.i),i,u,f;if(n.setAttribute("autocomplete","off"),i=_ge(t.c),!i){if(u=_ge("sa_qs")||n,!u)throw new Error("AS init failed");i=sj_ce("div");i.id=t.c;u.parentNode.appendChild(i);n.setAttribute("aria-controls",t.c)}f=!1;_w.sa_loader&&("ontouchend"in _w&&r(n,"touchend",!0),r(n,"click",!0),r(n,"keydown",!0),t.ol&&r(_w,"load",!1))})();hpulc4hdr = function() {___jdce_logger("lacuna_cache/exported_jg1tt4.js", 11191, 11366); this.hasULC = this.hasULC || { "_": _w.ULC && _H.ULC && _H.ULC.Header && ULC.incrementCustom && ULC.reset };this.hasULC._ && ULC.incrementCustom(_H.ULC.Header); };;var _scopeRef = new Array();_scopeUrls[ "web"]= "/search?q=\u0026FORM=BWLH1"; _scopeRef[ "web"]= "0";_scopeUrls[ "images"]= "/images/search?q=\u0026FORM=BILH1"; _scopeRef[ "images"]= "1";_scopeUrls[ "video"]= "/videos/search?q=\u0026FORM=BVLH1"; _scopeRef[ "video"]= "2";_scopeUrls[ "local"]= "/maps?q=\u0026FORM=BYLH1"; _scopeRef[ "local"]= "3";_scopeUrls[ "news"]= "/news/search?q=\u0026FORM=BNLH1"; _scopeRef[ "news"]= "4";;var Identity = Identity || {}; (function(i) {___jdce_logger("lacuna_cache/exported_jg1tt4.js", 11827, 12474); i.wlImgSm ="https://storage.live.com/users/0x{0}/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1\u0026ex=720\u0026fofoff=1\u0026sid=1C0B743ECB2363AC004079CECAE962AA"; i.wlImgLg ="https://storage.live.com/users/0x{0}/myprofile/expressionprofile/profilephoto:UserTileMedium/p?ck=1\u0026ex=720\u0026fofoff=1\u0026sid=1C0B743ECB2363AC004079CECAE962AA";i.popupLoginUrls = {"WindowsLiveId":"https://login.live.com/login.srf?wa=wsignin1.0\u0026rpsnv=11\u0026ct=1570627758\u0026rver=6.0.5286.0\u0026wp=MBI_SSL\u0026wreply=https:%2F%2fwww.bing.com%2Fsecure%2FPassport.aspx%3Fpopup%3D1%26ssl%3D1\u0026lc=1043\u0026id=264960"}; })(Identity);;var sch=sch||{};(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 12504, 12737);var t=_ge("id_h"),n=_ge("id_sc"),i="click";sj_evt.bind("onP1",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 12577, 12733);setTimeout(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 12599, 12728);t&&n&&(sj_jb("Blue/HamburgerServicesHeaderFlyout_c",0,t,"mouseover",n,i,n,"focus"),sj_be(n,i,function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 12703, 12725);sch.clk=n}))},50)},1)})();_H.mcImgData ={"copyright":"Letchworth State Park, New York (© Jay O\u0027Brien/Danita Delimont)","copyrightlink":"javascript:void(0)","wp":true,"hsh":"8cc69be5c4f402ac2193ee2f50c0641b","quiz":"/search?q=Bing+homepage+quiz\u0026filters=WQOskey:%22HPQuiz_20191009_GrandCanyonEast%22\u0026FORM=HPQUIZ"};;_w.g_hpLocal=0;var HPL_er=function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13069, 13142);_w.Log&&_w.Log.Log&&Log.Log("Error","HPLocalStorage",t,!1)},LocalStorage;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13157, 14145);function u(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13168, 13285);var n="hp_test";try{return localStorage.setItem(n,"1"),localStorage.removeItem(n),!0}catch(t){return!1}}if(typeof Storage!="undefined"&&typeof JSON!="undefined"&&Storage!==null&&JSON!==null){try{_w.localStorage!==null&&u()&&(_w.g_hpLocal=1)}catch(f){HPL_er(f,"LocalStorageCheck")}if(_w.g_hpLocal==1){var n=Storage.prototype,t=localStorage;function i(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13520, 13719);var r,u,f;try{n!==null&&n.length>0&&(r=+new Date,i=i?i:null,u={lastUpdated:r,value:JSON.stringify(t),expire:i},f=JSON.stringify(u),this.setItem(n,f))}catch(e){HPL_er(e,"setItemE")}}n.setItemE=i;_w.hp_lsSetItem=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13748, 13780);i.apply(t,arguments)};function r(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 13781, 14074);var i,t;try{if(i=this.getItem(n),i!=null&&i.length>0&&(t=JSON.parse(i),t!=null&&"lastUpdated"in t)){if("expire"in t){var u=+new Date,f=t.expire*6e4,r=u-t.lastUpdated;if(r<0||r>f)return this.removeItem(n),null}return JSON.parse(t.value)}}catch(e){HPL_er(e,"getItemE")}return null}n.getItemE=r;_w.hp_lsGetItem=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14103, 14142);return r.apply(t,arguments)}}}})(LocalStorage||(LocalStorage={}));_w.rms.js({'rms:answers:Homepage:HpHomepageImgViewer':'\/rs\/2T\/ls\/cj,nj\/ab049cd4\/39bd6fa1.js',d:1});;var g_pf = {'Im': {url:'\/th?id=OHR.BubbleNebula_ROW2913743388_1920x1080.jpg&amp;rf=LaDigue_1920x1080.jpg&amp;pid=hp', hash: "389"} };sj_evt.bind("onBgSet",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14442, 14481);sj_evt.fire("onInvokeHpm");},!0,0);;var ipd = { ipt: "4", secall: true, pd: true };var fbpkgiid = fbpkgiid || {}; fbpkgiid.page = 'SERP.5095';;var Feedback;(function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14610, 15790);var t;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14629, 15747);"use strict";function u(t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14653, 14786);var u=t.getAttribute("id"),f;u||(u="genId"+n.length,t.setAttribute("id",u));f=new r(u,i,t.getAttribute(i));n.push(f)}function i(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14786, 14854);i===null?n.removeAttribute(t):n.setAttribute(t,i)}function t(n,t,r,f){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14854, 14973);for(var e,s=_d.querySelectorAll(r),o=0;o<s.length;o++)(e=s[o],f&&e.id&&f[e.id])||(u(e,n),i(e,n,t))}function f(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 14973, 15139);for(var u=_d.querySelectorAll(n),e=1,f={},t,i,r=0;r<u.length;++r){if(t=u[r],!t.id){for(;;)if(i="fbpgdgelem"+e++,!_ge(i))break;t.id=i}f[t.id]=t}return f}function e(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15139, 15351);var i="tabindex",r="-1",n=f("#fbpgdg, #fbpgdg *");t(i,r,"div",n);t(i,r,"svg",n);t(i,r,"a",n);t(i,r,"li",n);t(i,r,"input",n);t(i,r,"select",n);t("aria-hidden","true","body :not(script):not(style)",n)}function o(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15351, 15488);for(var r,t=0;t<n.length;t++)r=_d.getElementById(n[t].id),r&&i(r,n[t].attributeName,n[t].originalAttributeValue);n.length=0}function s(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15488, 15630);typeof sj_evt!="undefined"&&(sj_evt.bind("onFeedbackStarting",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15563, 15578);e()}),sj_evt.bind("onFeedbackClosing",function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15612, 15627);o()}))}var n=[],r=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15641, 15740);function n(n,t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15652, 15731);this.id=n;this.attributeName=t;this.originalAttributeValue=i}return n}();s()})(t=n.Accessibility||(n.Accessibility={}))})(Feedback||(Feedback={}));var Feedback;(function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15831, 18004);var t;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15850, 17969);function r(i,r,u,f,e,o){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15861, 15972);i=typeof i===t?!1:i;i&&scrollTo(0,0);u=typeof u===t?!0:u;n.PackageLoad.Load(r,u,f,e,o)}function e(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 15972, 16121);for(var r=0,i=null;n&&n.getAttribute&&(!(t>=1)||r<t);){if(i=n.getAttribute("data-fbhlsel"),i!=null)break;r++;n=n.parentNode}return i}var u="feedbackformrequested",c="feedbackInitialized",i,f="",o="feedback-binded",s="clicked",t="undefined",h;n.Bootstrap.InitializeFeedback=function(l,a,v,y,p,w,b,k){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 16261, 17368);function nt(t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 16287, 16404);var r=null,i;return t&&(i=new h,n.fel("ajax.feedback.collectsettings","gsf",i),r=i.findSettings(t)),r}var d=_ge(a),g;d&&d.classList&&d.classList.contains(o)||(p=typeof p===t?!1:p,g=e(d,3),f!=="sb_feedback"&&(f=a,typeof sj_evt!==t&&(i&&sj_evt.unbind(u,i),i=function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 16558, 16757);var u=null,t=null,f=null,o,i,s;n&&n.length>1&&(i=n[1],i.tagName!==undefined&&i.nodeType!==undefined?(u=i,t=nt(u)):t=i,o=t&&t.elementToHighlight||u,f=e(o));s=t&&t.linkId||a;r(y,l,v,s,f,t)},sj_evt.bind(u,i,1)),typeof SearchAppWrapper!==t&&SearchAppWrapper.CortanaApp&&SearchAppWrapper.CortanaApp.addEventListener&&SearchAppWrapper.CortanaApp.addEventListener(u,function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 16929, 17024);(typeof n!==t&&n!==null&&(n.isHandled=!0),a===f)&&_ge("fbpgdg")===null&&r(y,l,v,a)})),d!==null?(sj_be(d,"click",function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17053, 17260);var i=null,t=null,u=null,f;if(p&&d.classList){if(d.classList.contains(s))return!1;d.classList.add(s)}sj_pd(n);sj_sp(n);i=sj_et(n);t=nt(i);f=t&&t.elementToHighlight||i;u=e(f);r(y,l,v,a,u||g,t||k)}),d.classList&&d.classList.add(o)):(b=typeof b===t?!1:b,b&&r(y,l,v,a,g)),typeof sj_evt!==t&&sj_evt.fire(c))};n.le=function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17374, 17479);SharedLogHelper&&SharedLogHelper.LogError&&SharedLogHelper.LogError("Feedback: "+n,null,t)};n.leh=function(t,i,r){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17486, 17549);n.le("Feedback: "+t+" handler failed in "+i,r)};n.fel=function(t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17556, 17705);for(var u=[],r=2;r<arguments.length;r++)u[r-2]=arguments[r];try{u.unshift(t);sj_evt.fire.apply(null,u)}catch(f){n.leh(t,i,f);throw f;}};h=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17708, 17966);function n(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17719, 17753);this.settingsList=[]}return n.prototype.setStartSettings=function(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17789, 17843);n&&t&&this.settingsList.push({c:n,s:t})},n.prototype.findSettings=function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17869, 17963);var t=null;return this.settingsList.forEach(function(i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 17925, 17959);sj_we(n,i.c)&&(t=i.s)}),t},n}()})(t=n.Bootstrap||(n.Bootstrap={}))})(Feedback||(Feedback={})),function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 18031, 19610);var t;(function(t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 18050, 19571);"use strict";function f(f,e,o,s){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 18075, 19252);var k=_G.IG,d=typeof _G.V===i?_G.P:_G.V,h,y,c,a,w,v;n.fel("onFeedbackStarting","lp");t.staticConfig={linkId:e,activeElement:_d.activeElement};var l="?ig="+k+"&p="+d,b=n.RouteProvider.Provide(f),p=encodeURIComponent;if(s){if(s.formConfig&&(b=f==="page"?"sdk/form":f,l+="&formconfig="+s.formConfig),s.service&&(t.staticConfig.service=s.service),s.scenario&&(t.staticConfig.scenario=s.scenario),c=s.context,c)for(a in c)c.hasOwnProperty(a)&&(l+="&"+p(a)+"="+p(c[a]));s.pos&&(t.staticConfig.pos=s.pos,l+="&pos=1")}for(h="/feedback/"+b+l,typeof fbsrc!==i&&(h+="&src="+p(fbsrc)),typeof fbpkgiid!==i&&fbpkgiid[f]&&(h+="&iid="+fbpkgiid[f]),w=["addloginsource","client","corpnet","features","hose","hoseassistant","logjserror","msamock","setvar","testhooks","theme","uncrunched"],v=0;v<w.length;v++)(y=location.href.match(new RegExp("[?&]"+w[v]+"=[^?&#]*","i")))&&y[0]&&(h+="&"+y[0].substring(1));sj_ajax(h,{callback:function(t,i){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19003, 19241);if(t&&i){r&&r.removeAttribute("clicked");var u=s&&_ge(s.feedbackContainerId);i.appendTo(u||_d.body);n.fel("onFeedbackShow","lp");n.fel("clarity.trigger","lp","BingFeedback");n.Highlight&&o&&n.Highlight.HighlightElements(o)}}});u[f]=!0}var u={},i="undefined",r;t.staticConfig={};n.PackageLoad.GetHTML=function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19317, 19364);return _d.documentElement.outerHTML};n.PackageLoad.Load=function(n,t,e,o,s){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19384, 19570);var h,c;t=typeof t===i?!0:t;e=typeof e===i?"":e;c=typeof s!=i&&s&&s.feedbackContainerId;r=_ge(e);for(h in n)n.hasOwnProperty(h)&&(!t||c||typeof u[h]===i)&&f(h,e,o,s)}})(t=n.PackageLoad||(n.PackageLoad={}))}(Feedback||(Feedback={})),function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19636, 19790);var t;(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19655, 19747);"use strict";n.RouteProvider.Provide=function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19703, 19746);return n==="page"?"sdk/form":n}})(t=n.RouteProvider||(n.RouteProvider={}))}(Feedback||(Feedback={}));var Homepage;(function(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19830, 20489);function i(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 19842, 20163);var f,i,r,t,e,u;if(!n||n.indexOf("q=")<0)return null;for(n=n.replace(/\+/g,"%20"),f=n.split("&"),i=null,r=0;r<f.length;++r)if(t=f[r].split("="),t[0]==="q")if(t.length===2)i=decodeURIComponent(t[1]);else{for(e=[],u=1;u<t.length;u++)e.push(decodeURIComponent(t[u]));i=decodeURIComponent(e.join("="))}return i}function t(n,t){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 20163, 20309);var r,f,u;return n?(r=n.indexOf("#"),r<0)?null:(f=n.substring(r+1),u=i(f),!u)?null:t.replace(/\{0\}/g,encodeURIComponent(u)):null}function r(n){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 20309, 20443);var r=window.location.href,i=t(r,n);i!==null&&(window.location.assign(i),document.documentElement.style.display="none")}n.getClientRedirect=t;n.tryRedirectFromHash=r})(Homepage||(Homepage={}));(function(){___jdce_logger("lacuna_cache/exported_jg1tt4.js", 20517, 20611);var p ={"u":"/search?q={0}\u0026FORM=S00043"}; Homepage.tryRedirectFromHash(p.u); })();;BM.trigger();_w.rms.js({'A:rms:answers:Shared:BingCore.Bundle':'\/rb\/5m\/cj,nj\/3bc5a898\/bff38272.js?bu=EtQfiiCIH4sf_QSYH6cf9R-wH70fvx_gH-Uf6B-FH-Ad4x3HHg'},{'A:0':0},{'A:rms:answers:Homepage:HPBackgroundProgressLoad':'\/rs\/2T\/pL\/cj,nj\/b1392357\/d94c45f4.js'},{'A:1':1},{'A:rms:answers:MultimediaComponents:SearchByImageComponentLoader':'\/rs\/3R\/nm\/cj,nj\/1beceeda\/3baa9af7.js'},{'A:2':2},{'A:rms:answers:Identity:BlueIdentityDropdownBootStrap':'\/rs\/30\/1S\/cj,nj\/3f1e2270\/f8c6dd44.js'},{'A:rms:answers:Identity:BlueIdentityHeader':'\/rs\/30\/27\/cj,nj\/4c7364c5\/40e1b425.js'},{'A:3':3},{'A:rms:answers:Identity:SnrWindowsLiveConnectBootstrap':'\/rs\/30\/2p\/cj,nj\/bf587ad6\/f1d86b5a.js'},{'A:4':4},{'A:rms:answers:VisualSystem:LanguageSwitch':'\/rb\/6l\/cj,nj\/f28dadef\/aea7e831.js?bu=AfgF'},{'A:5':5},{'A:rms:answers:VisualSystem:IPv6Test':'\/rs\/6l\/ld\/cj,nj\/6240f061\/6fb5e8ee.js'},{'A:6':6},{'A:rms:answers:BoxModel:Framework':'\/rb\/14\/cj,nj\/78482829\/f45ec0a8.js?bu=DiovXmpvcmdhZKoBrAEvlgEv'});;
//]]>