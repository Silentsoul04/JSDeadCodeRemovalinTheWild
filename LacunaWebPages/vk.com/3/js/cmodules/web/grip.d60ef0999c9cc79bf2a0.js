!function(e){function t(t){for(var a,o,s=t[0],d=t[1],l=t[2],c=0,h=[];c<s.length;c++)o=s[c],n[o]&&h.push(n[o][0]),n[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(u&&u(t);h.length;)h.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var d=r[s];0!==n[d]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={"web/grip":0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/js/cmodules/";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=d;i.push([105,"bundles/common"]),r()}({105:function(e,t,r){e.exports=r("Bi+v")},"Bi+v":function(e,t,r){"use strict";r.r(t);r("a1Th"),r("Btvt"),r("Y9lz"),r("SRfc"),r("Vd3H");class a{constructor(e){this.options=a.extend(e,{detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],excludeDoNotTrack:!0}),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map}static extend(e,t){if(null==e)return t;for(var r in e)null!=e[r]&&t[r]!==e[r]&&(t[r]=e[r]);return t}get(e){var t=this,r={data:[],addPreprocessedComponent(e){var a=e.value;"function"==typeof t.options.preprocessor&&(a=t.options.preprocessor(e.key,a)),r.data.push({key:e.key,value:a})}};r=this.userAgentKey(r),r=this.languageKey(r),r=this.colorDepthKey(r),r=this.deviceMemoryKey(r),r=this.pixelRatioKey(r),r=this.hardwareConcurrencyKey(r),r=this.screenResolutionKey(r),r=this.availableScreenResolutionKey(r),r=this.timezoneOffsetKey(r),r=this.sessionStorageKey(r),r=this.localStorageKey(r),r=this.indexedDbKey(r),r=this.addBehaviorKey(r),r=this.openDatabaseKey(r),r=this.cpuClassKey(r),r=this.platformKey(r),r=this.doNotTrackKey(r),r=this.pluginsKey(r),r=this.canvasKey(r),r=this.webglKey(r),r=this.webglVendorAndRendererKey(r),r=this.adBlockKey(r),r=this.hasLiedLanguagesKey(r),r=this.hasLiedResolutionKey(r);try{r=this.hasLiedOsKey(r),r=this.hasLiedBrowserKey(r)}catch(e){}r=this.touchSupportKey(r),r=this.customEntropyFunction(r),r=this.isJavaEnabled(r),r=this.getMimeTypes(r),r=this.wheelEvent(r),r=this.boundingClientRect(r),r=this.has3d(r),r=this.silverlight(r);var n=[];return t.each(r.data,e=>{var t=e.value;t&&"function"==typeof t.join&&(t=t.join(";")),n.push(t)}),e(a.x64hash128(n.join("~~~"),31),r.data)}customEntropyFunction(e){return"function"==typeof this.options.customFunction&&e.addPreprocessedComponent({key:"custom",value:this.options.customFunction()}),e}userAgentKey(e){return this.options.excludeUserAgent||e.addPreprocessedComponent({key:"user_agent",value:a.getUserAgent()}),e}static getUserAgent(){return navigator.userAgent}languageKey(e){return this.options.excludeLanguage||e.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e}colorDepthKey(e){return this.options.excludeColorDepth||e.addPreprocessedComponent({key:"color_depth",value:window.screen.colorDepth||-1}),e}deviceMemoryKey(e){return this.options.excludeDeviceMemory||e.addPreprocessedComponent({key:"device_memory",value:a.getDeviceMemory()}),e}static getDeviceMemory(){return navigator.deviceMemory||-1}pixelRatioKey(e){return this.options.excludePixelRatio||e.addPreprocessedComponent({key:"pixel_ratio",value:a.getPixelRatio()}),e}static getPixelRatio(){return window.devicePixelRatio||""}screenResolutionKey(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)}getScreenResolution(e){var t;return t=this.options.detectScreenOrientation&&window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height],e.addPreprocessedComponent({key:"resolution",value:t}),e}availableScreenResolutionKey(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)}getAvailableScreenResolution(e){var t;return window.screen.availWidth&&window.screen.availHeight&&(t=this.options.detectScreenOrientation?window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:[window.screen.availHeight,window.screen.availWidth]),void 0!==t&&e.addPreprocessedComponent({key:"available_resolution",value:t}),e}timezoneOffsetKey(e){return this.options.excludeTimezoneOffset||e.addPreprocessedComponent({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e}sessionStorageKey(e){return!this.options.excludeSessionStorage&&a.hasSessionStorage()&&e.addPreprocessedComponent({key:"session_storage",value:1}),e}localStorageKey(e){return!this.options.excludeSessionStorage&&a.hasLocalStorage()&&e.addPreprocessedComponent({key:"local_storage",value:1}),e}indexedDbKey(e){return!this.options.excludeIndexedDB&&a.hasIndexedDB()&&e.addPreprocessedComponent({key:"indexed_db",value:1}),e}addBehaviorKey(e){return!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior&&e.addPreprocessedComponent({key:"add_behavior",value:1}),e}openDatabaseKey(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.addPreprocessedComponent({key:"open_database",value:1}),e}cpuClassKey(e){return this.options.excludeCpuClass||e.addPreprocessedComponent({key:"cpu_class",value:a.getNavigatorCpuClass()}),e}platformKey(e){return this.options.excludePlatform||e.addPreprocessedComponent({key:"navigator_platform",value:a.getNavigatorPlatform()}),e}doNotTrackKey(e){return this.options.excludeDoNotTrack||e.addPreprocessedComponent({key:"do_not_track",value:a.getDoNotTrack()}),e}canvasKey(e){return!this.options.excludeCanvas&&a.isCanvasSupported()&&e.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),e}webglKey(e){return!this.options.excludeWebGL&&a.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),e}webglVendorAndRendererKey(e){return!this.options.excludeWebGLVendorAndRenderer&&a.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl_vendor",value:a.getWebglVendorAndRenderer()}),e}adBlockKey(e){return this.options.excludeAdBlock||e.addPreprocessedComponent({key:"adblock",value:a.getAdBlock()}),e}hasLiedLanguagesKey(e){return this.options.excludeHasLiedLanguages||e.addPreprocessedComponent({key:"has_lied_languages",value:a.getHasLiedLanguages()}),e}hasLiedResolutionKey(e){return this.options.excludeHasLiedResolution||e.addPreprocessedComponent({key:"has_lied_resolution",value:a.getHasLiedResolution()}),e}hasLiedOsKey(e){return this.options.excludeHasLiedOs||e.addPreprocessedComponent({key:"has_lied_os",value:a.getHasLiedOs()}),e}hasLiedBrowserKey(e){return this.options.excludeHasLiedBrowser||e.addPreprocessedComponent({key:"has_lied_browser",value:a.getHasLiedBrowser()}),e}pluginsKey(e){return this.options.excludePlugins||(a.isIE()?this.options.excludeIEPlugins||e.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):e.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()})),e}getRegularPlugins(){var e=[];if(navigator.plugins)for(var t=0,r=navigator.plugins.length;t<r;t++)navigator.plugins[t]&&e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort((e,t)=>e.name>t.name?1:e.name<t.name?-1:0)),this.map(e,function(e){var t=this.map(e,e=>[e.type,e.suffixes].join("~")).join(",");return[e.name,e.description,t].join("::")},this)}getIEPlugins(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){e=this.map(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],e=>{try{return new window.ActiveXObject(e),e}catch(e){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e}pluginsShouldBeSorted(){for(var e=!1,t=0,r=this.options.sortPluginsFor.length;t<r;t++){var a=this.options.sortPluginsFor[t];if(navigator.userAgent.match(a)){e=!0;break}}return e}touchSupportKey(e){return this.options.excludeTouchSupport||e.addPreprocessedComponent({key:"touch_support",value:a.getTouchSupport()}),e}hardwareConcurrencyKey(e){return this.options.excludeHardwareConcurrency||e.addPreprocessedComponent({key:"hardware_concurrency",value:a.getHardwareConcurrency()}),e}static hasSessionStorage(){try{return!!window.sessionStorage}catch(e){return!0}}static hasLocalStorage(){try{return!!window.localStorage}catch(e){return!0}}static hasIndexedDB(){try{return!!window.indexedDB}catch(e){return!0}}static getHardwareConcurrency(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"}static getNavigatorCpuClass(){return navigator.cpuClass?navigator.cpuClass:"unknown"}static getNavigatorPlatform(){return navigator.platform?navigator.platform:"unknown"}static getDoNotTrack(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"}static getTouchSupport(){var e=0,t=!1;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){}return[e,t,"ontouchstart"in window]}getCanvasFp(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var r=t.getContext("2d");return r.rect(0,0,10,10),r.rect(2,2,6,6),e.push(`canvas winding:${!1===r.isPointInPath(5,5,"evenodd")?"yes":"no"}`),r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",this.options.dontUseFakeFontInCanvas?r.font="11pt Arial":r.font="11pt no-real-font-123",r.fillText("Cwm fjordbank glyphs vext quiz",2,15),r.fillStyle="rgba(102, 204, 0, 0.2)",r.font="18pt Arial",r.fillText("Cwm fjordbank glyphs vext quiz",4,45),r.globalCompositeOperation="multiply",r.fillStyle="rgb(255,0,255)",r.beginPath(),r.arc(50,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(0,255,255)",r.beginPath(),r.arc(100,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,255,0)",r.beginPath(),r.arc(75,100,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,0,255)",r.arc(75,75,75,0,2*Math.PI,!0),r.arc(75,75,25,0,2*Math.PI,!0),r.fill("evenodd"),t.toDataURL&&e.push(`canvas fp:${t.toDataURL()}`),e.join("~")}getWebglFp(){var e,t=t=>(e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),`[${t[0]}, ${t[1]}]`);if(!(e=a.getWebglCanvas()))return null;var r=[],n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);var i=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),n.itemSize=3,n.numItems=3;var o=e.createProgram(),s=e.createShader(e.VERTEX_SHADER);e.shaderSource(s,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),e.compileShader(s);var d=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(d,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),e.compileShader(d),e.attachShader(o,s),e.attachShader(o,d),e.linkProgram(o),e.useProgram(o),o.vertexPosAttrib=e.getAttribLocation(o,"attrVertex"),o.offsetUniform=e.getUniformLocation(o,"uniformOffset"),e.enableVertexAttribArray(o.vertexPosArray),e.vertexAttribPointer(o.vertexPosAttrib,n.itemSize,e.FLOAT,!1,0,0),e.uniform2f(o.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,n.numItems);try{r.push(e.canvas.toDataURL())}catch(e){}r.push(`extensions:${(e.getSupportedExtensions()||[]).join(";")}`),r.push(`aliased line width range:${t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))}`),r.push(`aliased point size range:${t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))}`),r.push(`alpha bits:${e.getParameter(e.ALPHA_BITS)}`),r.push(`antialiasing:${e.getContextAttributes().antialias?"yes":"no"}`),r.push(`blue bits:${e.getParameter(e.BLUE_BITS)}`),r.push(`depth bits:${e.getParameter(e.DEPTH_BITS)}`),r.push(`green bits:${e.getParameter(e.GREEN_BITS)}`),r.push(`max anisotropy:${(e=>{var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var r=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===r&&(r=2),r}return null})(e)}`),r.push(`max combined texture image units:${e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)}`),r.push(`max cube map texture size:${e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)}`),r.push(`max fragment uniform vectors:${e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)}`),r.push(`max render buffer size:${e.getParameter(e.MAX_RENDERBUFFER_SIZE)}`),r.push(`max texture image units:${e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}`),r.push(`max texture size:${e.getParameter(e.MAX_TEXTURE_SIZE)}`),r.push(`max varying vectors:${e.getParameter(e.MAX_VARYING_VECTORS)}`),r.push(`max vertex attribs:${e.getParameter(e.MAX_VERTEX_ATTRIBS)}`),r.push(`max vertex texture image units:${e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}`),r.push(`max vertex uniform vectors:${e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)}`),r.push(`max viewport dims:${t(e.getParameter(e.MAX_VIEWPORT_DIMS))}`),r.push(`red bits:${e.getParameter(e.RED_BITS)}`),r.push(`renderer:${e.getParameter(e.RENDERER)}`),r.push(`shading language version:${e.getParameter(e.SHADING_LANGUAGE_VERSION)}`),r.push(`stencil bits:${e.getParameter(e.STENCIL_BITS)}`),r.push(`vendor:${e.getParameter(e.VENDOR)}`),r.push(`version:${e.getParameter(e.VERSION)}`);try{var l=e.getExtension("WEBGL_debug_renderer_info");l&&(r.push(`unmasked vendor:${e.getParameter(l.UNMASKED_VENDOR_WEBGL)}`),r.push(`unmasked renderer:${e.getParameter(l.UNMASKED_RENDERER_WEBGL)}`))}catch(e){}return e.getShaderPrecisionFormat?(r.push(`hf p:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision}`),r.push(`hf p rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin}`),r.push(`hf p rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax}`),r.push(`mf p:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision}`),r.push(`mf p rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin}`),r.push(`mf p rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax}`),r.push(`lf p:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision}`),r.push(`lf p rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin}`),r.push(`lf p rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax}`),r.push(`hf p:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision}`),r.push(`hf p rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin}`),r.push(`hf p rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax}`),r.push(`mf p:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision}`),r.push(`mf p rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin}`),r.push(`mf p rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax}`),r.push(`lf p:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision}`),r.push(`lf p rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin}`),r.push(`lf p rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax}`),r.push(`hi p:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision}`),r.push(`hi p rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin}`),r.push(`hi p rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax}`),r.push(`mi p:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision}`),r.push(`mi p rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin}`),r.push(`mi p rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax}`),r.push(`low int p:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision}`),r.push(`low int p rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin}`),r.push(`low int p rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax}`),r.push(`hi p:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision}`),r.push(`hi p rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin}`),r.push(`hi p rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax}`),r.push(`mi p:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision}`),r.push(`mi p rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin}`),r.push(`mi p rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax}`),r.push(`low int p:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision}`),r.push(`low int p rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin}`),r.push(`low int p rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax}`),r.join("~")):r.join("~")}static getWebglVendorAndRenderer(){try{var e=a.getWebglCanvas(),t=e.getExtension("WEBGL_debug_renderer_info");return`${e.getParameter(t.UNMASKED_VENDOR_WEBGL)}~${e.getParameter(t.UNMASKED_RENDERER_WEBGL)}`}catch(e){return null}}static getAdBlock(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t}static getHasLiedLanguages(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1}static getHasLiedResolution(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight}static getHasLiedOs(){var e,t=navigator.userAgent.toLowerCase(),r=navigator.oscpu,a=navigator.platform.toLowerCase();if(e=t.includes("windows phone")?"Windows Phone":t.includes("win")?"Windows":t.includes("android")?"Android":t.includes("linux")?"Linux":t.includes("iphone")||t.includes("ipad")?"iOS":t.includes("mac")?"Mac":"Other",("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if(void 0!==r){if((r=r.toLowerCase()).includes("win")&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(r.includes("linux")&&"Linux"!==e&&"Android"!==e)return!0;if(r.includes("mac")&&"Mac"!==e&&"iOS"!==e)return!0;if((!r.includes("win")&&!r.includes("linux")&&!r.includes("mac"))!=("Other"===e))return!0}return!(!a.includes("win")||"Windows"===e||"Windows Phone"===e)||(!(!(a.includes("linux")||a.includes("android")||a.includes("pike"))||"Linux"===e||"Android"===e)||(!(!(a.includes("mac")||a.includes("ipad")||a.includes("ipod")||a.includes("iphone"))||"Mac"===e||"iOS"===e)||((!a.includes("win")&&!a.includes("linux")&&!a.includes("mac"))!=("Other"===e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))}static getHasLiedBrowser(){var e,t=navigator.userAgent.toLowerCase(),r=navigator.productSub;if(("Chrome"===(e=t.includes("firefox")?"Firefox":t.includes("opera")||t.includes("opr")?"Opera":t.includes("chrome")?"Chrome":t.includes("safari")?"Safari":t.includes("trident")?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==r)return!0;var a,n=eval.toString().length;if(37===n&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===n&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===n&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;try{throw"a"}catch(e){try{e.toSource(),a=!0}catch(e){a=!1}}return!(!a||"Firefox"===e||"Other"===e)}static isCanvasSupported(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}static isWebGlSupported(){if(!a.isCanvasSupported())return!1;var e=a.getWebglCanvas();return!!window.WebGLRenderingContext&&!!e}static isIE(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))}static getWebglCanvas(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t||(t=null),t}isJavaEnabled(e){return this.options.excludeJavaEnabled||e.addPreprocessedComponent({key:"java_enabled",value:navigator.javaEnabled()}),e}getMimeTypes(e){if(this.options.excludeMimeTypes)return e;for(var t=[],r=0;r<navigator.mimeTypes.length;r++){var a=navigator.mimeTypes[r].description;a&&t.push(a)}return e.addPreprocessedComponent({key:"mime_types",value:t.join(",")}),e}wheelEvent(e){if(this.options.excludeWheelEvent)return e;var t="onwheel"in ce("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":browser.mozilla?"MozMousePixelScroll":"DOMMouseScroll";return e.addPreprocessedComponent({key:"wheel_event",value:t}),e}boundingClientRect(e){return this.options.excludeBoundingClientRect?e:(e.addPreprocessedComponent({key:"bounding_client_rect",value:"getBoundingClientRect"in ce("div")}),e)}has3d(e){if(this.options.excludeHas3d)return e;var t=function(e){if("WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix)return!0;if("MSCSSMatrix"in e&&"m11"in new e.MSCSSMatrix)return!0;if("CSSMatrix"in e&&"m11"in new e.CSSMatrix)return!0;try{var t=ce("div"),r=getCssPropertyName(t,"transform");return!!r&&(t.style[r]="translate3d(1px,1px,1px)",t.style[r]&&"none"!=t.style[r])}catch(e){return!1}}(window);return e.addPreprocessedComponent({key:"has_3d",value:t}),e}silverlight(e){if(this.options.excludeSilverlight)return e;var t={installed:!1,supported:!1,versions:[]};if("undefined"!=typeof Silverlight){if("function"==typeof Silverlight.isInstalled){var r=["5.1.41212","5.1.41105","5.1.40728","5.1.40416","5.1.30514","5.1.30214","5.1.20913","5.1.20513","5.1.20125","5.1.10411","5.0.61118","5.0.60818","5.0.60401","4.1.10329","4.1.10111","4.0.60831","4.0.60531","4.0.60310","4.0.60129","4.0.51204","4.0.50917","4.0.50826","4.0.50524","4.0.50401","3.0.50611","3.0.50106","3.0.40818","3.0.40723","3.0.40624","2.0.40115","2.0.31005","1.0.30715","1.0.30401","1.0.30109","1.0.21115","1.0.20816"].filter(Silverlight.isInstalled);t.installed=r.length>0,t.versions=r}"function"==typeof Silverlight.supportedUserAgent&&(t.supported=Silverlight.supportedUserAgent())}else try{var a=navigator.plugins["Silverlight Plug-In"];t.installed=!!a,t.installed&&t.versions.push(a.version)}catch(e){}return!1===t.installed?e:(e.addPreprocessedComponent({key:"silverlight",value:[t.installed,t.versions.join("~")]}),e)}each(e,t,r){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,r);else if(e.length===+e.length){for(var a=0,n=e.length;a<n;a++)if(t.call(r,e[a],a,e)==={})return}else for(var i in e)if(e.hasOwnProperty(i)&&t.call(r,e[i],i,e)==={})return}map(e,t,r){var a=[];return null==e?a:this.nativeMap&&e.map===this.nativeMap?e.map(t,r):(this.each(e,(e,n,i)=>{a[a.length]=t.call(r,e,n,i)}),a)}static x64Add(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]+t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]+t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]+t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]+t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}static x64Multiply(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]*t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]*t[3],r[1]+=r[2]>>>16,r[2]&=65535,r[2]+=e[3]*t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]*t[3],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[2]*t[2],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[3]*t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}static x64Rotl(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}static x64LeftShift(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}static x64Xor(e,t){return[e[0]^t[0],e[1]^t[1]]}static x64Fmix(e){return e=a.x64Xor(e,[0,e[0]>>>1]),e=a.x64Multiply(e,[4283543511,3981806797]),e=a.x64Xor(e,[0,e[0]>>>1]),e=a.x64Multiply(e,[3301882366,444984403]),e=a.x64Xor(e,[0,e[0]>>>1])}static x64hash128(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.length%16,n=e.length-r,i=[0,t],o=[0,t],s=[0,0],d=[0,0],l=[2277735313,289559509],u=[1291169091,658871167],c=0;c<n;c+=16)s=[255&e.charCodeAt(c+4)|(255&e.charCodeAt(c+5))<<8|(255&e.charCodeAt(c+6))<<16|(255&e.charCodeAt(c+7))<<24,255&e.charCodeAt(c)|(255&e.charCodeAt(c+1))<<8|(255&e.charCodeAt(c+2))<<16|(255&e.charCodeAt(c+3))<<24],d=[255&e.charCodeAt(c+12)|(255&e.charCodeAt(c+13))<<8|(255&e.charCodeAt(c+14))<<16|(255&e.charCodeAt(c+15))<<24,255&e.charCodeAt(c+8)|(255&e.charCodeAt(c+9))<<8|(255&e.charCodeAt(c+10))<<16|(255&e.charCodeAt(c+11))<<24],s=a.x64Multiply(s,l),s=a.x64Rotl(s,31),s=a.x64Multiply(s,u),i=a.x64Xor(i,s),i=a.x64Rotl(i,27),i=a.x64Add(i,o),i=a.x64Add(a.x64Multiply(i,[0,5]),[0,1390208809]),d=a.x64Multiply(d,u),d=a.x64Rotl(d,33),d=a.x64Multiply(d,l),o=a.x64Xor(o,d),o=a.x64Rotl(o,31),o=a.x64Add(o,i),o=a.x64Add(a.x64Multiply(o,[0,5]),[0,944331445]);switch(s=[0,0],d=[0,0],r){case 15:d=a.x64Xor(d,a.x64LeftShift([0,e.charCodeAt(c+14)],48));case 14:d=a.x64Xor(d,a.x64LeftShift([0,e.charCodeAt(c+13)],40));case 13:d=a.x64Xor(d,a.x64LeftShift([0,e.charCodeAt(c+12)],32));case 12:d=a.x64Xor(d,a.x64LeftShift([0,e.charCodeAt(c+11)],24));case 11:d=a.x64Xor(d,a.x64LeftShift([0,e.charCodeAt(c+10)],16));case 10:d=a.x64Xor(d,a.x64LeftShift([0,e.charCodeAt(c+9)],8));case 9:d=a.x64Xor(d,[0,e.charCodeAt(c+8)]),d=a.x64Multiply(d,u),d=a.x64Rotl(d,33),d=a.x64Multiply(d,l),o=a.x64Xor(o,d);case 8:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+7)],56));case 7:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+6)],48));case 6:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+5)],40));case 5:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+4)],32));case 4:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+3)],24));case 3:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+2)],16));case 2:s=a.x64Xor(s,a.x64LeftShift([0,e.charCodeAt(c+1)],8));case 1:s=a.x64Xor(s,[0,e.charCodeAt(c)]),s=a.x64Multiply(s,l),s=a.x64Rotl(s,31),s=a.x64Multiply(s,u),i=a.x64Xor(i,s)}return i=a.x64Xor(i,[0,e.length]),o=a.x64Xor(o,[0,e.length]),i=a.x64Add(i,o),o=a.x64Add(o,i),i=a.x64Fmix(i),o=a.x64Fmix(o),i=a.x64Add(i,o),o=a.x64Add(o,i),("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)+("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)}}(0,window.onDomReady)(()=>{try{new a({preprocessor:(e,t)=>"user_agent"===e?[]:t,excludeLanguage:!0}).get(e=>{getCookie("remixgp")!==e&&setCookie("remixgp",e,7,1)})}catch(e){}}),stManager.done(jsc("web/grip.js"))},Y9lz:function(e,t,r){r("7DDg")("Float32",4,function(e){return function(t,r,a){return e(this,t,r,a)}})}});