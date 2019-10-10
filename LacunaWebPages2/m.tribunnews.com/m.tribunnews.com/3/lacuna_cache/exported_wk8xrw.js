
                    var getA = googletag.cmd.push(function() {
                        var da = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                            [320, 100],
                            [320, 50],
                            [1, 1]
                        ], 'div-Anchor');
                        da.setTargeting('pos', ['Anchor']);
                        da.setTargeting('page', ['home']);
                        da.addService(googletag.pubads());

                        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                            if (da === event.slot) {
                                var anchor_size_dfp = event.size;
                                if (anchor_size_dfp == '320,100' || anchor_size_dfp == '300,100') {
                                    var getContAnchor = document.querySelector(".anchor_banner");
                                    var getDivAnchor = document.getElementById("div-Anchor");
                                    var getCloseAnchor = document.querySelector(".btnclose");
                                    getDivAnchor.style.height = "100px";
                                    getContAnchor.style.height = "100px";
                                    getCloseAnchor.style.bottom = "100px";
                                }
                            }
                        });

                        googletag.pubads().enableSingleRequest();
                        googletag.display('div-Anchor'); //calling to display
                    });
                