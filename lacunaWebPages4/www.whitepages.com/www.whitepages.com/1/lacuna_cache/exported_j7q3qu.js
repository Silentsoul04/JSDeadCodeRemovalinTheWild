
        //<![CDATA[
        $(function() {___jdce_logger("lacuna_cache/exported_j7q3qu.js", 31, 2237);
            if (dfpAdSlots.length > 0) {
                googletag.cmd.push(function() {___jdce_logger("lacuna_cache/exported_j7q3qu.js", 120, 1902);
                    googletag.pubads().setTargeting('eb', (monster.get('eb') || ''));
                    googletag.pubads().setTargeting('ad-stg', WP.adStg || '');
                    googletag.pubads().setTargeting("ffn", "");
                    googletag.pubads().setTargeting("fmn", "");
                    googletag.pubads().setTargeting("fln", "");
                    googletag.pubads().setTargeting("fpn", "");
                    googletag.pubads().setTargeting("fct", "");
                    googletag.pubads().setTargeting("fst", "");
                    googletag.pubads().setTargeting("fbk", "");
                    googletag.pubads().setTargeting("rfn", "");
                    googletag.pubads().setTargeting("rmn", "");
                    googletag.pubads().setTargeting("rln", "");
                    googletag.pubads().setTargeting("rag", "");
                    googletag.pubads().setTargeting("rpn", "");
                    googletag.pubads().setTargeting("rad", "");
                    googletag.pubads().setTargeting("rct", "");
                    googletag.pubads().setTargeting("rst", "");
                    googletag.pubads().setTargeting("rzp", "");
                    googletag.pubads().setTargeting("cat", "");
                    googletag.pubads().setTargeting("SubCat", "");

                    googletag.pubads().disableInitialLoad();
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().enableAsyncRendering();
                    googletag.pubads().collapseEmptyDivs();
                    googletag.enableServices();

                    dfpAdSlots.forEach(function(slot) {___jdce_logger("lacuna_cache/exported_j7q3qu.js", 1788, 1882);
                        googletag.display(slot.slotID);
                    });
                });

                apstag.fetchBids({
                    slots: dfpAdSlots
                }, function(bids) {___jdce_logger("lacuna_cache/exported_j7q3qu.js", 1998, 2211);
                    googletag.cmd.push(function() {___jdce_logger("lacuna_cache/exported_j7q3qu.js", 2054, 2191);
                        apstag.setDisplayBids();
                        googletag.pubads().refresh();
                    });
                });
            }
        });

        //]]>
    