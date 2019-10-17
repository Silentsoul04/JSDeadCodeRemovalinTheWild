
                            define("newtab/start/rtstart", function() {
                                function a() {
                                    if (window.sSession && window.sSession.sids.indexOf("123409") > -1) {
                                        require(["sfr", "newtab/rtapp/service"], function(b, c) {
                                            if (!b.services.isRegistered("/newspage/data/landingwise")) {
                                                b.services.register("/newspage/data/landingwise", {}, c)
                                            }
                                        })
                                    }
                                }
                                return {
                                    init: a
                                }
                            });
                            window.B.init(function() {
                                require(["newtab/start/rtstart"], function(a) {
                                    a.init()
                                })
                            });;
                        