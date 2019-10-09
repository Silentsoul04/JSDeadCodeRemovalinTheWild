<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head><title></title>
			<style type="text/css">
			body { margin: 0; padding: 0; overflow: hidden; }
			img { border: 0; }
			#layer_wrap { 
				float: left; 
				
				
			}
			/* --------------------------------------
 HUB Survey Deployment layer
 -------------------------------------- */
/* --------------------------------------
 Defaults
 -------------------------------------- */
* {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none; }

#wrapper {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px; }

#iframe {
  max-width: 100%;
  width: 450px; }

#wrapper {
  width: 450px;
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  background: #000;
  border: 1px solid #666; }
  @media all and (max-width: 449px) {
  #wrapper {
    width: 80%; } }
/* --------------------------------------
 Header
 -------------------------------------- */
#header {
  padding: 2em 0 1em 0;
  text-align: center; }

#logo {
  margin: 0 auto; }
/* --------------------------------------
 Title
 -------------------------------------- */
#title h1 {
  font-size: 2.2em;
  font-family: Arial, Helvetica, sans-serif; }
/* --------------------------------------
 Content
 -------------------------------------- */
#content_wrap {
  padding: 2em;
  text-align: center; }

#content_wrap p {
  font-size: 1.5em; }
/* --------------------------------------
 Buttons
 -------------------------------------- */
.buttons {
  margin-top: 10px;
  width: 50%;
  margin: 0 auto; }

.btn {
  margin-top: 10px;
  padding: 12px;
  background: white;
  font-size: 1.3em;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  display: block;
  text-align: center;
  font-weight: bold; }

#no {
  background: #000;
  color: #fff;
  text-decoration: underline;
  font-weight: normal;
  padding-top: 5px; }

.clearer {
  clear: both; }

@media all and (max-width: 399px) {
  #no, #start_button {
    float: none;
    display: block; } }

			</style></head><body><div id="layer_wrap"><!--[if lt IE 7 ]> <div id="wrapper" class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <div id="wrapper" class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <div id="wrapper" class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <div id="wrapper" class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <div id="wrapper"><!--<![endif]-->
    <div id="header">
        <img id="logo" src="https://edrcdn.com/fs/fs/FSM-vt29-230333316/f/FSF-vt29-526291615/v/2/s/0a3894cea953db0ead7b007653c5e872622f9f528f554509f04dc02f78ff8a6b/img/logo.png" alt="BBC" />
    </div>
    <div id="title">
        <h1>Help us improve!</h1>
    </div>
    <div id="content_wrap">
        <p>Please take a few minutes to complete our short survey at the end of your visit.</p>
        <p>If you click “Take Survey” the survey will appear in a separate browser window, please leave this open.</p>
        <div class="buttons group">
            <span id="start_button" class="execute btn"><span>Take Survey</span></span>
			<a href="javascript:eDRLayer.destroy();" id="no" class="btn"><span>Close</span></a>
			<div class="clearer"></div>
        </div>
    </div>
</div></div><script type="text/javascript">
/*
 Lightweight, server-side XDM library which uses window.postMessage() and therefore doesn't support IE7 or earlier.
 This RPC interface is compatible with that of easyXDM.
 Copyright (C) 2012 Maru/edr.
 http://www.maruedr.com
*/
(function(a,j,i){var f={a:function(a,b){for(var c=/xdm_o=/.test(location.search)?location.search:location.hash,c=c.substring(1).split("&"),g={},d,e=c.length;e--;)d=c[e].split("="),g[d[0]]=decodeURIComponent(d[1]);if(b.local)for(var h in b.local)b.local.hasOwnProperty(h)&&(c=b.local[h],"function"===typeof c&&(b.local[h]={method:c}));return new f.b(a,b,g)},c:function(a){var b=a.toLowerCase().match(/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/),a=b[2],c=b[3],b=b[4]||"";if("http:"===a&&":80"===b||"https:"===a&&
":443"===b)b="";return a+"//"+c+b},b:function(f,b,c){function g(b){var d=Array.prototype.slice;return function(){var e={method:b,channel:c.xdm_c,params:d.call(arguments,0)};("postMessage"in a.parent?a.parent:a.parent.document).postMessage(JSON.stringify(e),c.xdm_o)}}function d(a){if(a.origin===c.xdm_o){var a=JSON.parse(a.data),d=b.local[a.method];d.method.apply(d.scope,a.params)}}for(var e in b.remote)b.remote.hasOwnProperty(e)&&(this[e]=g(e));a.addEventListener?a.addEventListener("message",d,!1):
a.attachEvent("onmessage",d);("postMessage"in a.parent?a.parent:a.parent.document).postMessage(JSON.stringify({internal:"-ready-",channel:c.xdm_c}),c.xdm_o);i(f.onReady,0)}};this.eDRXDMServer=f;this.eDRXDMServer.Rpc=f.a})(window,document,window.setTimeout,encodeURIComponent);

