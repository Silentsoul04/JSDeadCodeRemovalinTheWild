
        //ADBRIDG MIGRATION: Load the Adbridg library directly after the GPT library. 
        var AdBridg = AdBridg || {};
        AdBridg.cmd = AdBridg.cmd || [];
        window.adbridgFallback = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 199, 5809);
            console.log('ADBRIDG MIGRATION: library failed to load; falling back to GPT');
            var dq = [],
                l = [],
                ls = {},
                lf = [],
                es;
            var rl = function(f) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 443, 733);
                return function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 480, 719);
                    var a = arguments,
                        x = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 560, 643);
                            f.apply(null, a)
                        };
                    lf.push(x);
                    pl()
                }
            }
            var pl = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 755, 933);
                if (!l.length) {
                    while (lf.length) {
                        (lf.shift())()
                    }
                }
            }
            dq.process = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 959, 1090);
                while (dq.length) {
                    googletag.display(dq.shift());
                }
            }
            AdBridg.defineSlot = function(p, s, d) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1124, 1242);
                return googletag.defineSlot(p, s, d).addService(googletag.pubads());
            }
            AdBridg.defineOutOfPageSlot = function(p, d) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1285, 1406);
                return googletag.defineOutOfPageSlot(p, d).addService(googletag.pubads());
            }
            AdBridg.destroySlots = function(s) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1442, 1519);
                return googletag.destroySlots(s);
            }
            AdBridg.display = function(d) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1550, 1683);
                dq.push(d);
                if (es) {
                    dq.process();
                }
            }
            AdBridg.refresh = function(s, o) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1714, 1794);
                googletag.pubads().refresh(s, o);
            }
            AdBridg.render = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1824, 1837);}
            AdBridg.serve = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 1866, 1990);
                googletag.enableServices();
                es = 1;
                dq.process();
            }
            AdBridg.sizeMapping = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2025, 2099);
                return googletag.sizeMapping();
            }
            AdBridg.useSizeMapping = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2137, 2150);}
            AdBridg.lock = function(s) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2178, 2362);
                if (ls[s]) {
                    ls[s] = null;
                    return;
                }
                l.push(s);
                pl()
            }
            AdBridg.unlock = function(s) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2392, 2742);
                var f = 0;
                for (var i = 0; i < l.length; ++i) {
                    if (l[i] == s) {
                        l.splice(i, 1);
                        f = 1
                    }
                };
                if (!f) {
                    ls[s] = 1
                }
                pl()
            }
            AdBridg.cmd.push = function(f) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2774, 5689);
                if (typeof(f) == 'object') {
                    var api_fallback = function(o) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2872, 5249);
                        googletag.cmd.push(function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 2929, 5225);
                            var fl;
                            if (o.gpt_path) {
                                var u = AdBridg.defineSlot(o.gpt_path, o.size || [], o.dom_id);
                                if (o.size_map) {
                                    var m = googletag.sizeMapping();
                                    for (var oi = 0; oi < o.size_map.length; oi++) {
                                        m = m.addSize(o.size_map[oi].viewport, o.size_map[oi].sizes);
                                    }
                                    u.defineSizeMapping(m.build());
                                }
                                if (o.events) {
                                    if (o.events["gpt.defined"]) {
                                        o.events["gpt.defined"](u);
                                    }
                                    fl = function(a, b) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 3828, 4315);
                                        if (o.events[a]) {
                                            googletag.pubads().addEventListener(b, function(e) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 3987, 4234);
                                                if (e.slot === u) {
                                                    o.events[a](u, e)
                                                }
                                            })
                                        }
                                    }
                                    fl("gpt.rendered", 'slotRenderEnded');
                                    fl("gpt.viewed", 'impressionViewable');
                                    fl("gpt.visibilityChanged", 'slotVisibilityChanged');
                                }
                            } else if (o.events) {
                                fl = function(a, b) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 4679, 5020);
                                    if (o.events[a]) {
                                        googletag.pubads().addEventListener(b, function(e) {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 4830, 4947);
                                            o.events[a](a, e)
                                        })
                                    }
                                }
                                fl("gpt.render_raw", 'slotRenderEnded');
                                fl("gpt.viewed_raw", 'impressionViewable');
                            }
                        });
                    }
                    if (f.length) {
                        for (var i = 0; i < f.length; ++i) {
                            api_fallback(f[i]);
                        }
                    } else {
                        api_fallback(f);
                    }
                    f = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 5537, 5611);
                        AdBridg.serve()
                    }
                }
                return googletag.cmd.push(f);
            }
            while (AdBridg.cmd.length) {
                AdBridg.cmd.push(AdBridg.cmd.shift());
            }
        };
        fireOrSaveJsFunctions(1, function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 5844, 6620);
            (function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 5870, 6606);
                var adb = document.createElement("script");
                adb.async = true;
                adb.type = "text/javascript";
                adb.src = '//prod.adspsp.com/adb.2418030m.min.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(adb, node);

                // Return control to GPT if the AdBridg library fails to load.
                adb.onerror = function() {___jdce_logger("lacuna_cache/exported_zd5dzj.js", 6328, 6592);
                    if (AdBridg.exists) {
                        return;
                    }
                    document.createElement('IMG').src = '//adspsp.com/pt/2418030/3/1/?e=0';
                    window.adbridgFallback();
                }
            })();
        });
    