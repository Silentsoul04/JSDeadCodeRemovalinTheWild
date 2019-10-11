
            //Our JSONP callback function
            aax_render_ad_top_ad = function(ad) {___jdce_logger("lacuna_cache/exported_8n4ht8.js", 78, 315);
                var slot = {
                    name: "TOP_AD",
                    width: 320,
                    height: 50
                };
                render_ad_top_ad(ad, slot, "top_ad_wrapper");
            };
            render_ad_top_ad = function(ad, slot, divWrapperId) {___jdce_logger("lacuna_cache/exported_8n4ht8.js", 348, 8715);
                slotName = slot.name.toLowerCase();
                var adElement = document.getElementById(divWrapperId),
                    iframeName = slotName,
                    mraidLibrary = "<script>!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i=\"function\"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error(\"Cannot find module \'\"+g+\"\'\");throw j.code=\"MODULE_NOT_FOUND\",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f=\"function\"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){\"use strict\";a(3),a(2)},{2:2,3:3}],2:[function(a,b,c){\"use strict\";top&&top.mraidFeatures&&top.mraidFeatures.registerSlot&&top.mraidFeatures.registerSlot(window.frameElement)},{}],3:[function(a,b,c){\"use strict\";var d=a(4);window.mraidBridge=d.mraidBridge,window.mraid=d.mraid},{4:4}],4:[function(a,b,c){\"use strict\";var d=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)},e=function(a,b){var c;for(c=0;c<a.length;c++)c in a&&b.call(null,a[c],c)},f=\"defaultSlotName\",g={error:\"error\",ready:\"ready\",sizeChange:\"sizeChange\",stateChange:\"stateChange\",viewableChange:\"viewableChange\"},h=[],i=\"2.0\",j={x:9999,y:9999,width:9999,height:9999},k=\"loading\",l=\"inline\",m=!1,n={width:9999,height:9999,useCustomClose:m,isModal:!0},o={allowOrientationChange:!1,forceOrientation:\"none\"},p=function(a){top.document.location.hash.match(\"debug=1\")&&console.log(\"[\"+f+\"] MRAID log: \"+a)},q=void 0,r={getBoundingClientRect:function(){return{left:0,top:0}}};\"undefined\"!=typeof document&&(r=document.getElementsByTagName(\"html\")[0]),\"undefined\"!=typeof window&&null!==window.frameElement&&(r=window.frameElement);var s=function(a,b){var c=h[a]||[];e(c,function(c){try{c.apply(null,b)}catch(d){p(\"Error executing \"+a+\" listener\"),p(d)}})},t=function(){p(\"MRAID ready\"),s(\"ready\")},u=function(a,b){p(\"error: \"+a+\" action: \"+b);var c=[a,b];s(\"error\",c)},v=function(a){p(\"stateChange: \"+a);var b=[a];k=a,s(\"stateChange\",b)},w=function(a){p(\"viewableChange: \"+a);var b=[a];s(\"viewableChange\",b)},x=function(a,b){p(\"sizeChange: \"+a+\"x\"+b);var c=[a,b];s(\"sizeChange\",c)},y=function(a,b,c,d){p(\"setDefaultPosition: \"+a+\" \"+b+\" \"+c+\" \"+d),j.x=c,j.y=d,j.width=a,j.height=b},z=function(a){p(\"setSlotName: \"+a),f=a},A={error:u,ready:t,stateChange:v,sizeChange:x,viewableChange:w,setDefaultPosition:y,setSlotName:z},B={addEventListener:function(a,b){var c=h[a]||[],f=!1;g.hasOwnProperty(a)&&(d(h[a])||(h[a]=c),e(c,function(a){b===a&&(f=!0)}),f||h[a].push(b))},removeEventListener:function(a,b){if(h.hasOwnProperty(a)){var c=h[a];if(c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},useCustomClose:function(a){},supports:function(a){return!1},getVersion:function(){return i},getState:function(){return k},getPlacementType:function(){return l},isViewable:function(){return\"hidden\"!==k&&\"loading\"!==k},getExpandProperties:function(){return n},setExpandProperties:function(a){a.hasOwnProperty(\"width\")&&(n.width=a.width),a.hasOwnProperty(\"height\")&&(n.height=a.height),a.hasOwnProperty(\"useCustomClose\")&&(n.useCustomClose=a.useCustomClose,m=a.useCustomClose)},getOrientationProperties:function(){return o},setOrientationProperties:function(a){a.hasOwnProperty(\"forceOrientation\")&&(o.forceOrientation=a.forceOrientation),a.hasOwnProperty(\"allowOrientationChange\")&&(o.allowOrientationChange=a.allowOrientationChange)},getResizeProperties:function(){return q},setResizeProperties:function(a){q||(q={customClosePosition:\"top-right\",allowOffscreen:!0}),a.hasOwnProperty(\"customClosePosition\")&&(q.customClosePosition=a.customClosePosition),a.hasOwnProperty(\"allowOffscreen\")&&(q.allowOffscreen=a.allowOffscreen),a.hasOwnProperty(\"width\")&&(q.width=a.width),a.hasOwnProperty(\"height\")&&(q.height=a.height),a.hasOwnProperty(\"offsetX\")&&(q.offsetX=a.offsetX),a.hasOwnProperty(\"offsetY\")&&(q.offsetY=a.offsetY)},getCurrentPosition:function(){return{width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight,x:r.getBoundingClientRect().left,y:r.getBoundingClientRect().top}},getMaxSize:function(){return{width:top.innerWidth,height:top.innerHeight}},getDefaultPosition:function(){return j},getScreenSize:function(){return{width:window.screen.width,height:window.screen.height}},open:function(a){top.window.open(a)},close:function(){top&&top.mraidFeatures&&top.mraidFeatures.closeSlot&&top.mraidFeatures.closeSlot(r)},expand:function(a){u(\"Not Implemented\",\"expand\")},resize:function(){q?top&&top.mraidFeatures&&top.mraidFeatures.resizeSlot&&top.mraidFeatures.resizeSlot(r,q):u(\"Resize properties not set\",\"resize\")},createCalendarEvent:function(){u(\"Not Implemented\",\"createCalendarEvent\")},playVideo:function(a){open(a)},storePicture:function(a){u(\"Not Implemented\",\"storePicture\")}};b.exports={mraid:B,mraidBridge:A}},{}]},{},[1]);<\/script>",
                    overlayLibrary = "!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i=\"function\"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error(\"Cannot find module \'\"+g+\"\'\");throw j.code=\"MODULE_NOT_FOUND\",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f=\"function\"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){\"use strict\";!function(a,b){function c(a){var b=a.data,c=b.type,e=d[c];if(e&&e.length)for(i=0;i<e.length;i++)e[i](b)}var d={},e={registerMessageHandler:function(a,b){d[a]=d[a]||[],d[a].push(b)}};for(method in parent.overlay)parent.overlay.hasOwnProperty(method)&&(e[method]=parent.overlay[method]);a.addEventListener(\"message\",c),a.overlay=e}(window,document)},{}]},{},[1]);",
                    headBaseScript = "<script> try {\n var head = document.getElementsByTagName(\"head\")[0],\n baseTag = document.createElement(\"base\");\n baseTag.setAttribute(\'target\', \'_blank\');\n head.appendChild(baseTag);\n } catch(e) {\n if (top.generic && top.generic.monitoring && top.generic.monitoring.record_event) {\n top.generic.monitoring.record_event(\'mobile_ad_skipped_base_tag\', false);\n }\n }\n<\/script>",
                    defaultAdObject = "<script>document.defaultAd = {h:" + slot.height + ",w:" + slot.width + "}; document.ad = document.defaultAd;<\/script>",
                    response = [];
                ad_utils.slot_events.trigger(slotName, 'tagdeliver', {
                    timestamp: +new Date()
                });
                //short circuit rendering.
                if (typeof ad.html == "undefined" || ad.html == "") {
                    return;
                }
                //Wire in the closeable component
                generic.registerCloseable(window, adElement, slot.height, slot.width);
                // Inject the overlay bridge if requested by the creative.
                //
                // The pattern is a bogus function called bridgeImport; this string will
                // exist in more than one place in an overlay creative, because the bridge
                // must be injected into each component within the creative.
                //
                // We should do something similar for the MRAID bridge so it's not thrown
                // into creatives that don't need it.
                //
                // The regex ends with a comma and semicolon because the JS minification
                // may replace the semicolon with a comma in the final creative. Yeah.
                var pattern = /bridgeImport\("overlay-bridge.js"\)[,;]/g;
                ad.html = ad.html.replace(pattern, overlayLibrary);
                var code = headBaseScript + defaultAdObject + mraidLibrary + ad.html;
                response[slotName] = {
                    "_html_": code
                };
                //make the popin visible
                adElement.style.display = 'block';
                document.body.className += " with-ad";
                //make a mock 'gpt' response
                ad_utils.gpt.handle_response(response);
            };
            isInPenaltyBox = function() {___jdce_logger("lacuna_cache/exported_8n4ht8.js", 8746, 9033);
                if (window.generic && window.generic.penalty_box && window.generic.penalty_box.isInPenaltyBox) {
                    return window.generic.penalty_box.isInPenaltyBox();
                } else {
                    return true;
                }
            }
            if (isInPenaltyBox()) {
                doWithAds(function() {___jdce_logger("lacuna_cache/exported_8n4ht8.js", 9096, 9526);
                    generic.monitoring.record_event('mobile_ad_skipped_penalty_box', false);
                    if (window.performance && window.PerformanceNavigation &&
                        window.performance.navigation.type != PerformanceNavigation.TYPE_BACK_FORWARD) {
                        generic.monitoring.record_event('mobile_ad_would_get_ad_server_side', false);
                    }
                }, "Generic not defined, skipping twilight record_event.");
            } else {
                doWithAds(function() {___jdce_logger("lacuna_cache/exported_8n4ht8.js", 9632, 9805);
                    ad_utils.slot_events.trigger('top_ad', 'request', {
                        timestamp: +new Date()
                    });
                }, "Generic not defined, skipping twilight record_metric.");
                doWithAds(function() {___jdce_logger("lacuna_cache/exported_8n4ht8.js", 9891, 10757);
                    //setup the slot for rendering.
                    ad_utils.gpt.render_ad('top_ad');
                    //Get the creative content from AAX (clientside call) or Shazam (already fetched serverside)
                    //make the JSONP call to AAX
                    var targetDiv = window.document.getElementById("top_ad");
                    var targetScript = document.createElement('script');
                    targetScript.type = 'text/javascript';
                    targetScript.src = "https://aax-eu.amazon-adsystem.com/x/getad?pk=%5B%22p%3Dtop%22%2C%22p%3Dt%22%2C%22c%3D0%22%2C%22pi%3Dhomepage%22%5D&src=401&c=100&sz=320x50&ec=0&u=https%3A%2F%2Fm.imdb.com%2F&slot=TOP_AD&site=m.imdb.com&pt=homepage&jscb=aax_render_ad_top_ad&rnd=907113242942 ";
                    targetDiv.appendChild(targetScript);
                }, "Error while rendering mobile banner ad.");
                if (window.performance && window.PerformanceNavigation &&
                    window.performance.navigation.type == PerformanceNavigation.TYPE_BACK_FORWARD) {
                    generic.monitoring.record_event('mobile_ad_get_ad_back_forward', false);
                }
            }
        