
        var pageloadValidAds = ["WFPAD"];
        var pageloadNonCollapsedAds = ["WFPAD"];
        var bucketSAEnabled = true;
        var darlaJsAsyncEnabled = false;
        var darlaJsAsyncPollTimeout = 10000;
        var segBlob = {"pt":"home","ver":"ss"};
        var isMON2Valid = false;
        
        
        
        
        
        var D, C,
            _adPerfBeaconData,
            _pendingAds = [],
            _adLT = [];

        function darlaOnready() {
            var w = window;

            D = w.DARLA;
            C = {"useYAC":0,"usePE":0,"servicePath":"https:\/\/www.yahoo.com\/sdarla\/php\/fc.php","xservicePath":"","beaconPath":"https:\/\/www.yahoo.com\/sdarla\/php\/b.php","renderPath":"","allowFiF":false,"srenderPath":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1\/html\/r-sf.html","renderFile":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1\/html\/r-sf.html","sfbrenderPath":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1\/html\/r-sf.html","msgPath":"https:\/\/fc.yahoo.com\/unsupported-1946.html","cscPath":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1\/html\/r-csc.html","root":"sdarla","edgeRoot":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1","sedgeRoot":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1","version":"3-17-1","tpbURI":"","hostFile":"https:\/\/s.yimg.com\/rq\/darla\/3-17-1\/js\/g-r-min.js","beaconsDisabled":true,"rotationTimingDisabled":true,"fdb_locale":"What don't you like about this ad?|It's offensive|Something else|Thank you for helping us improve your Yahoo experience|It's not relevant|It's distracting|I don't like this ad|Send|Done|Why do I see ads?|Learn more about your feedback.|Want an ad-free inbox? Upgrade to Yahoo Mail Pro!|Upgrade Now","positions":{"DEFAULT":{"supports":false},"XFPAD":{"w":1,"h":1},"WFPAD":{"w":320,"h":50},"LDRP":{"w":1,"h":1}},"lang":"en-US"};
            C.positions = {"WFPAD":{"clean":"ad_wp","dest":"my-adsWFPAD-iframe","metaSize":1,"w":320,"h":50,"supports":{"exp-ovr":1,"exp-push":1,"resize-to":1,"lyr":1}},"LDRP":{"clean":"ad_ldrp","dest":"my-adsLDRP-iframe","metaSize":1,"supports":{"exp-ovr":1,"exp-push":1,"lyr":1}},"DEFAULT":{"sandbox":0,"meta":{"hostURL":"https:\/\/www.yahoo.com"}},"MSPL":{"clean":"ad_spl","dest":"my-adsMSPL-iframe","metaSize":1,"flex":"16x9","w":1280,"h":720,"supports":{"resize-to":1,"hide":1,"exp-ovr":1,"exp-push":1,"lyr":1,"cmsg":1}}};
            
            C.k2E2ERate=2;
C.firstRenderingVisible=true;
C.rotationRenderingVisible=false;
C.smartPixelDisabled=false;

            C.events = [];
            
                        C.onFinishParse = function(eventName, result) {
                var ps = result.ps(),
                    modalOpen = false,
                    position, posItem, curAd, curEvt,
                    validPositions = {},
                    isMONFetch = false;
                             if (eventName === 'monAdFetch') {
                 var monReqValidAds = {};
                 for (i = 0, l = ps.length; i < l; i++) {
                     position = ps[i];
                     posItem = result.item(position);
                     monReqValidAds[position] = {posData: posItem};
                     if (posItem.hasErr || posItem.size + '' === '1x1' || (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size + ''=== '1x1')) {
                         monReqValidAds[position].validAd = false;
                     } else {
                         monReqValidAds[position].validAd = true;
                     }
                 }
                 if (Y && Y.caasViewerI && Y.caasViewerI.onMonAdResponse) {
                     Y.caasViewerI.onMonAdResponse(monReqValidAds);
                 }
             }
                if (ps && ps.length) {
                    

                    
                    for (i = 0, l = ps.length; i < l; i++) {
                        position = ps[i];
                        posItem = result.item(position);
                        if (posItem && posItem.conf && posItem.conf.clean) {
                            curAd = document.getElementById(posItem.conf.clean);
                            if (curAd) {
                                



                            }
                        }
                    }
                    
                 }
            };

                        C.onStartPosRender = function(posItem) {
                if (window.performance  && window.performance.now) {
                    var ltime = window.performance.now(),
                        posId = posItem && posItem.pos;
                    _adLT.push(['ADSTART_'+posId, Math.round(ltime)]);
                }
                if (window._isModalOpen && window._isModalOpen()) {
                    window._perfMark('ADSTART_' + posId);
                }
            };

            

                        C.onFinishPosRender = function(posId, reqList, posItem) {
                var curAd = document.getElementById("my-ads"+posId),
                    adIndex,
                    posSize = (posItem && posItem.meta && posItem.meta.value("size", "y")),
                    facStatus = (posItem && posItem.meta && posItem.meta.value("facStatus", "y"));

                // Get clean div for ad position in case defined
                if (posItem && posItem.conf && posItem.conf.clean) {
                    curAd = document.getElementById(posItem.conf.clean);
                }
                if (curAd) {
                    
                    // Let ad take its original size, remove default height given to ad div
                    curAd.className = curAd.className.replace('Ht-'+ posSize, '');
                    curAd.className = curAd.className.replace('Ht-default', '');
                    curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-bgcolor/, '');
                    curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-before-loading/, '');

                    if((posSize && posSize != "1x1") && (!facStatus || facStatus.fedStatusCode != '16')) {
                        curAd.className = curAd.className.replace('D-n', '');
                        var sponsorSlugNode = curAd.parentElement.getElementsByClassName('cslug');
                        if (sponsorSlugNode && 0 !== sponsorSlugNode.length) {
                            sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('Dn', '');
                            sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('D-n', '');
                        }
                    }
                }

                if (window.performance !== undefined && window.performance.now !== undefined) {
                    var whiteListedAds = {"LREC":"my-adsLREC-base","MAST":"my-adsMAST","LDRB":"my-adsLDRB","UBALDRB":"my-adsUBALDRB","TL1":"my-adsTL1","TXTL":"my-adsTXTL","LREC-0":"hl-ad-LREC-0","MON-0":"hl-ad-MON-0","MAST-0":"hl-ad-MAST-0","LDRB-0":"hl-ad-LDRB-0","SPL2-0":"hl-ad-SPL2-0","SPL-0":"hl-ad-SPL-0","LDRB-1":"viewer-LDRB","MON-1":"viewer-MON","LREC-1":"viewer-LREC","LREC-2":"viewer-LREC2"},
                      ltime = window.performance.now();
                     _adLT.push(['ADEND_'+posId, Math.round(ltime)]);
                    setTimeout(function () {
                        if (window.YAFT !== undefined && window.YAFT.isInitialized() && whiteListedAds[posId]) {
                            // Trigger custom timing for LREC ad position
                            window.YAFT.triggerCustomTiming(whiteListedAds[posId], '', ltime);
                        }
                    },300);
                }
                if (window._isModalOpen && window._isModalOpen()) {
                    window._perfMark('ADEND_' + posId);
                    adIndex = window._pendingAds.indexOf(posId);
                    if (adIndex >= 0) {
                        window._pendingAds.splice(adIndex, 1);
                        if (window._pendingAds.length === 0) {
                            window._adRenderComplete();
                        }
                    }
                }
            };

            
                        //call back when the ad is expanded or collapsed
            C.onPosMsg = function (msg_name, data, msg_data)  {
                var visible;
                

                /* generic ad expansion logic */
                if(msg_name == "collapse") {
                    var bodyTag = document.getElementsByTagName("body")[0];
                    bodyTag.className = bodyTag.className.replace(data + "-ad-expanded", '');
                }

                if(msg_name == "exp-ovr") {
                    var bodyTag = document.getElementsByTagName("body")[0];
                    bodyTag.className += " " + data + "-ad-expanded";
                }

                if (msg_name === 'geom-update') {
                    visible = D.render.RenderMgr.get(data).viewedAt > 0;
                    // geom-update event will always be available when Y is available
                    if (YMedia && visible) {
                        YMedia.Global.fire('ads:beacon', {id: data});
                    }
                }
            };

            

            


            if ("OK" == D.config(C)) {
                setTimeout(function() {
                    if (window.performance  && window.performance.now) {
                        var ltime = window.performance.now();
                        _adLT.push(['DARLA_RSTART', Math.round(ltime)]);
                    }
                    var w = window,
                        d = document,
                        e = d.documentElement,
                        g = d.getElementsByTagName('body')[0],
                        winWidth = w.innerWidth || e.clientWidth || g.clientWidth;
                        D.render();
                    if (window.performance  && window.performance.now) {
                        var ltime = window.performance.now();
                        _adLT.push(['DARLA_REND', Math.round(ltime)]);
                    }
                }, 10);
            }
        }
        function darlaOnreadyPoll(callback, timeout, interval) {
            timeout = Number(new Date()) + (timeout || 10000);
            interval = interval || 100;

            (function condition() {
                if (window.DARLA) {
                    callback();
                } else if (Number(new Date()) < timeout) {
                    setTimeout(condition, interval);
                } else {
                    // TODO: need to log when we were not able to get DARLA within timeout
                    // No ads would be disaplyed if we don't get within timeout, our 95p is within 6s
                }
            })();
        }

        if (darlaJsAsyncEnabled) {
            window.DARLA ? darlaOnready() : darlaOnreadyPoll(darlaOnready, darlaJsAsyncPollTimeout, 10);
        } else {
            darlaOnready();
        }
    