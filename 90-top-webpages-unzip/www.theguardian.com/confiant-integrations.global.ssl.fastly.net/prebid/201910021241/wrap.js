(function () {
  'Copyright © 2013-2019 Confiant Inc. All rights reserved.';
  'v3.201910021241';
  function confiantWrap(o,c,e,p,i,s,n){var t=c.bidder,r=c.size,b=o.parentWindow||o.defaultView,v=b.JSON,a=b.btoa,w=b.encodeURIComponent;if(!v||!a)return!1;var f="script",u="src",d="replace",h="error",_="stringify",m="wr"+"i"+"t"+"e";e.indexOf("http")<0&&(e="https://"+e);var y=e+"/?wrapper="+w(p)+"&tpid=",x={k:{hb_bidder:[t],hb_size:[r]}};function l(e){return(a(e)||"")[d]("/","_")[d]("+","-")}return function(){var e=l(p+"/"+x.k.hb_bidder[0]+":"+x.k.hb_size[0]),t={wh:e,wd:v.parse(v[_](x)),wr:0};2===n&&(t.cb=1e3*Math.random());var r={prebid:{adId:c.adId,cpm:c.cpm}},a=!1;try{a=!!b.frameElement.getAttribute("data-forced-sandbox")}catch(e){}var d={d:t,t:escape(c.ad),isE:!0,cb:i,id:r,isFSb:a,devMode:n};!function(e,t,r){var a=y+w(e)+"&d="+t,d="err__"+1*new Date;b[d]=function(){o[m](c.ad)};var i="<"+f+' type="text/java'+f+'">window["'+p+'"]={};'+'window["'+p+'"]["tpid"]="'+e+'";'+'window["'+p+'"]["'+e+'"]='+v.stringify(r)+";"+"</"+f+">",n="<"+f+" on"+h+'="void('+d+'())" '+u+'="'+a+'" type="text/java'+f+'" ></'+f+">";s&&(n="<"+f+" on"+h+'="void('+d+'())" '+'" type="text/java'+f+'" >'+unescape(s)+"</"+f+">"),o[m](i+n)}(e,l(v[_](t)),d)}(),o.close(),!0}
  var Caspr=function(u,t,l,f,e){this.CONSTANTS={MATCHING_STYLE_1:1,MATCHING_STYLE_2:2,MATCHING_STYLE_3:3,MATCHING_STYLE_4:4},this.log_sample=void 0===u.ls||u.ls,this.rules=("string"==typeof u&&(u=JSON.parse(atob(u))),u&&u.m?u.m:[]),this.masterReset=!0,"rs"in u&&(this.masterReset=u.rs),this.frames=[],this.cajsPresent=!1,this.tagSource=t||"",this.trackers=["iframe","object","a"],this.hasBeenUndone=!1,this.adserverDomain="/* @echo DOMAIN */",this.submitEndpoint="/log",this.targetId=null,this.prefixedTpid=l&&""!==l?l:null,this.submitted=!1,this.doneWithSandbox=!1,this.version=u.v?u.v:0,this.window=window,this.replaceWithHTML=null,this.isDfpOnPageIntegration=!1,this.isForcedSandboxing=!1,this.inAppSuccessCallback=null,this.devMode=0,this.supportLandingPageBlocking=!1,this.isAst=!1,this.isIEorEdgeorFF=window.navigator.userAgent.match(/(Trident\/7.0)|(edge|Firefox)/i),this.isLoadEventFired=!1;var n=.0025,o=.05,c=!(this.shouldMonitorAllNestedFrames=!1);e&&(this.adserverDomain=e),this.wrapper=f,this.errors=[],this.blockingData=null,this.do_undo=void 0===u.du||!!u.du,this.replace=void 0!==u.re?unescape(u.re):"",this.backupFunctions={},this.targetId=f&&f.uniqueHash&&0<f.uniqueHash.length?f.uniqueHash:l,this.dom={findings:[],parentHTML:"",getRootElement:function(t){return c?document.body:document.getElementById(t.targetId)},walkTheDOM:function(t,e){for(e(t),t=t.firstChild;t;)this.walkTheDOM(t,e),t=t.nextSibling;return this.parentHTML},traverseAd:function(t){if(t){var i=this;return this.parentHTML=t.outerHTML,this.walkTheDOM(t,function(t){if(1==t.nodeType){if(t.contentWindow)try{var e=t.contentWindow.document.getElementsByTagName("html")[0].innerHTML;i.parentHTML=i.parentHTML.replace(t.outerHTML,"<head></head><body></body>"==e?t.outerHTML:t.outerHTML.replace("</iframe>",e+"</iframe>"))}catch(t){}}else if(3===t.nodeType)t.data.trim();else try{t.outerHTML&&-1<t.outerHTML.indexOf("Caspr")&&(this.parentHTML=this.parentHTML.replace(t.outerHTML,""))}catch(t){console.error(t)}})}}},this.getTopFrameParent=function(){var o=function(t,e){try{for(var i=t.contentWindow.document.getElementsByTagName("iframe"),r=0;r<i.length;r++){var n=i[r];if(n==e)return!0;if(o(n,e))return!0}return!1}catch(t){return!1}};try{if(frameElement){for(var t=window.top.document.getElementsByTagName("iframe"),e=0;e<t.length;e++){if(t[e]==frameElement)return t[e];if(o(t[e],frameElement))return t[e]}return!1}return!1}catch(t){return!1}},this.findContextForTpid=function(i,t){var e,r=function(){var t=0<Object.keys(window[i]).length?Object.keys(window[i]):null;if(!t)return null;for(var e=0;e<t.length;e++)if("tpid"!=t[e])return t[e];return null}(window);if(!r)throw Error("Unable to find confiant context object. Please contact support@confiant.com.");return e=window[i][r],window[i][t]=e},this.wrapper={PAYLOAD_KEY:"d",TAG_KEY:"t",_data:{},augmentRequest:function(t){return(t=t||{}).wr=this._data.wr,t.wh=this._data.wh,t.wd=this._data.wd,t},init:function(t){var e=t.findContextForTpid(l,"%%TP_IDENTIFIER%%");e.u=1*new Date,this._data=e[this.PAYLOAD_KEY],t.tagSource=e[this.TAG_KEY],e.isE&&(t.tagSource=unescape(t.tagSource),t.isDfpOnPageIntegration=!0),this._tag=t.tagSource,t.isSafeFrame=e.isSfrm,t.isSandboxedSafeframe=e.isSfrm&&e.isSb,t.isForcedSandboxing=e.isFSb,t.inAppSuccessCallback=e.successCallback,t.devMode=e.devMode||0}},this.creativeWrapper={init:function(t){var e=t.findContextForTpid(f.uniqueHash,f.tpIdentifier);e.u=1*new Date,t.tagSource=e.t,e.isE&&(t.tagSource=unescape(t.tagSource),t.isDfpOnPageIntegration=!0);var i=f.uniqueHash;"function"!=typeof e.cb&&(e.cb=null),t.cb=e.cb?e.cb:function(){try{window.top.postMessage("cb"+i+btoa(JSON.stringify(Array.prototype.slice.call(arguments))),"*")}catch(t){window.parent.postMessage("cb"+i+btoa(JSON.stringify(Array.prototype.slice.call(arguments))),"*")}},t.id=e.id?e.id:null,t.isSafeFrame=e.isSfrm,t.isSandboxedSafeframe=e.isSfrm&&e.isSb,t.isForcedSandboxing=e.isFSb,t.inAppSuccessCallback=e.successCallback,t.devMode=e.devMode||0,t.shouldSupportLandingPageBlocking=e.isAST||2==e.devMode,t.isAst=e.isAST}};var i,r,s=["Y29uZmlhbnRfdGVzdF8xMjMxMDE=","aW5kZXhPZg==","aW1nLnR1cm5jZG4uY29t","cG0tbm90aWZpY2F0aW9ucy5jb20=","c3RvcmFnZS5nb29nbGVhcGlzLmNvbQ==","ZS1wbGFubmluZy5uZXQ="];i=s,r=392,function(t){for(;--t;)i["push"](i["shift"]())}(++r);var h,a=function(t){var e=s[t-=0];void 0===a["initialized"]&&(function(){var e;try{e=Function("return (function() "+'{}.constructor("return this")( )'+");")()}catch(t){e=window}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e["atob"]||(e["atob"]=function(t){for(var e,i,r=(t+"")["replace"](/=+$/,""),n=0,o=0,s="";i=r["charAt"](o++);~i&&(e=n%4?64*e+i:i,n++%4)?s+=String["fromCharCode"](255&e>>(-2*n&6)):0)i=a["indexOf"](i);return s})}(),a["base64DecodeUnicode"]=function(t){for(var e=atob(t),i=[],r=0,n=e["length"];r<n;r++)i+="%"+("00"+e["charCodeAt"](r)["toString"](16))["slice"](-2);return decodeURIComponent(i)},a["data"]={},a["initialized"]=!0);var i=a["data"][t];return void 0===i?(e=a["base64DecodeUnicode"](e),a["data"][t]=e):e=i,e},d={},p=a("0x0"),g=a("0x1"),m=a("0x2"),w=a("0x3"),v=a("0x4");function b(){var t,e="undefined"!=typeof InstallTrigger;return(/constructor/i.test(window.HTMLElement)||""+(!window["safari"]||"undefined"!=typeof safari&&safari.pushNotification)=="[object SafariRemoteNotification]")&&(t="safari"),e&&(t="firefox"),!(!window.chrome||!window.chrome.webstore&&!window.chrome.runtime)&&(t="chrome"),t||(-1<navigator.userAgent.indexOf("Safari")&&(t="safari"),-1<navigator.userAgent.indexOf("FireFox")&&(t="firefox"),-1<navigator.userAgent.indexOf("Chrome")&&-1==navigator.userAgent.indexOf("Edge")&&(t="chrome")),t}function S(t,e){return t.test(e)}if(d[p]=.05,d[g]=.05,d[m]=.05,d[w]=.05,d[v]=1,this.prebidIeAndEdgeFix=function(){try{var d=document,h=this;d.open=(c=document.open,function(t,e){var i,r,n;try{n=h.findContextForTpid(i=f.uniqueHash,r=f.tpIdentifier)}catch(t){}var o=c.call(this,t,e);try{if(delete d.write,delete d.open,i&&r&&n){n.t="\x3c!-- tag --\x3e";var s="var Caspr = "+Caspr+";\n",a="new Caspr("+JSON.stringify(u)+', null, "'+l+'",'+'{"uniqueHash":"'+i+'","tpIdentifier":"'+r+'"},'+'"'+h.adserverDomain+'")';o.defaultView[i]={},o.defaultView[i]["tpid"]=r,o.defaultView[i][r]=JSON.parse(JSON.stringify(n)),o.defaultView.eval(s),o.defaultView.eval(a)}}catch(t){console.error(t)}return o})}catch(t){console.error(t)}var c},this.init=function(){var t,r=this,e=!f||f&&!f.tpIdentifier,i=function(t){if(r.do_undo){if(window.Caspr=void 0,caspr=void 0,r.hasBeenUndone)return;r.casprize(!0),r.hasBeenUndone=!0}var e="unload"===t.type;if(r.isLoadEventFired=r.isLoadEventFired||"load"===t.type,e&&!r.isLoadEventFired&&(n=o),!r.submitted&&r.log_sample&&(Math.random()<=n||window.forceTestSampleLogging)){var i=r.dom.traverseAd(r.dom.getRootElement(r));r.blockingData={html:i||null,ar:"",r:!1,oi:null,ot:null,tag:r.tagSource,v:r.version},r.submitFindings(r.isSafeFrame,e,!1,r.isLoadEventFired)}};window.addEventListener("load",i),window.addEventListener("unload",i),e&&this.wrapper.init(this),e||this.creativeWrapper.init(this),this.isIEorEdgeorFF&&this.prebidIeAndEdgeFix(),this.casprize(!1),this.tagSource&&(n=function(t){for(var e in d){var i=e;if(-1<t[a("0x5")](i))return d[e]}return n}(this.tagSource)),t=c?this.tagSource:"<div id='"+this.targetId+"' class='ad-container-"+this.targetId+"'>"+this.tagSource+"</div>",this.isSafeFrame?this.createPatchFunction(this.patchArguments[0],this.patchArguments[1],this.patchArguments[2])([this.tagSource],this.isSafeFrame):document.write(t),this.postAPIEvent("confiantSlotRenderEnded")},this.setRules=function(t){this.rules="object"==typeof t?t:[t]},this.getRules=function(){return this.rules},this.submitFindings=function(t,e,i,r){if("undefined"!=typeof XMLHttpRequest&&!this.submitted){this.submitted=!0;var n=3==this.devMode,o=window.sf_||window.$sf?document.referrer:window.location.href,s={};s.u=o,s.logs=this.errors,this.blockingData&&(s.bd=this.blockingData),s.e=i?"b":e?r?"u":"uu":"l",i||s.bd.html&&(s.bd.html+="\n\x3c!-- e:"+s.e+" --\x3e"),this.prefixedTpid&&(s.uh=this.prefixedTpid),s.id=this.id,(s=this.wrapper.augmentRequest(s)).tt="w",s.tt="t";var a=this.adserverDomain+this.submitEndpoint;try{var d=null;try{d=btoa(JSON.stringify(s))}catch(t){d=JSON.stringify(s)}if(!n){var h=window.navigator,c=!!this.getPropertyId().match(/(trB5nelTxsjRl85E7hL4Y1GisKY)|(Lc8WgUx65bylj2bqLTKmzFAUpoE)|(9NcWcY5ZLLLrnRYyfpvRGtJ-zMk)|(qjvXa44Qfwp61in_jX9wKlFbhJw)/),u=(e||c)&&h&&h.sendBeacon;if(!u&&t){var l=btoa(JSON.stringify({sendUrl:a,payload:d,slotId:this.id,replaceWith:this.replaceWithHTML}));try{window.top.postMessage("comm"+this.targetId+l,"*")}catch(t){window.parent.postMessage("comm"+this.targetId+l,"*")}}else{var f=new XMLHttpRequest;f.onreadystatechange=function(){},u?h.sendBeacon(a,d):(f.open("POST",a,!1),f.send(d))}}s.bd.ot&&this.cb&&this.cb(s.bd.ot,s.bd.oi,this.blockingData.r,this.wrapper.uniqueHash,this.wrapper.tpIdentifier,this.id)}catch(t){console.error("Confiant: Failed to log",""+t)}}},this.postAPIEvent=function(e){var t=(""+(new Date).getTime()).split("").reverse().join(""),i=0,r=btoa(Math.ceil(1e4*Math.random())+"cOmM"+t),n={propertyId:this.wrapper?this.wrapper.uniqueHash:this.targetId,tagId:this.wrapper?this.wrapper.tpIdentifier:"",impressionData:this.id},o=function(t){t.data&&t.data.id===r&&(i=100,window.removeEventListener("message",o))},s=function(t){3<=i||(window.top.postMessage({eventType:e,details:n,id:r},"*"),i++,t&&setTimeout(s,500))};window.addEventListener("message",o),s(this.isDfpOnPageIntegration)},this.getPropertyId=function(){return(this.wrapper?this.wrapper.uniqueHash:this.targetId)||this.prefixedTpid||""},this.casprize=function(e,t){t=t||this;var i=this;try{var r={},n=!1,o=!1,s="OX",a=i.tagSource||"";try{r=window.top,o=-1!=a.indexOf(s),n=!!(a.match(/(adb.auction\()|(listenAdFromPrebid)|(listenForAdFromPrebid)|(AdGlare)|(sonobi.com)|(roimediaconsultants.com)|(adnxs\.com\/mediation)|(prebid-universal-creative)|(smartadserver.com)|(gumgum.com)|(adtelligent.com)/)||r.rubicontag||r[s]),o=o||n&&!!r[s]}catch(t){}try{var d=this.getPropertyId();this.shouldMonitorAllNestedFrames="C-8aLarw5k-v1_-pKNB78bTSSJA"===d||4==this.devMode,n=this.shouldMonitorAllNestedFrames||n}catch(t){console.error("nested frames for brightcom disabled")}e?e&&i.unpatchNode():(n&&i.patchNodeMethod("appendChild",t.window),o&&i.patchNodeMethod("replaceChild",t.window));for(var h=0;h<this.rules.length;h++){var c,u;if(e?(0<i.devMode&&console.info("Un-patching!"),u=this.backupFunctions,c=t.window,this.doneWithSandbox=!0):(0<i.devMode&&console.info("Patching!"),c=this.backupFunctions,u=t.window),void 0===this.rules[h].f&&(this.rules[h].f="write"),""!=this.rules[h].f){if(void 0===this.rules[h].h)this.rules[h].h="document";else if(""==this.rules[h].h)continue;if("window"!=this.rules[h].h?(e||c[this.rules[h].h]||(c[this.rules[h].h]={}),c[this.rules[h].h][this.rules[h].f]=u[this.rules[h].h][this.rules[h].f]):(e||c[this.rules[h].h]||(c[this.rules[h].h]={}),e?c[this.rules[h].f]=u[this.rules[h].h][this.rules[h].f]:c[this.rules[h].h][this.rules[h].f]=u[this.rules[h].f]),e)this.hasBeenUndone=!0;else if(this.patch(this.rules[h],h,t),("write"==this.rules[h].f||"writeln"==this.rules[h].f)&&"document"==this.rules[h].h){var l="write"==this.rules[h].f?"writeln":"write",f={r:this.rules[h].r,h:this.rules[h].h,f:l};e||c[this.rules[h].h]||(c[this.rules[h].h]={}),c[this.rules[h].h][l]=u[this.rules[h].h][l],this.patchArguments=[f,h,t],this.patch(f,h,t)}}}}catch(t){console.error("ERROR",t),e||this.casprize(!0)}},this._complete_blocking=function(t,e,i,r,n,o){if(!e.r[i]||!e.r[i].l[r])return t;var s="",a=null;a=this.dom.getRootElement(this),s=this.dom.traverseAd(a);var d=e.r[i].l[r],h=!1;return"rs"in d&&(h=d.rs),this.masterReset||(h=!1),this.blockingData={html:(s=s+"\n\x3c!-- violation detected --\x3e\n"+t)||null,ar:o,r:h,oi:!!d.oi&&d.oi,ot:!!d.ot&&d.ot,tag:this.tagSource,v:this.version},this.replaceWithHTML="re"in d&&""!==d.re?d.re:this.replace,this.submitFindings(n,!1,!0,this.isLoadEventFired),h&&!d.isSb&&(a&&a.remove&&!c&&a.remove(),this.casprize(!0),t=this.replaceWithHTML),{replaceWithHtml:t,shouldBlock:h}},this._is_match=function(t,i,e,r){if(!i)return!1;t instanceof Array||(t=[t]);var n,o,s,a,d="",h=RegExp(r?"[^a-zA-Z0-9-_]":"[^a-zA-Z0-9]"),c=-1,u=-1,l=!1,f=function(t){var e=i.charAt(t);return""==e||h.test(e)};if(e===this.CONSTANTS.MATCHING_STYLE_4)return RegExp(d=t[0]).test(i);for(var p=0;p<t.length;p++){if(u=i.indexOf(d=t[p],c),1==this.devMode)return!0;if(!(l=-1<u))return!1;if(n=u-1,o=u+d.length,e===this.CONSTANTS.MATCHING_STYLE_2?l=l&&(f(n)||(s=i,a=n,!(!this.shouldSupportLandingPageBlocking||!r)&&(0<=a-3?"F"==s[a]&&"2"==s[a-1]&&"%"==s[a-2]:void 0)))&&f(o):e===this.CONSTANTS.MATCHING_STYLE_1&&(l=l&&f(o)),!l)return!1;c=o}return!0},this.patchNodeMethod=function(t,e){try{var s=this,i=e.Node.prototype[t];e.Node.prototype[t]=function(n){var t=n.src||"";!n||"IFRAME"!==n.tagName||!(t.indexOf("https://")<0&&t.indexOf("http://")<0||0<=t.indexOf("//"+window.location.hostname))||s.isIEorEdgeorFF||s.shouldMonitorAllNestedFrames||(n.onload=function(){try{n.contentWindow&&s.casprize(!1,n.contentWindow)}catch(t){}});var o,e=i.apply(this,arguments);try{n.contentDocument&&(n.contentDocument.open=(o=n.contentDocument.open,function(t,e){var i=o.call(this,t,e);try{(s.isIEorEdgeorFF||s.shouldMonitorAllNestedFrames)&&(delete n.contentDocument.write,delete n.contentDocument.open,s.casprize(!1,n.contentWindow))}catch(t){console.error(t)}try{var r=window.top.confiant;r&&r.services().onNestedFrameCreation&&r.services().onNestedFrameCreation(n)}catch(t){}return i}))}catch(t){console.error(t)}return e},e.Node.__cspr__=Node.__cspr__||[],e.Node.__cspr__.push([t,i])}catch(t){console.error(t)}},this.unpatchNode=function(){if(Node.__cspr__){for(var t=Node.__cspr__,e=t.length,i=0;i<e;i++)Node.prototype[t[i][0]]=t[i][1];delete Node.__cspr__}},this.createPatchFunction=function(v,t,b){var S=this;return function(t,e){try{var i={},r=e?t:b.window[v.h][v.f].arguments;if(!r||0===r.length)return;if("setTimeout"==v.f||"setInterval"==v.f||"onload"==v.f)"onload"!=v.f&&0<r.length&&console.info(v.h+"."+v.f+"("+r[0]+(r[1]?", "+r[1]+")":""));else{for(var n=v.r,o=null,s=window.sf_||window.$sf?(g=(p=document.referrer).indexOf("//"),m=p.indexOf("/",g+2),w="",-1<g&&(m<0&&(m=p.length),w=p.substr(g+=2,m-g)),w):window.location.hostname,a=r[0],d=0;d<n.length&&!(a.length<10);d++){var h=S.CONSTANTS.MATCHING_STYLE_2;if(n[d].l&&0<n[d].l.length&&6===n[d].l[0].ot&&(h=S.CONSTANTS.MATCHING_STYLE_3,"r"===n[d].l[0].m&&(h=S.CONSTANTS.MATCHING_STYLE_4)),S._is_match(n[d].d,a,h,!0)&&!(0<=s.indexOf(n[d].d))){for(var c=!1,u=0;u<n[d].l.length;u++){var l=n[d].l[u],f=l.s?l.s:[];if(r[0]&&"string"==typeof r[0]&&(0===f.length&&2!=l.ot||S._is_match(f,a,S.CONSTANTS.MATCHING_STYLE_1,!1))){o="Found suspicious reference to: "+n[d].d+"?"+f.join("&"),console.error(o),S.errors.push(o),i=S._complete_blocking(a,v,d,u,e,window[v.h][v.f].arguments),r[0]=i.replaceWithHtml,c=!0;break}}if(c)break}}e&&c&&i.shouldBlock?window.location.replace("about:blank"):e||S.backupFunctions[v.h][v.f].apply(this,r)}}catch(t){console.error("ERROR",t),S.errors.push("ERROR: "+t),S.casprize(!0)}var p,g,m,w}},this.patch=function(t,e,i){i=i||this,"window"==t.h&&(toPatch=i.window[t.f]),toPatch=this.createPatchFunction(t,e,i),"window"==t.h?i.window[t.f]=toPatch:i.window[t.h][t.f]=toPatch},this.getSandboxingCode=function(){var e=!1,t=window.sf_||window.$sf,i=-1,r=!1,n=void 0!==this.isSandboxedSafeframe;if(t&&n)e=this.isSandboxedSafeframe,r=!0;else if(t&&!n)return i;try{document}catch(t){r=e=!0}if(!e)try{if(null!=window.frameElement){var o=window.frameElement.getAttribute("sandbox");e=o&&0<o.length,r=!0}window}catch(t){e=/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(t.message.toLowerCase()),r=!0}return this.isForcedSandboxing&&!t&&r?4:t&&r?e?3:2:!t&&r?e?1:0:-1},h=this,window.addEventListener("error",function(t){try{if(!((d=t).message&&d.error&&f&&b()))return;var e=(t.error+""+(t.error.stack||"")).substr(0,500).trim();n=((r=t).error+""+(r.error.stack||"")).substr(0,500).trim(),o=b(),s=RegExp({chrome:"The current window does not have permission to navigate the target frame",firefox:"InvalidAccessError: A parameter or an operation is not supported by the underlying object",safari:"The operation is insecure."}[o],"gmi"),a=RegExp(/(d9\.flashtalking\.com\/)|(s0.2mdn\.net\/ads\/studio\/cached_libs\/modernizr)|(video)/,"gmi"),S(s,r.message)&&!S(a,n)&&(i=e,h._complete_blocking("\x3c!-- "+"Browser Detected: "+b()+" "+i+"--\x3e",{f:"write",h:"document",r:[{d:"",l:[{oi:1,ot:8,rs:1,isSb:1}]}]},0,0,!1,""))}catch(t){console.log("Confiant: Failed to listen to sandbox errors.")}var i,r,n,o,s,a,d}),this.init(),this.rules=this.getRules(),f)try{window[f.uniqueHash][f.tpIdentifier]["sb"]=this.getSandboxingCode(),3==this.devMode&&(window[f.uniqueHash][f.tpIdentifier].isPxlReq=!1)}catch(t){f&&window[f.uniqueHash]&&window[f.uniqueHash][f.tpIdentifier]&&(window[f.uniqueHash][f.tpIdentifier]["sb"]=-1)}};
  var cache={},getSerializedCaspr=function(n,i){var t=i,o=!1;try{var e=window.top.confiant?window.top.confiant.settings:null;t||(t=e)}catch(n){o=!0,t=window.confiant?window.confiant.settings:null}if(!t)throw Error("Confiant failed to init. No configuration. Contact support@confiant.com");if(o||(window.top.confiant=window.top.confiant||{settings:t}),!Caspr)throw Error("Confiant failed to init. Blocking layer not found. Contact support@confiant.com");var r=(n=!(void 0!==n&&!o)||n)?"safeframe":"friendly";if(cache[r])return cache[r];var a,c=t.propertyId,w=t.adServer||"https://protected-by.clarium.io";a=!n&&t.rules?"window.top.confiant.settings.rules":n&&t.rules?'"'+btoa(JSON.stringify(t.rules))+'"':'"'+t.cache+'"';var d="var Caspr = "+Caspr+";\n";return cache[r]=escape(d+="new Caspr("+a+', null, "wt_" + window["'+c+'"]["tpid"],'+'{"uniqueHash":"'+c+'","tpIdentifier":window["'+c+'"]["tpid"]},'+'"'+w+'")'+";\n("+function(n,i){var t="",o="",e=Math.ceil(1e7*Math.random()),r="",a="",c=window[n]["tpid"],w=!!c,d="wt_"+c,s="v3"+(new Date).getTime().toString(32);try{(t=JSON.stringify(window[n][c]["id"])||"")&&(t="&id="+escape(btoa(t))),o="&sb="+window[n][c]["sb"],e="&cb="+e;var f=window.sf_||window.$sf?document.referrer:window.location.href,p=f.indexOf("//"),l=f.indexOf("/",p+2);-1<p&&(l<0&&(l=f.length),r=f.substr(p+=2,l-p)),r="&h="+encodeURIComponent(r),a="&d="+btoa(JSON.stringify(window[n][c]["d"]))}catch(n){console.error(n)}i.indexOf("//")<0&&(i="https://"+i);var u=!0;try{void 0===(u=window[n][c]["isPxlReq"])&&(u=!0),u=u&&!window.isPxlSent}catch(n){u=!0}u&&w?((new Image).src=i+"/pixel?tag="+d+"&v=5&s="+s+t+o+e+r+a,window.isPxlSent=!0):console.error("skipping pixel",w,u)}+')("'+c+'", "'+w+'")'),cache[r]};
  // NOTE! this is a slightly modified copy from serverapp: assets/wrapper/twig/prebid.tmpl
// That one is scheduled to be deprecated once V3 is tested and GA
var customPrebidNameSpace = window.confiant.prebidNameSpace || 'pbjs';
window[customPrebidNameSpace] = window[customPrebidNameSpace] || {que: []};
var prebidRef = window[customPrebidNameSpace];
prebidRef.que.push(function() {
  // keep a reference to original renderAd function
  var w = window;
  w.confiant = w.confiant || {};
  w.confiant.renderAd = w.confiant.renderAd || prebidRef.renderAd;
  var config = w.confiant.settings || {
    /* Enables sandboxing on a device group
         All:1 , Desktop:2, Mobile: 3, iOS: 4, Android: 5, Off: 0
     */
    sandbox: 0,
  };
  var onPrebidErrorHandler = w.confiant.on_prebid_error;

  if (!confiantWrap) {
    throw new Error('Confiant failed to init prebid wrapper');
  }

  var isGoogleFrame = function(c) {
    return c.tagName === 'IFRAME' && c.id && c.id.indexOf('google_ads_iframe_') > -1;
  };
  var isSASAd = function(c) {
    return c.tagName === 'IFRAME' && c.id && c.id.indexOf('sas_') > -1;
  };

  var shouldSandbox = function() {
    var uaToRegexMap = {
      mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i,
      ios: /(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d)\_?(\d)?[\_]?(\d)?.+/i,
      android: /Android/i,
    };

    var sbStr = '' + config.sandbox;
    if (sbStr === '1') {
      // all environments
      return true;
    } else if (sbStr === '2') {
      // desktop
      return !navigator.userAgent.match(uaToRegexMap['mobile']);
    } else if (sbStr === '3') {
      // mobile
      return navigator.userAgent.match(uaToRegexMap['mobile']);
    } else if (sbStr === '4') {
      // ios only
      return navigator.userAgent.match(uaToRegexMap['ios']);
    } else if (sbStr === '5') {
      // android
      return navigator.userAgent.match(uaToRegexMap['android']);
    } else {
      return false;
    }
  };

  function appendChildOverwrite() {
    if (shouldSandbox()) {
      Node.prototype.appendChild = (function(original) {
        return function(child) {
          if ((isGoogleFrame(child) || isSASAd(child)) && shouldSandbox() && !child.getAttribute('sandbox')) {
            child.setAttribute('sandbox',
              'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
            child.setAttribute('data-forced-sandbox', true);
          }
          return original.call(this, child);
        };
      })(Node.prototype.appendChild);
    }
    return;
  }


  appendChildOverwrite();

  // similar to startsWith but pre-ECMA2015 compatible
  var inString = function(str, search, pos) {
    return str.substr && str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };

  // callback listener
  var callback = config.callback;

  var propertyId = config.propertyId;

  var sfCallback = function(event, messagePrefix) {
    var args = JSON.parse(atob(event.data.substr(messagePrefix.length)));
    callback.apply(this, args);
  };

  var isUsable = function(object) {
    var isEmpty = object == undefined && object == null;
    if (isEmpty) {
      return false;
    }
    if (Object.prototype.toString.call(object) === '[object Array]') {
      return object.length > 0;
    }
    return true;
  };

  var postMessageHandler = function(event) {
    if (isUsable(event.data)) {
      var communicationPrefix = 'comm' + propertyId;

      var callbackPrefix = 'cb' + propertyId;
      if (inString(event.data, callbackPrefix)) {
        sfCallback(event, callbackPrefix);
      }
    }
  };

  // this is only enabled when this is a prebid only integration
  // otherwise the GPT takes precedence
  if (config['prebid']) {
    // safe frame postMessage listener
    if (window.addEventListener) {
      window.top.addEventListener('message', postMessageHandler, false);
    } else {
      window.top.attachEvent('onmessage', postMessageHandler);
    }
  }

  var serializedCasprLayer = null;
  // override renderAd
  prebidRef.renderAd = function(doc, id) {
    var isAlreadyMonitored = false;

    try {
      isAlreadyMonitored = !!(doc && doc.defaultView.Caspr);
    } catch (e) {
      // if by accident this is a CORS frame
      // security exception might be thrown
    }


    if (doc && id && !isAlreadyMonitored) {
      try {
        // get pbjs bids
        var bids = [];
        var bidResponses = prebidRef.getBidResponses();
        var highestBids = prebidRef.getHighestCpmBids();
        var getBidResponsesForAdUnitCode;
        for (var slot in bidResponses) {
          bids = bids.concat(bidResponses[slot].bids);
          getBidResponsesForAdUnitCode = prebidRef.getBidResponsesForAdUnitCode(slot);
          for (bidcache in getBidResponsesForAdUnitCode) {
            bids = bids.concat(getBidResponsesForAdUnitCode.bids);
          }
        }
        bids = bids.concat(highestBids);

        // lookup ad by ad Id (avoid ES6 array functions)
        var bid;
        var i;
        for (i = 0; i < bids.length; i++) {
          if (bids[i].adId === id) {
            bid = bids[i];
            break;
          }
        }
        // Optional: list of bidders that don't need wrapping, array of strings, e.g.: ["bidder1", "bidder2"]
        var confiantExcludeBidders = config.prebidExcludeBidders || [];

        // check bidder exclusion (avoid ES6 array functions)
        var excludeBidder = false;
        if (bid) {
          for (i = 0; i < confiantExcludeBidders.length; i++) {
            if (bid.bidder === confiantExcludeBidders[i]) {
              excludeBidder = true;
              break;
            }
          }
        }

        if (bid && bid.ad && !excludeBidder) {
          // Neutralize document
          var docwrite = doc.write;
          var docclose = doc.close;
          doc.write = doc.close = function() {};
          // call renderAd with our neutralized doc.write
          window.confiant.renderAd(doc, id);
          // Restore document
          delete doc.write;
          delete doc.close;

          serializedCasprLayer = (function() {
            if (typeof getSerializedCaspr === 'undefined') {
              // for now both builds are supported v2(additional network call) and v3 (unified)
              return null;
            }
            return getSerializedCaspr(false, config);
          })();

          // do the actual ad serving and fall back on document.write if failure
          if (!confiantWrap(
            doc, bid, config.confiantCdn, config.propertyId, config.callback, serializedCasprLayer, config.devMode
          )) {
            doc.write(bid.ad);
            doc.close();
          }

          return;
        }
      } catch (e) {
        try {
          if (onPrebidErrorHandler) {
            onPrebidErrorHandler(e);
          }
        } catch (_) {}
        console.error(e);
      }
    }

    // if bid.ad is not defined or if any error occurs, call renderAd to serve the creative
    window.confiant.renderAd(doc, id);
  };
});

})();