</script><script type="text/javascript">
/*
 Maru/edr server-side survey code v1.2.3.0.
   Copyright (C) 2012 Maru/edr all rights reserved.
   http://www.maruedr.com
*/
var j=!0,k=null,l=!1;
(function(i,g,s,r){var f={};Function.prototype.bind=function(a){var e=this;return function(){return e.apply(a,arguments)}};f.getElementsByClassName=function(a){if(g.getElementsByClassName)return g.getElementsByClassName(a);for(var e=[],b=g.getElementsByTagName("*"),a=RegExp("(^|\\s)"+a+"(\\s|$)"),d=0;d<b.length;d++)a.test(b[d].className)&&e.push(b[d]);return e};f.a={w:7233,c:k,l:l,s:l,Z:k,n:k,p:l,e:{},b:{},m:[],k:k,j:k,h:l,i:l,U:function(a,e,b,d,f){this.e=a;this.b=e;this.n=d;this.p=f;this.l=!a.firstRequest;
this.H=a.inLazyLoad;this.m=b;this.I()},u:function(){var a=this;/in/.test(g.readyState)?r(function(){a.u()},9):this.P()},A:function(a){for(var e={},b=0;b<g.styleSheets.length;++b)for(var d=g.styleSheets[b].rules||g.styleSheets[b].cssRules,f=0;f<d.length;f++)if(d[f].selectorText===a){var c=d[f].cssText?d[f].cssText:d[f].style.cssText;if(c){(b=/\{(.*)\}/.exec(c))&&(c=b[1]);c=c.trim().toLowerCase().split(";");for(b=0;b<c.length;++b)if(c[b]){var h=c[b].trim().split(":");2===h.length&&(e[h[0].trim()]=h[1].trim())}}}return e},
I:function(){this.c=new (i.easyXDM||i.eDRXDMServer).Rpc({swf:"/inc/easyxdm.swf",onReady:function(){this.s=j;this.r()}.bind(this)},{remote:{alertMessage:{},configureLayer:{},initialise:{},showLightbox:{},hideLightbox:{},hide:{},forceHide:{},destroyLayer:{},deployAdditionalLayers:{},deployAdditionalDeployments:{},triggerLayerByName:{},setMetrics:{},activateTestMode:{},execute:{},logServerItems:{},log:{},updateCookie:{}},local:{alertMessage:function(a){alert("received by provider: "+a)},hostReady:function(){this.l=
j;this.r()}.bind(this),onConfigured:function(a){this.h=a.everShown}.bind(this),requestMetrics:function(){this.o()}.bind(this),onAnchorEdgesChanged:function(a){var e=g.getElementById("layer_wrap");if(e){var b="";if(a&&a.length)for(var d=0;d<a.length;++d)b.length&&(b+=" "),b+="anchor_"+a[d];e.className=b}},hide:function(){this.G()}.bind(this),onShown:function(a){this.H?i.location+="&lf=1":(this.n&&this.c.updateCookie(this.n),this.k&&this.k({firstShow:!this.h,firstShowOnPage:!this.i}),!this.i&&"embeddedSurvey"===
this.b.deploy.type&&(this.d("Loading embedded survey "+this.b.deploy.surveyId),this.M(a,this.z.bind(this))),this.h=this.i=j)}.bind(this),onHidden:function(){},setHoverState:function(a,e){this.O(a,e)}.bind(this),setFocusState:function(a,e){this.N(a,e)}.bind(this),focusFirst:function(){var a=g.querySelectorAll("a, button, input, select, [tabindex]");a.length&&a[0].focus()}}})},P:function(){if(this.b.layout&&this.b.layout.lightbox&&this.b.layout.lightbox.show){var a=this,e=function(b){"keyup"===b.type&&
27===b.keyCode&&a.f()};g.addEventListener?g.addEventListener("keyup",e,l):g.attachEvent&&g.attachEvent("onkeyup",e)}this.F()},z:function(a,e){var b=g.getElementById("content_wrap"),d=g.createElement("div");d.id="loading_embedded";d.innerHTML=b.innerHTML;b.innerHTML="";b.appendChild(d);this.K(a,e,b,function(){d.parentNode&&d.parentNode.removeChild(d)})},K:function(a,e,b,d){function f(){h.d("Loaded embedded survey page");c.style.visibility="";c.style.position="";c.className="edr_iframe";d&&d(c);return j}
var a=i.location.protocol+"//"+i.location.host+"/deploy/enter/guid/"+a+"/installation/"+e.installationId,e=this.D(),c=g.createElement("iframe");c.id="edr_embeddedSurvey";c.src=a;c.frameBorder="0";c.frameBorder="0";c.width=e.width;c.height=e.height;c.style.visibility="hidden";c.style.position="absolute";c.className="edr_iframe edr_iframe_loading";this.b.layout.iframe&&(c.scrolling=this.b.layout.iframe.scrolling?"yes":"no");b.appendChild(c);var h=this;c.addEventListener?c.addEventListener("load",f,
l):c.attachEvent?c.attachEvent("onload",f):c.onload=f},L:function(a,e,b,d){var f="",c;for(c in e)if(e.hasOwnProperty(c))var h=e[c],h="object"===typeof h?JSON.stringify(h):h,h=encodeURIComponent(h),f=f?f+"&"+c+"="+h:c+"="+h;var g=k;if(i.XMLHttpRequest)g=new XMLHttpRequest;else try{g=new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(n){return this.d("XMLHttp not supported by browser"),d&&d(),l}var m=this;g.onreadystatechange=function(){if(4==g.readyState)if(200==g.status)b&&b();else g.onerror({message:"Received unexpected response code: "+
g.status})};g.onerror=function(a){m.d("XMLHttp error"+(a&&a.target&&a.target.status?" (status: "+a.target.status+")":"")+": "+(a&&a.message?a.message:"Unknown error"));d&&d()};g.open("POST",a,j);g.setRequestHeader("Content-type","application/x-www-form-urlencoded");g.send(f);return j},M:function(a,e){function b(){return(65536*(1+Math.random())|0).toString(16).substring(1)}var d=i.location.protocol+"//"+i.location.host,f=function(){this.d("Failed to prepare survey entry data. Destroying...",2);this.f()}.bind(this),
c;c=b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b();this.L(d+"/prepare.php?guid="+c,a,function(){e(c,a)},function(){f()})},D:function(){var a={width:"100%",height:"100%"};if(this.b.deploy.windowSize&&(this.b.deploy.windowSize.x&&(a.width=this.b.deploy.windowSize.x),this.b.deploy.windowSize.y))a.height=this.b.deploy.windowSize.y;return a},r:function(){this.s&&this.l&&(this.J(),this.u())},J:function(){this.b.name&&this.p>=this.w&&this.c.initialise(this.b.deploy.rootDeploymentId);this.e.messageStrings&&
(this.d("Activating test mode with message string table"),this.c.activateTestMode(this.e.messageStrings));this.e.inTestMode&&0<this.m.length&&this.c.logServerItems(this.m);this.b.deploy.othersToDeploy&&0<this.b.deploy.othersToDeploy.length&&this.Q(this.b.deploy.othersToDeploy)},F:function(){this.d("Provider _go()");if(this.b){var a=0,e=function(){var b=this.q();0<b.x&&0<b.y?this.c.configureLayer(this.b.name,this.A("#iframe"),this.b.showRules,this.b.layout,this.b.deploy,this.b.probes):1E4<10*a?(this.d("Giving up waiting for layer to have a size",
2),this.f()):i.setTimeout(e,10);++a}.bind(this);e()}},d:function(a,e){this.e.inTestMode&&this.c.log(a,e)},R:function(a){a="string"==typeof a?[a]:a;this.c.deployAdditionalLayers(a)},Q:function(a,e){a="string"==typeof a?[a]:a;this.c.deployAdditionalDeployments(a,e)},Y:function(a){this.c.triggerLayerByName(a)},execute:function(a){a||this.f();this.c&&this.c.execute()},W:function(a){this.k=a},V:function(a){this.j=a},S:function(){this.c&&this.c.hide()},v:function(){this.c&&this.c.forceHide()},T:function(){this.c&&
this.c.hideLightbox()},X:function(){this.c&&this.c.showLightbox()},f:function(){this.c&&this.c.destroyLayer()},o:function(){this.c&&this.c.setMetrics(this.q(),this.C())},G:function(){var a=j;"function"===typeof this.j&&(a=this.j());a&&this.v()},q:function(){var a=g.getElementById("layer_wrap");return{x:a?a.offsetWidth:0,y:a?a.offsetHeight:0}},O:function(a,e){this.t(a,e,"hover")},N:function(a,e){this.t(a,e,"focused")},t:function(a,e,b){if(!("undefined"===typeof a||a===k)){for(var d=f.getElementsByClassName("execute"),
g=0;g<d.length;++g)if(d[g].g===a){var c=d[g];e?(c.className=c.className.replace(b,""),c.className=c.className+" "+b):c.className=c.className.replace(b,"").trim()}this.o()}},C:function(){var a={};switch(this.b.deploy.type){case "embeddedSurvey":return{};default:a=this.B()}return a},B:function(){for(var a=(new Date).getTime(),e={},b=f.getElementsByClassName("execute"),d=0;d<b.length;++d){var g=b[d].g=b[d].g?b[d].g:"id_"+a+"_"+d;switch(b[d].nodeName.toLowerCase()){case "area":switch(b[d].shape.toLowerCase()){case "rect":var c=
b[d].coords.split(",");4===c.length&&(e[g]={top:c[1],left:c[0],width:c[2]-c[0],height:c[3]-c[1]});break;case "poly":if(c=b[d].coords.split(","),0===c.length%2){for(var h=9999999,i=9999999,n=0,m=0,o=0;o<c.length;o+=2)var p=parseInt(c[o],10),q=parseInt(c[o+1]),h=p<h?p:h,i=q<i?q:i,n=p>n?p:n,m=q>m?q:m;e[g]={top:i,left:h,width:n-h,height:m-i}}}break;default:c=b[d].getBoundingClientRect(),e[g]={top:c.top,left:c.left,width:c.right-c.left,height:c.bottom-c.top,text:b[d].textContent||b[d].innerText,title:b[d].getAttribute("title")||
b[d].getAttribute("alt")}}}return e}};String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")});this.eDRLayer=f.a;f.a.init=f.a.U;f.a.deployAdditionalLayer=f.a.R;f.a.triggerLayerByName=f.a.Y;f.a.execute=f.a.execute;f.a.setShowingFunction=f.a.W;f.a.setHidingFunction=f.a.V;f.a.hide=f.a.S;f.a.forceHide=f.a.v;f.a.destroy=f.a.f;f.a.updateMetrics=f.a.o;f.a.showLightbox=f.a.X;f.a.hideLightbox=f.a.T})(window,document,location,window.setTimeout);

</script><script type='text/javascript'>
				//<![CDATA[
				var inFrame = top !== self;
				if (inFrame) {
					eDRLayer.init({"firstRequest":true,"inLazyLoad":false,"activateTestMode":false,"inTestMode":false,"messageStrings":null},
					{"name":753075134,"showRules":{"triggers":[{"type":"init","delay":0}]},"deploy":{"type":"popupSurvey","surveyId":"ESV-vt29-791850267","installationId":"INS-vt29-666188954","deploymentId":"393566854|937151313|955779134","windowSize":{"x":1000,"y":768},"rootLanguage":"en","humanIds":{"deploymentId":"DPL-vt29-393566854","deployId":"DPY-vt29-937151313","triggerpointId":"TGP-vt29-955779134","layerId":"LYR-vt29-753075134"},"othersToDeploy":[],"onExecuteDeploymentId":null,"keepLayerOnExecute":false,"persistDeployment":false,"persistDeploymentDuration":false,"depersistDeploymentId":null},"layout":{"position":{"relativeTo":"window","offset":{"y":"0px","x":"0px"}},"lightbox":{"opacity":0.24,"colour":"#000000","fade":false,"show":true},"clickToHide":true},"probes":[]},
					[{"dt":1570629144,"type":5,"msg":"l.php running"},{"dt":1570629144,"type":6,"msg":"Serving layer: 753075134"}],
					"INS-vt29-666188954:923108334-1570629144",
					7291);
				}
				//]]>
				</script></body></html>