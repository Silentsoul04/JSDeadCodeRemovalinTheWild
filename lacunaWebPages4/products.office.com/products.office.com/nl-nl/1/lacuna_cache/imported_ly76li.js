window.MSA=window.MSA||{};window.MSA.MeControl=window.MSA.MeControl||{};window.MSA.MeControl.Config={"ver":"10.19280.5","mkt":"nl-NL","ptn":"officeproducts","gfx":"https://mem.gfx.ms/scripts/me","dbg":false,"aad":true,"int":false,"pxy":false,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","remAcc":true,"main":"meBoot","wreply":null,"wrapperId":null,"cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))"};window.MeControl=window.MeControl||{};window.MeControl.Config={"ver":"10.19280.5","mkt":"nl-NL","ptn":"officeproducts","gfx":"https://mem.gfx.ms/scripts/me","dbg":false,"aad":true,"int":false,"pxy":false,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","remAcc":true,"main":"meBoot","wreply":null,"wrapperId":null,"cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))"};this.MeControl=this.MeControl||{},this.MeControl.WebInline=function(n){"use strict";var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=16,c=63,t=s();function u(){return t}function s(e){var t=0,n=e||function(){var e="";for(;e.length<a;)e+=r[Math.floor(Math.random()*r.length)];return e}();return{getValue:function(){var e=n+"."+t;return e.length>c&&(e=e.substring(0,c)+"!"),e},extend:function(){n=this.getValue(),t=0},increment:function(){t++}}}var f=window,l=function(){return f.location};var e=f.requestAnimationFrame?function(e){return f.requestAnimationFrame(e)}:function(e){return setTimeout(e)},d="mectrl",p="_",m=new RegExp("^"+d,"i");function v(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.join(p);return m.test(n)||(n=d+p+n),n}var g="MeControlError::";function h(e,t){void 0===t&&(t=!1);var n=new Error(""+g+e);return n.mcIsTimeout=t,n}var y=(Object.defineProperty(C.prototype,"defaultPrevented",{get:function(){return this._defaultPrevented},enumerable:!0,configurable:!0}),C.prototype.preventDefault=function(){this._defaultPrevented=!0},C);function C(e,t){this.type=e,this.detail=t,this._defaultPrevented=!1}var w=(b.prototype.addEventListener=function(e,t){e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(t)},b.prototype.removeEventListener=function(e,t){if(e in this._listeners){var n=this._listeners[e].indexOf(t);-1!==n&&this._listeners[e].splice(n,1)}},b.prototype.dispatchEvent=function(e){if(!(e.type in this._listeners))return!0;for(var t=this._listeners[e.type],n=new y(e.type,e.detail),r=0,o=t.length;r<o;r++)t[r].call(this,n);return!n.defaultPrevented},b);function b(){this._listeners={}}var S=f.MeControl=f.MeControl||{},E="msameid";n.id=N();try{var A=f.sessionStorage;A&&(n.id=A.getItem(E)||N(),A.setItem(E,n.id))}catch(e){}function N(){return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toLowerCase();function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var I,P=Object.assign||o;function U(){return I}function M(e){I=e}var O,x={};function _(e,t){e=e.toLowerCase(),x[e]=x[e]||{},P(x[e],t)}var L=Date.now?function(){return Date.now()}:function(){return+new Date},k=function(){return f.performance.now()},D=function(){return f.performance&&f.performance.getEntries?window.performance.getEntries():[]},R=[],j=/ContentUpdate|PageAction|TrackedScenario/,F="https://web.vortex.data.microsoft.com/collect/v1",V=!0,B=!1,J="complete"===document.readyState,q=[];function G(e){!(V=e)&&0<q.length&&X()}function W(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];R.push(e),R.sort(function(e,t){return e[2]-t[2]})}function H(e,t){var n=e.partA.name.split(".").pop();S.Config.telEvs&&-1!==S.Config.telEvs.indexOf(n)&&(q.push(e),V?(B||(B=!0,window.addEventListener("beforeunload",X,!0)),J&&(t||j.test(n))&&setTimeout(X,0)):X())}function X(){if(window.removeEventListener("beforeunload",X,!0),B=!1,0<q.length){if(!S.Config.isUT)(function(){for(var e=0;e<R.length;e++)if(R[e][1]())return R[e][0];return function(){}})()(q);q=[]}}function z(e){return e?e.replace(/([^?&]*)=([^&#]*)/g,"$1=**").replace(/#.*/,""):e}J||window.addEventListener("load",function(){J=!0,X()});var Q=N(),K=[],Y="None",Z={counts:"0-0"};function $(e){var t=u();return t.increment(),"ContentUpdate"===e.eventType&&e.content&&"Application"===e.content.source&&(Y=e.content.id),{cv:t.getValue(),impressionGuid:Q,pageName:Y,date:new Date,timestamp:k(),accounts:Z}}var ee=k(),te={};function ne(e,t){var n=z(l().href);return{metaTags:{authtype:t&&t.toString(),pgpart:S.Config.ptn},config:S.Config,url:n,accts:e}}function re(e,t,n){return{ver:"2.1",name:e,time:t.toISOString(),appId:"JS:MeControl",cV:n,ext:{javascript:{ver:"1.1",libVer:"4.2.3",domain:l().hostname,userConsent:!1},app:{env:S.Config.int?"Test":"Prod"}}}}function oe(e,t){te[e]=t,function(e){for(var t=[],n=[],r=0;r<K.length;r++)K[r][0].eventType===e?n.push(K[r]):t.push(K[r]);return K=t,n}(e).forEach(function(e){H(t(e[0],e[1]),e[0].isCritical)})}function ie(e){var t=function(e){var t=te[e.eventType];return t?t(e,$(e)):null}(e);t?H(t,e.isCritical):function(e){K.push([e,$(e)])}(e)}function ae(e){for(var t=0,n=e;t<n.length;t++){var r=n[t],o=[ue(r.partA),r.partB&&ue(r.partB,"-"),ue(r.partC,"*")].join("&").replace(/&&/g,"&");document.createElement("img").src=F+"/t.gif?"+o}}function ce(){return!0}function ue(r,o){return void 0===o&&(o=""),r?Object.getOwnPropertyNames(r).map(function(e){var t=r[e],n=""+o+e;switch(typeof t){case"object":return null!==t?ue(t,n+"-"):null;case"string":t="%27"+encodeURIComponent(t)+"%27";case"number":case"boolean":return n+"="+t}return null}).filter(function(e){return!!e}).join("&"):""}var se=!1;function fe(e){!function(){if(se)return;window.awa._registerSchemas([function(e,t){var n;return(n={name:e})[e]={part:"C",def:{fields:t}},n}("Ms.Webi.MeControl.PartnerApiCall",[de("partner","string",!0),de("controlVersion","string",!0),de("methodName","string",!0),de("parameters","string",!0)])]),se=!0}(),window.awa.vortexEvents.SendOrScheduleEvent(e.map(function(e){return function(e){return o(o({},e.partA),{data:o({baseData:e.partB&&o({},e.partB)},e.partC)})}(e)}))}function le(){return window.awa&&window.awa.vortexEvents&&window.awa.vortexEvents.SendOrScheduleEvent&&"function"==typeof window.awa.vortexEvents.SendOrScheduleEvent&&window.awa._registerSchemas&&"function"==typeof window.awa._registerSchemas||!1}function de(e,t,n){return{req:!!n||void 0,name:e,type:t}}var pe="Ms.Webi.ClientError";function me(e,t){var n;return{partA:re(pe,t.date,t.cv),partB:void 0,partC:{baseType:void 0,errorName:e.name,errorMessage:(n=e.details,n.replace(/\n/g,"\\n")),errorType:e.type,errorInfo:JSON.stringify(ne(t.accounts.counts,t.accounts.current)),severity:e.severity||2,wasDisplayed:e.displayed,pageName:t.pageName,impressionGuid:t.impressionGuid,market:S.Config.mkt}}}var ve="Ms.Webi.OutgoingRequest",ge="Ms.Qos.OutgoingServiceRequest";function he(e,t){var n=function(e){for(var t=D(),n=0,r=t;n<r.length;n++){var o=r[n];if(o.name===e||-1!==o.name.indexOf(e))return o}return}(e.url),r=Math.round(ye(n)||e.duration),o=function(e){if(e){var t=document.createElement("a");t.href=e;for(var n=t.pathname.split("/"),r=n.length-1;0<=r;r--)if(n[r])return n[r]}return}(n?n.name:e.url)||e.serviceOperation;return{partA:re(ve,t.date,t.cv),partB:{operationName:o,dependencyOperationName:e.serviceOperation,dependencyName:e.service,latencyMs:r,succeeded:e.success,targetUri:z(e.url)},partC:{baseType:ge,message:e.message,pageName:t.pageName,impressionGuid:t.impressionGuid,market:S.Config.mkt,customData:JSON.stringify(P({},{computedDuration:e.duration||-1,perfDuration:ye(n)||-1},ne(t.accounts.counts,t.accounts.current)))}}}function ye(e){if(e)switch(e.entryType){case"navigation":return e.responseEnd-e.startTime;case"resource":default:return e.duration}}var Ce="Ms.Webi.MeControl.TrackedScenario";function we(e,t){return{partA:re(Ce,t.date,t.cv),partB:void 0,partC:{baseType:void 0,partner:S.Config.ptn,controlVersion:S.Config.ver,market:S.Config.mkt,scenario:e.scenario,action:e.action,previousAction:e.previousAction,success:e.success,durationMs:e.durationMs,details:e.details}}}function be(e){W(ae,ce,10),W(fe,le,1),G(e),oe("ClientError",me),oe("OutgoingRequest",he),oe("TrackedScenario",we)}function Se(e){var t,n;if("ContentUpdate"===(n=e).eventType&&"Application"===n.content.source&&"Initial Collapsed"===n.content.id||"PageAction"===(t=e).eventType&&t.content&&("Sign Out"==t.content.id||"View Account"==t.content.id)){var r=U();if(r){var o=new y("telemetry",{data:{event:e}});r.syntheticEventTarget.dispatchEvent(o)}}ie(e)}function Ee(){var t=k();D().filter(function(e){return function(e){var t=document.createElement("a");t.href=e;var n=t.hostname;return Ae.test(n)}(e.name)}).forEach(function(e){return Se({eventType:"OutgoingRequest",serviceOperation:"LoadResource",service:"MeControl",url:e.name,success:!0,duration:t-e.startTime})})}be(!(!S.Config||"iframeBootCore"===S.Config.main));var Ae=/^(?:mem\.gfx\.ms|controls\.account\.microsoft|amcdn\.ms(?:ft)?auth\.net)/i;var Ne=setTimeout;function Te(){}function Ie(e){if(!(this instanceof Ie))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],_e(e,this)}function Pe(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,Ie._immediateFn(function(){var e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void Me(r.promise,e)}Ue(r.promise,t)}else(1===n._state?Ue:Me)(r.promise,n._value)})):n._deferreds.push(r)}function Ue(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof Ie)return t._state=3,t._value=e,void Oe(t);if("function"==typeof n)return void _e(function(e,t){return function(){e.apply(t,arguments)}}(n,e),t)}t._state=1,t._value=e,Oe(t)}catch(e){Me(t,e)}}function Me(e,t){e._state=2,e._value=t,Oe(e)}function Oe(e){2===e._state&&0===e._deferreds.length&&Ie._immediateFn(function(){e._handled||Ie._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)Pe(e,e._deferreds[t]);e._deferreds=null}function xe(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function _e(e,t){var n=!1;try{e(function(e){n||(n=!0,Ue(t,e))},function(e){n||(n=!0,Me(t,e))})}catch(e){if(n)return;n=!0,Me(t,e)}}function Le(r,o){return new Ie(function(e,t){var n=setTimeout(function(){t(h("Promise timed out after "+o+"ms.",!0))},o);r.then(e,t).finally(function(){clearTimeout(n)})})}Ie.prototype.catch=function(e){return this.then(null,e)},Ie.prototype.then=function(e,t){var n=new this.constructor(Te);return Pe(this,new xe(e,t,n)),n},Ie.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},Ie.all=function(t){return new Ie(function(r,o){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return r([]);var a=i.length;function c(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){c(t,e)},o)}i[t]=e,0==--a&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)c(e,i[e])})},Ie.resolve=function(t){return t&&"object"==typeof t&&t.constructor===Ie?t:new Ie(function(e){e(t)})},Ie.reject=function(n){return new Ie(function(e,t){t(n)})},Ie.race=function(o){return new Ie(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},Ie._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){Ne(e,0)},Ie._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},void 0!==f.Promise&&-1!==f.Promise.toString().indexOf("[native code]")&&(Ie._immediateFn=function(e){return f.Promise.resolve().then(e)}),Ie._unhandledRejectionFn=function(e){Se({eventType:"ClientError",isCritical:!0,name:e.message,type:"UnhandledPromiseRejection",details:e.stack,displayed:!1,severity:e.mcIsTimeout?3:2})};var ke=[];var De={};function Re(e){return De[e]}function je(e,t,n){De[e]={id:e,bundlePromise:t,exports:n}}var Fe,Ve={"@mecontrol/web-inline":"meInline","@mecontrol/web-boot":"meBoot","@mecontrol/web-core":"meCore"},Be=1e4,Je=null;function qe(e){try{e in Ve&&(e=Ve[e]),Ge();var t=Re(e);if(t)return t.bundlePromise;var n=function(d){return new Ie(function(a,c){var u=k(),s=function(e){var t=S.Config;null==Je&&""!=S.Config.cdnRegex&&(Fe=new RegExp(S.Config.cdnRegex),Je=function(e){var t=document.getElementsByTagName("script");if(t)for(var n=Array.prototype.slice.call(t),r=0;r<n.length;r++){var o=e.exec(n[r].src);if(o)return o[0]+"/scripts/me"}return}(Fe));return(Je||t.gfx)+"/MeControl/"+t.ver+"/"+t.mkt+"/"+e+(t.dbg?"":".min")+".js"}(d),e=document.getElementsByTagName("head")[0],f=document.createElement("script");f.async=!0,f.type="text/javascript",f.charset="UTF-8",f.src=s;var l=setTimeout(function(){return t("timeout")},Be);function t(e){clearTimeout(l),f&&(f.onerror=f.onload=void 0,f=void 0);var n=k()-u;Ge();var t=Re(d),r=t&&t.exports;if(r)Le(r,Be).then(function(e){We(d,n,s,!1),a(e)}).catch(function(e){var t=e.mcIsTimeout?"Bundle download timed out":"Bundle failed to load";We(d,n,s,!0,t),c(h(t+": "+d+" ("+s+"). Inner error: "+e.message,e.mcIsTimeout))});else{var o="timeout"===e,i=o?"Bundle timed out with no exports":"Bundle failed to load exports";We(d,n,s,!0,i),c(h(i+": "+d+" ("+s+")",o))}}f.onerror=f.onload=t,e.appendChild(f)})}(e);return je(e,n),n}catch(e){return Ie.reject(e)}}function Ge(){for(var e=function(){var t=ke.pop();if(t){var n={},e=Ie.all(t.deps.map(function(e){return"exports"===e?n:qe(e)})).then(function(e){t.factory.apply(t,e)}).then(function(){return n}),r=Re(t.id);r?r.exports=e:je(t.id,e,e)}};ke.length;)e()}function We(e,t,n,r,o){Se({eventType:"OutgoingRequest",serviceOperation:"DownloadScript",service:"MeControl",url:n,success:!r,duration:t,message:o})}function He(){var i,a=[],c=0;function u(e){var t=e.name;i&&T(i,t)&&i[t].apply(i,e.params)}return{setComponent:function(e){i=e;var t=a;a=[];for(var n=0;n<t.length;n++)u(t[n])},handleCall:function(r,o){return void 0===o&&(o=!1),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={name:r,params:e};i?u(n):a.splice(o?c++:a.length,0,n)}}}}var Xe=He(),ze=Xe.setComponent,Qe=function(){return ze},Ke={setActiveAccount:Ye("setActiveAccount"),setCommands:Ye("setCommands"),setAccountPicture:Ye("setAccountPicture"),setProfilePicture:Ye("setProfilePicture"),refreshAccountPicture:Ye("refreshAccountPicture"),refreshProfilePicture:Ye("refreshProfilePicture"),setTheme:Ye("setTheme"),setHeaderTheme:Ye("setHeaderTheme"),setDisplayMode:Ye("setDisplayMode"),loadPresenceConfig:Ye("loadPresenceConfig"),setPresence:Ye("setPresence"),addEventListener:Ye("addEventListener"),removeEventListener:Ye("removeEventListener")};function Ye(n){var r=Xe.handleCall(n);return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Se({eventType:"PartnerApiCall",method:n,params:i(e)}),r.apply(void 0,e)}}var Ze="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 48px; font-family: 'Segoe UI'; font-size: 12.4px; color: rgb(80,80,80); padding: 0 10px;",$e=0;function et(t,n){$e=k();function r(e){Se({eventType:"TrackedScenario",scenario:"Load",previousAction:"START",action:"END",success:e,durationMs:tt(),details:n})}return qe(S.Config.main).then(function(e){return e.init(t,Qe())}).then(function(){r(!0)},function(e){throw nt(t),r(!1),e})}function tt(){return k()-$e}function nt(e){if(!e)throw h("No options object given before showHeaderNoJs was called");var t=function(e){var t,n=e.currentAccount&&"signedIn"==e.currentAccount.authenticatedState,r=n?e.primaryUXConfig.signOutStr:e.primaryUXConfig.signInStr,o=null,i=e.authProviderConfig;switch(i.type){case"partnerManaged":o=n?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:i.signInExperienceTypes})};break;case"adalJsWithMsaFed":case"adalJsAadOnly":o=n?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"v1BackCompat":var a=i.rpData,c=n?"signOutUrl":"signInUrl",u=a.aadInfo&&a.aadInfo[c],s=a.msaInfo&&a.msaInfo[c];"aad"===a.preferredIdp&&u?t=u:"msa"===a.preferredIdp&&s?t=s:u?t=u:s&&(t=s);break;default:var f=n?i.appSignOutUrl:i.appSignInUrl;t="function"==typeof f?f({currentAccount:e.currentAccount}):f}return{str:r,href:t,onClick:o}}(e),n=document.createTextNode(t.str||""),r=document.createElement("a");r.href=t.href||"#",r.style.cssText=Ze,r.onclick=t.onClick,r.appendChild(n);var o=document.createElement("div");o.className="msame_Header",o.appendChild(r);var i=document.createElement("div");i.appendChild(o);var a=document.getElementById(e.containerId);a&&(a.innerHTML="",a.appendChild(i))}function rt(e){return ot(e.currentPresence)&&function(e){if(e){for(var t=0;t<e.length;t++)if(!ot(e[t]))return!1;return!0}return!1}(e.presenceList)}function ot(e){return!!e&&(0<e.key.length&&null!=e.key&&null!=e.key&&0<e.presenceString.length&&null!=e.presenceString&&null!=e.presenceString&&0<e.imageUrl.length&&null!=e.imageUrl&&null!=e.imageUrl)}function it(e){if(!e)throw h("Options must be an object. Received "+typeof e+".");if(!(e=o({},e)).authProviderConfig)throw h("options.authProviderConfig not correctly defined. Received "+e.authProviderConfig+".");e.presenceConfig&&rt(e.presenceConfig);var t=e.primaryUXConfig=e.primaryUXConfig||{};e.events=e.events||{},e.primaryUXConfig.signInStr=t.signInStr||"Sign in",e.primaryUXConfig.signOutStr=t.signOutStr||"Sign out";var n=["compressed"];e.primaryUXConfig.displayModes=t.displayModes&&t.displayModes.filter(function(e){return-1!=n.indexOf(e.type)})||[],e.appContextConfig&&e.appContextConfig.commands&&(e.appContextConfig.commands=e.appContextConfig.commands.slice(0,5));var r=e;return r.syntheticEventTarget=new w,function(e){var t;if(e&&e.events)for(t in e.events)if(T(e.events,t)){var n=e.events[t];n&&e.syntheticEventTarget.addEventListener(t.toLowerCase(),n)}}(r),M(r),r}function at(e,t,n){var r,o;o="function"==typeof t?(r=[],t):(r=t,n),function(e,t,n){ke.push({id:e,deps:t,factory:n})}(e,r,o)}function ct(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return P.apply(void 0,i([S],e))}function ut(e){return{apiGeneration:"GEN2",containerId:e.containerId,appContextConfig:{commands:st(e.extensibleLinks)},currentAccount:e.userData?dt(e.userData):void 0,events:e.events?ft(e.events):void 0,authProviderConfig:function(e){return{type:"v1BackCompat",rpData:e}}(e.rpData)}}function st(e){return e&&null!=e.map?e.map(function(t,e){return{type:"link",id:t.id?t.id:v("command_id_",e),text:t.label?t.label:t.string?t.string:"Label "+e,ariaLabel:void 0,url:t.url,openInNewTab:!!t.openInNewTab,onClick:t.onClick?function(e){t.onClick()&&e.preventDefault()}:void 0}}):[]}function ft(t){if(t){var e={};return t.onSignIn&&(e.beforeSignIn=function(e){e.preventDefault(),t.onSignIn()}),t.onBeforeSignOut&&(e.beforeSignOutFromApp=function(e){t.onBeforeSignOut(function(e){return{idp:function(e){switch(e){case"msa":return"msa";case"aad":return"aad";case"msaFed":return"msaFed"}}(e.type),authenticatedState:function(e){switch(e){case"notSignedIn":return"3";case"signedIn":return"1";case"signedInIDPOnly":return"2"}}(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,nickName:e.memberName,tileUrl:e.pictureUrl}}(e.detail.currentAccount))}),t.onEventLog&&(e.controlExpanded=function(){t.onEventLog("DropdownOpen",{type:"bici",ts:L(),uaid:n.id})},e.afterSignOutAndForgetFromIdp=function(e){t.onEventLog("RemoveUser",{userCount:0,idp:e.detail.account.type,currentUser:e.detail.account.memberName})},e.beforeSignIn=function(){t.onEventLog("SignIn",{userCount:0,idp:"",currentUser:""})},e.beforeSwitch=function(e){t.onEventLog("SwitchUser",{userCount:1,idp:1===e.detail.signInType?"Converged":4===e.detail.signInType?"Aad":"Msa",currentUser:e.detail.currentAccount.memberName})},e.afterGetRememberedAccounts=function(e){t.onEventLog("AccountListReady",{duration:0,count:e.detail.rememberedAccounts.length})},e.telemetry=function(e){if(e.detail.data&&e.detail.data.event)if(e.detail.data.event.content)try{"View Account"==e.detail.data.event.content.id&&t.onEventLog("ViewAccount",{userCount:1,currentUser:"",idp:""}),"Sign Out"==e.detail.data.event.content.id&&t.onEventLog("SignOutAll",{userCount:0,currentUser:""})}catch(e){}else e.detail.data.event.pageName&&"Initial Collapsed"==e.detail.data.event.pageName&&(t.onEventLog("HeaderReady",{duration:0}),t.onEventLog("DropdownReady",{duration:0}))}),e}}function lt(e){if(!e||!e.idp)return!1;switch(e.idp){case"aad":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e);case"msa":case"msaFed":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e)}}function dt(e){if(lt(e))switch(e.idp){case"aad":return function(e){return{type:"aad",authenticatedState:pt(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,profile:mt(e)}}(e);case"msa":return function(e){return{type:"msa",authenticatedState:pt(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,pictureUrl:e.tileUrl,cid:e.cid,profile:mt(e)}}(e);case"msaFed":return function(e){return{type:"msaFed",authenticatedState:pt(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,cid:e.cid,profile:mt(e)}}(e)}}function pt(e){switch(e.toString()){case"3":return"notSignedIn";case"1":return"signedIn";case"2":return"signedInIDPOnly";default:return"notSignedIn"}}function mt(e){return e.nickName&&""!==e.nickName.trim()?{profileName:e.nickName||"",profilePictureUrl:e.tileUrl||""}:void 0}f.MSA=f.MSA||{};var vt=f.MSA.MeControl=f.MSA.MeControl||{};var gt=He(),ht=Qe();var yt,Ct,wt,bt={setActiveUser:St("setActiveUser"),setExtensibleLinks:St("setExtensibleLinks"),refreshUserPicture:St("refreshUserPicture"),setUserPicture:St("setUserPicture"),setMobileState:St("setMobileState"),openCloseDropdown:St("openCloseDropdown")};function St(n){var r=gt.handleCall(n);return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Se({eventType:"PartnerApiCall",method:"V1:"+n,params:i(e)}),r.apply(void 0,e)}}ze=function(e){ht(e);var t=function(n){return{setActiveUser:function(e){var t=dt(e);t&&n.setActiveAccount(t)},setExtensibleLinks:function(e){n.setCommands(st(e))},refreshUserPicture:function(){n.refreshAccountPicture()},setUserPicture:function(e){n.setProfilePicture(e)},setMobileState:function(e){var t;switch(e){case-1:t="auto";break;case 0:case 2:t="standard";break;case 1:t="compressed";break;default:t="auto"}n.setDisplayMode(t)},openCloseDropdown:function(e){}}}(e);gt.setComponent(t)},yt=Ke,Ct=function(e){Ee(),Se({eventType:"PartnerApiCall",method:"load",params:e});try{et(it(e),"load")}catch(e){return!1}return!0},wt=function(n){return new Ie(function(e,t){Ee(),Se({eventType:"PartnerApiCall",method:"loadAsync",params:n}),e(et(it(n),"loadAsync"))})},f.MeControlDefine=at,f.MeControlImport=qe,ct({API:yt,Loader:{load:Ct,loadAsync:wt},Config:S.Config||{}},{Strings:{addStrings:_}}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];P.apply(void 0,i([vt],e))}({API:bt,Loader:{load:function(e){if(Ee(),Se({eventType:"PartnerApiCall",method:"loadV1",params:e}),!e)return!1;if(!e.rpData)return!1;try{et(it(ut(e)),"loadV1")}catch(e){return!1}return!0}},IDP:{AAD:"aad",MSA:"msa"},AccountType:{AAD:"aad",MSA:"msa",MSA_FED:"msaFed"},AuthState:{SignedIn:1,SignedInIdp:2,NotSignedIn:3},Config:vt.Config||{}});var Et=f.onMeControlReadyToLoad;return setTimeout(function(){return Et&&Et()},0),n.meImport=qe,n.getStartTime=function(){return $e},n.getTimeSinceStart=tt,n.showHeaderNoJs=nt,n.logTelemetryEvent=Se,n.extendMe=ct,n.Promise=Ie,n.timeout=Le,n.setUpTelemetry=be,n.getPageTags=ne,n.getTimeSince=function(e){return e-ee},n.createPartA=re,n.setEventCreator=oe,n.fireEvent=ie,n.updateMoment=function(e,t){var n=e?1:0,r=t-n;Z.counts=n+"-"+r,Z.current=e},n.addEventWriter=W,n.writeEvent=H,n.batchEvents=G,n.vortexEndpoint=F,n.scrubUrl=z,n.getContentJson=function(e){var t={id:e.id,cT:e.type,sN:e.slot,cS:e.source};return JSON.stringify(t,function(e,t){return null==t?void 0:t})},n.getCv=u,n.setCv=function(e){t=s(e)},n.createCV=s,n.w=f,n.getPageLocation=l,n.loadCss=function(e){var t=document,n=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.type="text/css",n.appendChild(r),r.appendChild(document.createTextNode(e))},n.requestAnimationFrame=e,n.createId=v,n.createError=h,n.toJsonable=function(e){var t={},n=e;return Object.getOwnPropertyNames(e).forEach(function(e){return t[e]=n[e]}),t},n.SyntheticEvent=y,n.SyntheticEventTarget=w,n.ME=S,n.guid=N,n.assertNever=function(e,t){throw h("Never assertion failed: "+t)},n.hasOwn=T,n.assign=P,n.getOptions=U,n.setOptions=M,n.setCurrentLang=function(e){O=e.toLowerCase()},n.addStrings=_,n.getString=function(e){var t=(O||S.Config.mkt||"en-US").toLowerCase();return x[t]&&x[t][e]||"ERROR: "+e},n.getTime=L,n.perfNow=k,n.getPerfEntries=D,n.MEV1=vt,n.mapV1ConfigToV2Config=ut,n.mapV1ExtensibleLinksToV2Commands=st,n.mapV1EventsToV2Events=ft,n.v1UserDataIsUseable=lt,n.mapV1UserDataToV2Account=dt,n}({}),MeControlDefine("meInline",["exports"],function(e){var t=MeControl.WebInline;t.assign(e,t)});
//# sourceMappingURL=meInlineBackCompat.min.js.map
