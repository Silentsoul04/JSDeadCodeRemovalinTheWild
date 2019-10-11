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
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[135:236]", functionData => eval(functionData))})(e)}!function(){"use strict";var RFP=window.RFP=window.RFP||{};RFP.arguments=function(){for(var e=document.getElementsByTagName("script"),t=e[e.length-1].src,n=t.substring(t.indexOf("?")+1),o=n.split("&"),i={},r=0;r<o.length;r++){var d=o[r].split("="),a=decodeURIComponent(d[0]),s=decodeURIComponent(d[1]);i[a]=s}return i}();var RFP=window.RFP=window.RFP||{};RFP.Common=RFP.Common||{},RFP.Common.Locale=RFP.Common.Locale||{},RFP.Common.Locale.Config=RFP.Common.Locale.Config||{},RFP.Common.Config={host:{ad:"ad.rfp.fout.jp",imp:"imp.rfp.fout.jp",click:"click.rfp.fout.jp",conv:"conv.rfp.fout.jp",assets:"js.rfp.fout.jp"},protocol:"https:",ad_type:{infeed:5},version:"1.2.6",conv:{max_request_per_page:10},jsonp_timeout_ms:1e4},RFP.Common.Locale.Config.ir={host:{ad:"ad-ir.rfp.fout.jp",imp:"imp-ir.rfp.fout.jp",click:"click-ir.rfp.fout.jp",conv:"conv-ir.rfp.fout.jp",assets:"js-ir.rfp.fout.jp"}};var RFP=window.RFP=window.RFP||{};RFP.Common=RFP.Common||{},function(){if(RFP.arguments.country){var e=RFP.arguments.country,t=RFP.Common.Locale.Config[e];if(t)for(var n in t)RFP.Common.Config[n]=t[n]}}();var RFP=void 0===window.RFP?{}:window.RFP;window.RFP=RFP,RFP.Common=void 0===window.RFP.Common?{}:window.RFP.Common,RFP.Common.Util=function(){var Util={};Util.forEach=function(e,t,n){if(Array.prototype.forEach)return Array.prototype.forEach.call(e,t,n);if(void 0===e)throw new TypeError;if("function"!=typeof t)throw new TypeError;for(var o=e.length>>>0,i=0;i<o;i++)i in e&&t.call(n,e[i],i,e)},Util.map=function(e,t,n){if(Array.prototype.map)return Array.prototype.map.call(e,t,n);if(void 0===e)throw new TypeError;if("function"!=typeof t)throw new TypeError;for(var o=e.length>>>0,i=[],r=0;r<o;r++)r in e&&(i[r]=t.call(n,e[r],r,e));return i},Util.objectSeal=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[2008:2045]", functionData => eval(functionData))},Util.jsonParse=function(json_str){return window.JSON?window.JSON.parse(json_str):eval("("+json_str+")")},Util.waitDomReady=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[2180:2713]", functionData => eval(functionData))},Util.extend=function(e,t){for(var n in t)e[n]=t[n];return e},Util.inherits=function(e,t){var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.baseConstructor=t},Util.isObject=function(e){var t=_typeof(e);return"function"===t||"object"===t&&!!e},Util.isFunction=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[3022:3085]", functionData => eval(functionData))},Util.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},Util.isSmartPhone=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[3200:3372]", functionData => eval(functionData))},Util.throttle=function(e,t){var n=this;t=+t||0;var o=Date.now();return function(){o+t-Date.now()<0&&(e.apply(n),o=Date.now())}};var handlers={},signals={};Util.on=function(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[3549:3600]", functionData => eval(functionData))},Util.one=function(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[3623:3671]", functionData => eval(functionData))},Util.emit=function(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[3695:3824]", functionData => eval(functionData))},Util.inView=function(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[3850:4033]", functionData => eval(functionData))};var InViewObserver={elements:[]};return InViewObserver.addElement=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[4111:4182]", functionData => eval(functionData))},InViewObserver.removeElement=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[4223:4307]", functionData => eval(functionData))},InViewObserver.observe=function(e,t){e=+e||0,t=+t||1;var n=[],o=function(){InViewObserver.elements.forEach(function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[4426:4563]", functionData => eval(functionData))})};["scroll","resize","load"].forEach(function(t){addEventListener(t,Util.throttle(o,e))}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(Util.throttle(o,e)).observe(document.body,{attributes:!0,childList:!0,subtree:!0})})},Util.InViewObserver=InViewObserver,Util}();var RFP=window.RFP=window.RFP||{};RFP.Common=RFP.Common||{},RFP.Common.NetworkBase=function(){var e={};return e.makeCacheBuster=function(){return Math.floor(1e13*Math.random())},e.sendRequest=function(t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[5079:5162]", functionData => eval(functionData))},e.sendBeaconRequest=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[5194:5213]", functionData => eval(functionData))},e.callJsonAPI=function(t,n,o){e._supportXHR2()?e.sendAjaxRequest(t,n):e.sendJSONPRequest(t,n,o)},e.sendAjaxRequest=function(t,n){var o=e._createRequestInstance();o.onload=function(){var e;try{e=RFP.Common.Util.jsonParse(o.responseText)}catch(e){return void n(e)}n(null,e)},o.onerror=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[5507:5538]", functionData => eval(functionData))},o.ontimeout=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[5561:5594]", functionData => eval(functionData))},o.onprogress=function(){},o.open("GET",t),o.withCredentials=!0,o.send()},e.sendJSONPRequest=function(t,n,o){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[5702:6053]", functionData => eval(functionData))},e._supportXHR2=function(){var e=navigator.userAgent.toLowerCase(),t=/(msie) ([\w.]+)/.exec(e)||[];return!(parseInt(t[2]||99,10)<=7||!window.XDomainRequest&&!window.XMLHttpRequest)},e._createRequestInstance=function(){return window.XDomainRequest?new XDomainRequest:new XMLHttpRequest},e._buildJSONPCallbackName=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[6376:6404]", functionData => eval(functionData))},e._buildScriptElement=function(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[6440:6558]", functionData => eval(functionData))},e._appendScriptElement=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[6593:6674]", functionData => eval(functionData))},e._buildJSONPCallback=function(e,t,n,o){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[6714:6810]", functionData => eval(functionData))},e}();var RFP=window.RFP=window.RFP||{};RFP.Common=RFP.Common||{},RFP.Common.NetworkAd=function(){var e={},t=RFP.Common.Util;e=t.extend(e,RFP.Common.NetworkBase),e.fetchAds=function(e,n,o,i,r){var d=function(e,d){if(e)return void i(e);var a=t.map(d.items,function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[7076:7097]", functionData => eval(functionData))});i(null,a,d)};this.callJsonAPI(e,d,n)},e.notifyImp=function(e,t,n){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[7164:7228]", functionData => eval(functionData))};var n={};return e.callSyncURLs=function(e){if(e.hasOwnProperty("sync_urls")&&0!==e.sync_urls.length){var t=this;RFP.Common.Util.forEach(e.sync_urls,function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[7388:7428]", functionData => eval(functionData))})}},e.buildAdRequestUrl=function(e){var t=RFP.Common.Config;return t.protocol+"//"+t.host.ad+"/ad?"+e.join("&")},e.buildImpRequestUrl=function(e,t,n){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[7577:8003]", functionData => eval(functionData))},e.buildClickRequestUrl=function(e,n,o){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[8042:8498]", functionData => eval(functionData))},e}();var RFP=window.RFP=window.RFP||{};RFP.Common=RFP.Common||{},RFP.Common.AdInfoModelBase=function(){function e(e,t,n){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[8619:8653]", functionData => eval(functionData))}var t=RFP.Common.Util,n=["advertiser_id","ad_id","title","description","optout_click","dat","conv_type","session_id","url_scheme","cta_text"];return e.prototype.store=function(e,o,i){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[8835:8951]", functionData => eval(functionData))},e}();var RFP=void 0===window.RFP?{}:window.RFP;window.RFP=RFP,RFP.InFeed=void 0===window.RFP.InFeed?{}:window.RFP.InFeed,RFP.InFeed.Template=function(){function e(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[9117:9177]", functionData => eval(functionData))}return e.prototype.render=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[9214:9328]", functionData => eval(functionData))},e}(),RFP.InFeed.Network=function(){var e={},t=RFP.Common.Util;return e=t.extend(e,RFP.Common.NetworkAd),e.fetchInFeedAds=function(e,t,n,o){var i=this.buildInFeedAdRequestUrl(e,t,o);this.fetchAds(i,e,RFP.InFeed.AdInfoModel,n,o)},e.buildInFeedAdRequestUrl=function(e,n,o){var i=RFP.Common.Config,r="";try{r=window==parent?parent.document.URL:document.referrer}catch(e){r=document.referrer}var d=["adspot_id="+encodeURIComponent(e),"ad_type="+i.ad_type.infeed,"sequence="+n,"cachebuster="+this.makeCacheBuster(),"sdk_version="+i.version,"media_url="+encodeURIComponent(r)];if(t.isObject(o)&&o.device_id){var a=btoa(unescape(encodeURIComponent(o.device_id)));d.push("audience_id="+encodeURIComponent(a)),d.push("audience_id_type=0")}return this.buildAdRequestUrl(d)},e.notifyTpImp=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[10117:10248]", functionData => eval(functionData))},e}(),RFP.InFeed.AdInfoModel=function(){function e(t,n,o){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[10305:10373]", functionData => eval(functionData))}var t=["main_image_url","displayed_advertiser","tp_imp_urls","vast_xml"],n=["title","description","click_url","ad_id","main_image_url","displayed_advertiser","optout_click","vast_xml","cta_text"],o=RFP.Common.Util;return o.inherits(e,RFP.Common.AdInfoModelBase),e.prototype.storeExtended=function(e,n){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[10674:10757]", functionData => eval(functionData))},e.prototype.toObject=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[10789:10807]", functionData => eval(functionData))},e.prototype.toObjectWithPublicParams=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[10855:10922]", functionData => eval(functionData))},e}(),RFP.InFeed.PlacementInfoModel=function(){function e(e,t){this.info=this.store(e,t)}var t=["adspot_id","template","title_length","description_length","displayed_advertiser_length"],n=RFP.Common.Util;return e.prototype.store=function(e,o){var i={};return n.forEach(t,function(t){i[t]=e[t]}),i.adspot_id=o,i},e.prototype.toObject=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[11265:11283]", functionData => eval(functionData))},e}(),RFP.InFeed.AdView=function(){function e(e,n,o){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[11335:11409]", functionData => eval(functionData))}var t=RFP.Common.Util;return e.prototype.show=function(e,n){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[11468:11997]", functionData => eval(functionData))},e.prototype.buildHtmlDomList=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[12038:12107]", functionData => eval(functionData))},e.prototype.swapTagToAd=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[12143:12557]", functionData => eval(functionData))},e}(),RFP.InFeed.PassbackAdView=function(){function e(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[12615:12652]", functionData => eval(functionData))}return e.prototype.show=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[12686:12952]", functionData => eval(functionData))},e.prototype.buildHtmlDomList=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[12993:13062]", functionData => eval(functionData))},e.prototype.swapTagToAd=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[13098:14167]", functionData => eval(functionData))},e}(),RFP.InFeed.AdController=function(){function e(e){if(!e||!e.adspot_id)throw new TypeError("adspot_id is required");this.adspot_id=e.adspot_id,this.loaded_ads=[],this.raw_res=null,this.placement_info={},this.request_sequence=0,this.device_id=e.device_id}function t(e,t){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[14440:14513]", functionData => eval(functionData))}var n=RFP.Common.Util;return e.prototype.loadAds=function(e){var t=this;void 0===e&&(e=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[14610:14612]", functionData => eval(functionData))});var n=this.adspot_id,o=this.request_sequence,i={device_id:this.device_id};RFP.InFeed.Network.fetchInFeedAds(n,o,function(o,i,r){if(o)return void e(o);var d=new RFP.InFeed.PlacementInfoModel(r,n);t.loaded_ads=t.loaded_ads.concat(i),t.request_sequence++,t.placement_info=d,t.raw_res=r,e(null)},i)},e.prototype.notifyImp=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[14943:15190]", functionData => eval(functionData))},e.prototype.getLoadedAds=function(){return n.map(this.loaded_ads,function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[15267:15304]", functionData => eval(functionData))})},e.prototype.getPlacementInfo=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[15346:15431]", functionData => eval(functionData))},e.prototype.getRawRes=function(){return this.raw_res},e.prototype.showAd=function(e,n){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[15518:15812]", functionData => eval(functionData))},e}(),RFP.InFeed.Default=function(){function e(){if(document.querySelectorAll)return document.querySelectorAll("[data-rfp-adspot-id]");for(var e=[],t=document.body.getElementsByTagName("*"),n=t.length,o=0;o<n;o++)t[o].getAttribute("data-rfp-adspot-id")&&e.push(t[o]);return e}function t(e){if(document.querySelectorAll)return document.querySelectorAll("[data-rfp-adspot-id="+e+"]");for(var t=[],n=document.body.getElementsByTagName("*"),o=n.length,i=0;i<o;i++){(n[i].getAttribute("data-rfp-adspot-id")||"")===e&&t.push(n[i])}return t}function n(e){var n=t(e);m.forEach(n,function(e){e.removeAttribute("data-rfp-adspot-id")})}function o(e,t){var n,o,i,s,l=h[t].rendered_index,u=h[t].controller,f=u.getLoadedAds(),v=f.slice(l);if(v.length>0){var _={before_render:p._makeCallbackOfBeforeRender(),adspot_id:t};p.options.viewable_impression&&(_.use_wrapper=!0);var R=u.getPlacementInfo().template||c(t);if((p.options.force||{}).template&&(R=c(t)),!R)return;var F=new RFP.InFeed.Template(R),y=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[16810:16891]", functionData => eval(functionData))},g=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[16905:16933]", functionData => eval(functionData))};for(n=0;n<v.length&&n<e.length;n++){o=v[n].ad_id,i=e[n];var P=a(v[n]);if(w&&P){var b=RFP.Video.VAST.parse(v[n].vast_xml);s=new RFP.InFeed.VideoAdView(i,b,F,_),RFP.InFeed.VideoAdView.loadStyles()}else s=new RFP.InFeed.AdView(i,F,_);var I=u.showAd(s,o);if(w&&P){m.on("enter",y),m.on("exit",g);var C=I.querySelector("video");C.addEventListener("ended",function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[17293:17364]", functionData => eval(functionData))}),C.rfpAdView=s,m.InViewObserver.addElement(C)}s.showed&&(d(I),p.options.viewable_impression?(I.rfpNotifyImpression=function(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[17491:17526]", functionData => eval(functionData))}(o),m.InViewObserver.addElement(I)):u.notifyImp(o))}}else{var A=u.getRawRes();if(!m.isObject(A))return void r();var E=A.passback_tag;if(!E)return void r();for(n=0;n<e.length;n++){i=e[n],s=new RFP.InFeed.PassbackAdView(i,E);d(u.showAd(s))}}h[t].rendered_index=f.length}function i(){return window.context}function r(){var e=i();e&&m.isFunction(e.noContentAvailable)&&e.noContentAvailable()}function d(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[17927:18154]", functionData => eval(functionData))}function a(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[18167:18202]", functionData => eval(functionData))}function s(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[18214:18590]", functionData => eval(functionData))}function c(e){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[18603:18964]", functionData => eval(functionData))}function l(e){var t=h[e].controller,n=t.getRawRes();n&&RFP.InFeed.Network.callSyncURLs(n)}function u(e,t){return function(i){if(i)return void r();o(e,t),n(t),l(t)}}function f(){var t,n,o,i=e(),r=[],d={};for(n=i.length,t=0;t<n;t++){var a=i[t];o=a.getAttribute("data-rfp-adspot-id"),o&&(m.isArray(d[o])||(d[o]=[],r.push(o)),d[o].push(a))}for(n=r.length,t=0;t<n;t++){o=r[t];var s=d[o];h[o]={},h[o].rendered_index=0,h[o].controller=new RFP.InFeed.AdController({adspot_id:o,device_id:p.options.device_id}),h[o].controller.loadAds(u(s,o))}}var p={},m=RFP.Common.Util,h={},v=(p.options={video_auto_play:!0},!0),w="function"==typeof RFP.InFeed.VideoAdView&&"object"===_typeof(RFP.Video);return p._makeCallbackOfBeforeRender=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[19690:20558]", functionData => eval(functionData))},p.run=function(){m.isObject(arguments[0])&&(p.options=m.extend(p.options,arguments[0])),v&&(p.options.viewable_impression&&s(),m.InViewObserver.observe(100,.5),v=!1),p.options.immediately?f():m.waitDomReady(f)},p.reloadAds=function(){lacuna_lazy_load("lacuna_cache/imported_7qnygb.js[20792:20937]", functionData => eval(functionData))},p}()}();