!function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 1, 6126);var librastandardlib_event_utils_onWindowLoad,librastandardlib_event_utils_onDOMContentLoaded,librastandardlib_id_utils_generateUUID,pre_offer_content_sitePriv_main;!function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 178, 6123);librastandardlib_event_utils_onWindowLoad=function onWindowLoad(cb,context){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 231, 466);context=context||this;if(document.readyState==="complete"){cb.call(context)}else{document.addEventListener("readystatechange",function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 391, 457);if(document.readyState==="complete"){cb.call(context)}},false)}};librastandardlib_event_utils_onDOMContentLoaded=function(onWindowLoad){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 515, 952);return function onDOMContentLoaded(cb,context){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 545, 951);context=context||this;var resolved=false;if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){resolved=true;cb.call(context)}else{document.addEventListener("DOMContentLoaded",function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 813, 870);if(!resolved){resolved=true;cb.call(context)}},false);onWindowLoad(function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 891, 948);if(!resolved){resolved=true;cb.call(context)}})}}}(librastandardlib_event_utils_onWindowLoad);librastandardlib_id_utils_generateUUID=function generateUUID(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 1035, 1260);var d=(new Date).getTime();var id="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 1148, 1248);var r=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return(c==="x"?r:r&3|8).toString(16)});return id};pre_offer_content_sitePriv_main=function(onDOMContentLoaded,generateUUID){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 1293, 6034);var C_NAME="aws-priv";var C_VERSION=1;var C_EXPS=94672800;var pageRequestId;function getLang(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 1411, 1964);var DEFAULT_LANG="en_US";var codes={ar_SA:"ar",en_US:"en",es_ES:"es",de_DE:"de",fr_FR:"fr",id_ID:"id",it_IT:"it",ja_JP:"jp",ko_KR:"ko",pt_BR:"pt",ru_RU:"ru",th_TH:"th",tr_TR:"tr",vi_VN:"vi",zh_CN:"cn",zh_TW:"tw"};var tags=document.getElementsByTagName("HTML");var attr;if(tags.length){attr=tags[0].getAttribute("lang")}if(!attr){return DEFAULT_LANG}else if(attr.length===5){attr=attr.replace("-","_");if(attr in codes){return attr}}else if(attr.length===2){for(var key in codes){if(attr===codes[key]){return key}}}return DEFAULT_LANG}function prependUrlOrigin(url,origin){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 1964, 2048);if(origin==="/"){return url}return origin+url}function appendUrlFileSuffix(url,fileSuffix){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 2048, 2115);return url+fileSuffix}function appendUrlQueryString(url,qs){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 2115, 2167);return url+qs}function prependUrlPath(url,path){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 2167, 2217);return path+url}function replaceUrlLang(url,lang){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 2217, 2285);return url.replace("{lang}",lang)}function getUrl(lang){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 2285, 2964);var OFFER_PATH="/{lang}/predefined/site-privacy-notification";var origin="https://s0.awsstatic.com";var fileSuffix="/index.html";var path="";var queryString="";if("AWS"in window&&"TargetMediator"in AWS&&AWS.TargetMediator.options&&AWS.TargetMediator.options.hasLoaded){path=AWS.TargetMediator.options.offerContentPath;origin=AWS.TargetMediator.options.offerOrigin;fileSuffix=AWS.TargetMediator.options.offerFileSuffix;queryString=AWS.TargetMediator.options.offerQueryString}url=prependUrlPath(OFFER_PATH,path);url=prependUrlOrigin(url,origin);url=appendUrlFileSuffix(url,fileSuffix);url=appendUrlQueryString(url,queryString);return replaceUrlLang(url,lang)}function show(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 2964, 3107);var c=getCookie(C_NAME);if(typeof c!=="object"){return true}if(c.st){return false}if("eu"in c&&!c.eu){return false}return true}function seen(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 3107, 3233);var c=getCookie(C_NAME);if(typeof c!=="object"){c={v:C_VERSION}}c.st=1;setCookie(C_NAME,c,C_EXPS);log("Seen")}function log(msg){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 3233, 4359);var metricName="awsm_:comp_priv_"+msg;var time=(new Date).getTime();var pageTime=-1;if("performance"in window&&"timing"in window.performance){pageTime=time-window.performance.timing.responseEnd}var page=encodeURIComponent(window.location.toString());pageRequestId=pageRequestId||generateUUID();var logDataSet="NA";var logInstance="LIVE";if("AWS"in window&&"PageSettings"in AWS){if(AWS.PageSettings.isLoggingEnabled===false){return}if(AWS.PageSettings.logDataSet){logDataSet=encodeURIComponent(AWS.PageSettings.logDataSet)}if(AWS.PageSettings.logInstance){logInstance=AWS.PageSettings.logInstance}}var AI_LOG="https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/"+metricName+"@v=1:u=c?dataset="+logDataSet+"&instance="+logInstance+"&service=awsm&marketplace=NA&client=dsk&host=aws.amazon.com&marketplaceId=A12QK8IU0H0XW5&requestId=ABCDEFGHIJKLMNOPQRST&session=123-1234567-1234567";var RAW_LOG="https://fls-na.amazon.com/1/aws-mktg/1/OE/?cat=SitePriv&level=INFO&msg="+msg+"&currentTime="+time+"&pageTime="+pageTime+"&pageRequestId="+pageRequestId+"&page="+page;logCall(AI_LOG);logCall(RAW_LOG)}function logCall(url){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 4359, 4427);setTimeout(function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 4392, 4423);(new Image).src=url},0)}function onDone(data){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 4427, 4700);if(!data||data.indexOf("mo-sitePriv")===-1){onFail("InvalidContentError");return}var el=document.createElement("div");el.innerHTML=data;try{document.body.appendChild(el);setTimeout(function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 4630, 4652);onInject()},100)}catch(e){onFail("ContentInjectionError")}}function onInject(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 4700, 5111);var el=document.getElementById("mo-sitePriv-close");if(el){var wp;if(el.parentElement){wp=el.parentElement}if(wp){var offset;if("AWSM"in window&&AWSM.SitePriv&&AWSM.SitePriv.offset){offset=AWSM.SitePriv.offset}if(offset){wp.style.bottom=offset+"px"}wp.style.display="block";seen();el.addEventListener("click",function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5029, 5064);wp.style.display="none"},false)}}else{onFail("ContentDetectionError")}}function onFail(msg){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5111, 5141);log(msg)}function setCookie(name,val,expSecs){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5141, 5468);val=btoa(JSON.stringify(val));var d=new Date;d.setTime(d.getTime()+expSecs*1e3);var exp=d.toUTCString();var parts=window.location.hostname.split(".");for(;parts.length>3;){parts.shift()}var domain="."+parts.join(".");document.cookie=name+"="+val+";expires="+exp+";domain="+domain+";path=/"}function getCookie(name){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5468, 5654);var v=document.cookie.split(name+"=")[1];if(v){v=v.split(";")[0];if(v){v=v.replace(/\"/g,"");try{return JSON.parse(atob(v))}catch(e){return false}}}return false}function fetch(lang){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5654, 5952);var url=getUrl(lang);var xhr=new XMLHttpRequest;xhr.open("GET",url);if("withCredentials"in xhr){xhr.withCredentials=false}else{return}xhr.onreadystatechange=function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5832, 5940);if(this.readyState===4){if(this.status===200){onDone(xhr.responseText)}else{onFail("XHRError")}}};xhr.send()}onDOMContentLoaded(function(){___jdce_logger("lacuna_cache/imported_nsqt6p.js", 5971, 6032);if(!show()){return}var lang=getLang();fetch(lang)})}(librastandardlib_event_utils_onDOMContentLoaded,librastandardlib_id_utils_generateUUID)}()}();