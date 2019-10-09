if (self.CavalryLogger) { CavalryLogger.start_js(["NwL3C"]); }

__d("BootloaderEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("bootloader_events:BootloaderEventsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("bootloader_events:BootloaderEventsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("bootloader_events:BootloaderEventsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAllResourcesCount=function(a){this.$1.all_resources_count=a;return this};c.setAllResourcesDownloaded=function(a){this.$1.all_resources_downloaded=a;return this};c.setAsyncResourcesCount=function(a){this.$1.async_resources_count=a;return this};c.setAsyncResourcesDownloaded=function(a){this.$1.async_resources_downloaded=a;return this};c.setBlEndpointMode=function(a){this.$1.bl_endpoint_mode=a;return this};c.setBlockingResourcesCount=function(a){this.$1.blocking_resources_count=a;return this};c.setBlockingResourcesDownloaded=function(a){this.$1.blocking_resources_downloaded=a;return this};c.setComponents=function(a){this.$1.components=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setEfPage=function(a){this.$1.ef_page=a;return this};c.setErrCount=function(a){this.$1.err_count=a;return this};c.setHasNewComponent=function(a){this.$1.has_new_component=a;return this};c.setMsSinceNavstart=function(a){this.$1.ms_since_navstart=a;return this};c.setParentLid=function(a){this.$1.parent_lid=a;return this};c.setPkgCohort=function(a){this.$1.pkg_cohort=a;return this};c.setRef=function(a){this.$1.ref=a;return this};c.setRequestPath=function(a){this.$1.request_path=a;return this};c.setRetries=function(a){this.$1.retries=a;return this};c.setSvnRev=function(a){this.$1.svn_rev=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimesliceContext=function(a){this.$1.timeslice_context=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={all_resources_count:!0,all_resources_downloaded:!0,async_resources_count:!0,async_resources_downloaded:!0,bl_endpoint_mode:!0,blocking_resources_count:!0,blocking_resources_downloaded:!0,components:!0,duration:!0,ef_page:!0,err_count:!0,has_new_component:!0,ms_since_navstart:!0,parent_lid:!0,pkg_cohort:!0,ref:!0,request_path:!0,retries:!0,svn_rev:!0,time:!0,timeslice_context:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("StringTransformations",[],(function(a,b,c,d,e,f){e.exports={unicodeEscape:function(a){return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(a){a=a.charCodeAt().toString(16);return"\\u"+("0000"+a.toUpperCase()).slice(-4)})},unicodeUnescape:function(a){return a.replace(/(\\u[0-9A-Fa-f]{4})/g,function(a){return String.fromCharCode(parseInt(a.slice(2),16))})}}}),null);
__d("TimeSpentArray",["Banzai","TimeSlice","clearTimeout","pageID","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=2,h=g*32,i,j,k,l,m,n,o,p,q,r,s={},t;function u(){return{timeoutDelayMap:s,nextDelay:t,timeoutInSeconds:l}}function v(){if(i){var a=Date.now();a>n&&(p=Math.min(h,Math.ceil(a/1e3-m)));a=A();a&&i(a,t)}z()}function w(){x(),k=b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(v,"TimeSpentArray Timeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),l*1e3)}function x(){k&&(b("clearTimeout")(k),k=null)}function y(a){__p&&__p();m=a;n=m*1e3;o=[1];for(var a=1;a<g;a++)o.push(0);p=1;q+=1;r+=1;a=r.toString()+"_delay";t=s[a];t===void 0&&(t=s.delay);a=r.toString()+"_timeout";a=s[a];a===void 0&&(a=s.timeout);a=Math.min(a,h);l=a||h;w()}function z(){x(),o=null}function A(){return!o?null:{tos_id:b("pageID"),start_time:m,tos_array:o.slice(0),tos_len:p,tos_seq:r,tos_cum:q}}function B(a){if(a>=n&&a-n<1e3)return;j&&j(a);C(Math.floor(a/1e3))}function C(a){var b=a-m;(b<0||b>=h)&&v();!o?y(a):(o[b>>5]|=1<<(b&31),p=b+1,q+=1,n=a*1e3)}e.exports={init:function(a,c,d,e){q=0,r=-1,i=a,j=e,typeof c==="object"&&c!==null?s=c:s={},y(Math.floor((d===void 0||d===null||d===0?Date.now():d)/1e3)),b("Banzai").subscribe(b("Banzai").SHUTDOWN,v)},update:function(a){B(a)},get:function(){return A()},ship:function(){v()},reset:function(){z()},testState:function(){return u()}}}),null);
__d("TimeSpentImmediateActiveSecondsLogger",["requireCond","cr:844180"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:844180")}),null);
__d("TimeSpentBitArrayLogger",["Arbiter","Banzai","BanzaiODS","Env","LogHistory","TimeSpentArray","TimeSpentConfig","TimeSpentImmediateActiveSecondsLogger","UserActivity","isInIframe"],(function(a,b,c,d,e,f){__p&&__p();var g={delay:b("Banzai").BASIC.delay,retry:!0};function h(a,c){b("Arbiter").inform("timespent/tosbitdataposted",babelHelpers["extends"]({},a)),typeof c==="number"?g.delay=c:g.delay=b("Banzai").BASIC.delay,b("Banzai").post("time_spent_bit_array",babelHelpers["extends"]({},a),g),g.delay=b("TimeSpentConfig").delay}e.exports={init:function(a){__p&&__p();if(b("isInIframe")()&&!b("Env").isCQuick)return;b("UserActivity").subscribe(function(a,c){a=c.last_inform;b("TimeSpentArray").update(a);b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a)});a=Date.now();b("TimeSpentArray").init(h,b("TimeSpentConfig"),a);b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a);b("BanzaiODS").bumpEntityKey(2966,"ms.time_spent.qa.www","time_spent.bits.js_initialized")}}}),null);
__d("XSEOEngagementMetricController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/xsemc/",{})}),null);
__d("SEOEngagementMetricShared",["csx","Parent","URI","XSEOEngagementMetricController","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="client_load",i="retain",j="click",k="submit",l=11e3;function a(a,c){__p&&__p();return{_category:"",_id:"",_keyword:"",_fbid:"",init:function(c){__p&&__p();var d=this;this._category=c.category;this._id=c.id;this.keyword=c.keyword;this._fbid=c.fbid;b("setTimeout")(function(){return d._log(i)},l);a.listen(document,"click",function(a){a=a.target||a.srcElement;var c=b("Parent").byTag(a,"a");c!==null&&c.getAttribute("href")!=="#"&&c.getAttribute("ajaxify")===null?d._log(j):b("Parent").byTag(a,"button")&&!b("Parent").bySelector(a,"._zbd")&&d._log(k)});a.listen(document,"submit",function(a){return d._log(k)});this._log(h)},_log:function(a){a={category:this._category,id:this._id,client_time:Math.floor(Date.now()/1e3),event:a,keyword:this.keyword,fbid:this._fbid};c(b("XSEOEngagementMetricController").getURIBuilder().getURI(),a)}}}e.exports=a}),null);
__d("SEOEngagementMetric",["AsyncRequest","Event","SEOEngagementMetricShared","URI"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("AsyncRequest").post(a,c)}var g=b("SEOEngagementMetricShared")(b("Event"),a);c={log:function(a){g.init(a)}};e.exports=c}),null);
__d("NavigationClickPointHandler",["Event","ScriptPath","collectDataAttributes"],(function(a,b,c,d,e,f){__p&&__p();var g={getClickPointInfo:function(a){__p&&__p();var c=null,d=b("collectDataAttributes")(a,["ft"],["href","data-click"]),e=d.normal.href;if(!e||e==="#")return!1;e=d.normal["data-click"];c===null&&e&&(c={click:e});e=d.ft.tn;c===null&&e&&(c={tn:e});if(c===null&&a.getAttribute){d=a.getAttribute("class");d&&(c={"class":d})}return c}};function a(a){a=a.target||a.srcElement;a=g.getClickPointInfo(a);a!==!1&&b("ScriptPath").setClickPointInfo(a)}document.documentElement!==null&&b("Event").listen(document.documentElement,{click:a});e.exports=g}),null);
__d("WebStorageMonster",["AsyncRequest","CacheStorage","Event","StringTransformations","UserActivity","WebStorage","WebStorageMonsterLoggingURI","ifRequired","isEmpty","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=3e5,h=!1;function i(a){var c={};for(var d in a){var e=a.getItem(d),f=b("StringTransformations").unicodeEscape(d);typeof e==="string"&&(c[f]=e.length)}return c}function j(a){var c=b("WebStorage").getLocalStorage();if(!c||!a.keys)return;m._getLocalStorageKeys().forEach(function(b){a.keys.includes(b)&&c.removeItem(b)})}function k(a){var c=b("WebStorage").getLocalStorage();c&&m._getLocalStorageKeys().forEach(function(b){a.some(function(a){return new RegExp(a).test(b)})||c.removeItem(b)})}function l(a){a===void 0&&(a=!1),b("UserActivity").isActive(g)?b("setTimeoutAcrossTransitions")(function(){l(a)},g):m.cleanNow(a)}var m={registerLogoutForm:function(a,c){b("Event").listen(a,"submit",function(a){m.cleanOnLogout(c)})},schedule:function(a){a===void 0&&(a=!1);if(h)return;h=!0;l(a)},cleanNow:function(a){__p&&__p();a===void 0&&(a=!1);var c=Date.now(),d={},e=b("WebStorage").getLocalStorage();e&&(d.local_storage=i(e));e=b("WebStorage").getSessionStorage();e&&(d.session_storage=i(e));e=!b("isEmpty")(d);var f=Date.now();d.logtime=f-c;if(e){f=b("WebStorageMonsterLoggingURI").uri;if(f===null)return null;new(b("AsyncRequest"))(f).setData(d).setHandler(function(c){c=c.getPayload();c.keys&&(c.keys=c.keys.map(b("StringTransformations").unicodeUnescape));a||j(c)}).send()}},cleanOnLogout:function(a){b("CacheStorage").disablePersistentWrites();b("ifRequired")("AsyncStorage",function(a){a.disablePersistentWrites()});a&&k(a);a=b("WebStorage").getSessionStorage();a&&a.clear();b("ifRequired")("AsyncStorage",function(a){a.clear(function(){})})},_getLocalStorageKeys:function(){var a=b("WebStorage").getLocalStorage();return a?Object.keys(a):[]}};e.exports=m}),null);
__d("BootloaderLoggerUtil",["Bootloader","BootloaderEventsTypedLogger","ScriptPath","SiteData","performanceNavigationStart"],(function(a,b,c,d,e,f){__p&&__p();var g=null;a={initLogging:function(a){if(g)return;g=b("Bootloader").getArbiter().subscribe(b("Bootloader").Events.BOOTLOAD,function(c,d){if(!d)return;c=d.start_time;d=babelHelpers.objectWithoutPropertiesLoose(d,["start_time"]);c=Math.round(c-b("performanceNavigationStart")());new(b("BootloaderEventsTypedLogger"))().setMsSinceNavstart(c).setPkgCohort(b("SiteData").pkg_cohort).setWeight(a.sample_rate).setSvnRev(b("SiteData").client_revision).setBlEndpointMode(b("SiteData").be_mode).setRequestPath(b("ScriptPath").getScriptPath()).setEfPage(b("ScriptPath").getEarlyFlushPage()).setParentLid(a.parent_lid).updateData(d).log()})}};e.exports=a}),null);
__d("ErrorFilter",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=50,h=new Map(),i;function j(){__p&&__p();var a=Date.now();if(i+1e3<a){for(var b=h,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];e<a&&h["delete"](f)}i=a}}a={shouldLog:function(a){__p&&__p();if(a.message&&a.message.toLowerCase().startsWith("script error"))return!1;a=a.name+a.message+a.type;var b=h.get(a),c=Date.now();if(b==null||b+g<c){h.set(a,c);j();return!0}return!1}};e.exports=a}),null);
__d("getSimpleHash",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=0;for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);b=(b<<5)-b+d;b|=0}return String(b)}e.exports=a}),null);
__d("ErrorPoster",["Banzai","ErrorFilter","getSimpleHash"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=!0;function i(a,b){var c={};b&&Object.keys(b).forEach(function(a){b[a]&&(c[a]=!0)});Object.keys(a).forEach(function(b){a[b]?c[b]=!0:c[b]&&delete c[b]});return Object.keys(c)}function j(a){return((a=a)!=null?a:[]).map(function(a){return{column:parseInt(a.column,10),identifier:a.identifier,line:parseInt(a.line,10),script:a.script}})}function k(a,c){c={cavalry_lid:c.cavalry_lid,access_token:c.access_token,ancestor_hash:b("getSimpleHash")(a.name+a.stack),cerror:c.cerror,column:a.column,extra:i(a.extra,c.jsErrorExtra),guard:a.guard,guardList:a.guardList,line:a.line,message:a.message,messageWithParams:a.messageWithParams,name:a.name,reactComponentStack:a.reactComponentStack,script:a.script,site_category:c.site_category,stackFrames:j(a.stackFrames),type:a.type,page_time:c.page_time,push_phase:c.push_phase,script_path:c.script_path,server_revision:c.server_revision,spin:c.spin,svn_rev:String(c.client_revision),web_session_id:c.web_session_id,version:2};var d=a.deferredSource;d&&d.stackFrames&&(c.deferredSource={stackFrames:j(d.stackFrames)});a.fbloggerMetadata&&(c.fbloggerMetadata=a.fbloggerMetadata);a.loadingUrls&&(c.loadingUrls=a.loadingUrls);a.serverHash!=null&&(c.serverHash=a.serverHash);a.windowLocationURL!=null&&(c.windowLocationURL=a.windowLocationURL);a.loggingSource!=null&&(c.loggingSource=a.loggingSource);return c}function l(a){__p&&__p();var b;b=(b=a.ancestor_hash)!=null?b:"0";var c=g.slice();g.length<15&&g.push(b);a.ancestors=c;b=a.type;if(h&&(b==null||b==""||b==="error")){a.extra=(c=a.extra)!=null?c:[];a.extra.push("first_error");h=!1}}function a(a,c){if(!b("ErrorFilter").shouldLog(a))return!1;a=k(a,c);l(a);b("Banzai").post("js_error_logging",a);return!0}e.exports={postError:a,primeForPosting:l,createErrorPayload:k}}),null);
__d("ErrorLogging",["BanzaiODS","ErrorPoster","ErrorPubSub","JSErrorExtra","JSErrorPlatformColumns","ScriptPath","SiteData"],(function(a,b,c,d,e,f){"use strict";function a(a){a=b("ErrorPoster").postError(a,{access_token:b("JSErrorPlatformColumns").access_token,client_revision:b("SiteData").client_revision,jsErrorExtra:b("JSErrorExtra"),server_revision:b("SiteData").server_revision,spin:b("SiteData").spin,push_phase:b("SiteData").push_phase,script_path:b("ScriptPath").getScriptPath()});if(!a)return;["error_signal.category.javascript_error","error_signal.sent","error_signal."+(b("SiteData").haste_site==="mobile"?"m_touch":"www")+".sent"].forEach(function(a){return b("BanzaiODS").bumpEntityKey(976,"js_error_reporting",a)})}b("ErrorPubSub").addListener(a);e.exports={defaultJSErrorHandler:a}}),null);
__d("ScriptPathLogger",["Banzai","CurrentUser","LogHistory","ScriptPath","URI","isInIframe"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="script_path_change",h={scriptPath:null,categoryToken:null,extraData:{}},i=!1,j="imp_id";function k(a){__p&&__p();var c=b("URI").getNextURI?b("URI").getNextURI():new(b("URI"))(window.location.href),d=c.getQueryData();c=c.getPath();c.endsWith("/")&&(c=c.substr(0,c.length-1));var e=l(c,d);if(e){a.content_id=e;return}e=m(c);if(e!==""){a.dest_topic_feed=e;return}if(n(c)){e=d.queue_id;e&&(a.dest_srt_queue_id=e);c=d.job_in_review;c&&(a.dest_srt_reviewing_job_id=c);return}}function l(a,b){__p&&__p();if(b.story_fbid)return b.story_fbid;if(b.fbid)return b.fbid;if(b.view==="permalink"&&b.id)return b.id;b=/\/(posts|videos|notes|groups\/.*\/permalink)\//;var c=/^[0-9]+$/;if(b.test(a)){b=a.split("/");a=b[b.length-1];if(c.test(a))return a}return""}function m(a){if(!a||a.search("/feed/topics/")==-1)return"";a=a.split("/");return a[a.length-1]}function n(a){return!!a&&a.search("/intern/review/")!==-1}function o(a,c,d,e){__p&&__p();if(!i||b("isInIframe")())return;var f=b("CurrentUser").isLoggedIn(),h=f?b("Banzai").VITAL:b("Banzai").BASIC;f&&(e=e||{},e.via_banzai_vital="1");f={source_path:a.scriptPath,source_token:a.categoryToken,dest_path:c.scriptPath,dest_token:c.categoryToken,impression_id:c.extraData?c.extraData.imp_id:null,cause:d};d=d==="unload";d||k(f);if(e!=null){var l=e;l=l.snowlift_content_id;!d&&l!=null&&(f.content_id=l,delete e.snowlift_content_id);f.extra_data=e}a.scriptPath===null&&(f.referrer=document.referrer);d=b("ScriptPath").getClickPointInfo();d&&(f.click_point_info=d);if(a.extraData)for(var m in a.extraData)m!=j&&(f["source_"+m]=a.extraData[m]);if(c.extraData)for(var n in c.extraData)n!=j&&(f["dest_"+n]=c.extraData[n]);a.topViewEndpoint&&(f.source_endpoint=a.topViewEndpoint);c.topViewEndpoint&&(f.dest_endpoint=c.topViewEndpoint);a.restored&&(f.source_restored=!0);b("Banzai").post(g,f,h);b("ScriptPath").setClickPointInfo(null)}function p(){o(b("ScriptPath").getSourcePageInfo()||h,b("ScriptPath").getPageInfo()||h,"load")}function q(a,b,c){o(a,b,"transition",c)}function a(){o(b("ScriptPath").getPageInfo()||h,h,"unload"),b("ScriptPath").shutdown()}var r=b("ScriptPath").subscribe(function(a){if(i){var b=a.source,c=a.dest,d=a.cause;a=a.extraData;d?o(b||h,c||h,d,a):b?q(b,c||h,a):p()}});b("Banzai").subscribe(b("Banzai").SHUTDOWN,a);c={startLogging:function(){i=!0,b("ScriptPath").getPageInfo()&&p()},stopLogging:function(){i=!1,r.remove()},BANZAI_LOGGING_ROUTE:g};e.exports=c}),null);
__d("TimeSpentImmediateActiveSecondsLoggerBlue",["Banzai","ImmediateActiveSecondsConfig","ScriptPath"],(function(a,b,c,d,e,f){__p&&__p();var g="immediate_active_seconds",h={signal:!0,retry:!0},i=b("ImmediateActiveSecondsConfig").sampling_rate,j=b("ImmediateActiveSecondsConfig").ias_bucket,k=0;function l(a){if(i<=0)return!1;a=Math.floor(a/1e3)%i;return a===j}function a(a){if(a>=k&&a-k<1e3)return;if(l(a)){var c={activity_time_ms:a,last_activity_time_ms:k,script_path:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post(g,c,h)}k=Math.floor(a/1e3)*1e3}e.exports={maybeReportActiveSecond:a}}),null);