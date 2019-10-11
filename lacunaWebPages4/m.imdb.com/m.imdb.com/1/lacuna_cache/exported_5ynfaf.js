
        (function(win) {___jdce_logger("lacuna_cache/exported_5ynfaf.js", 10, 2191);
            if (typeof win.FontFace !== "undefined" &&
                typeof win.Promise !== "undefined") {
                if (win.ue) {
                    win.uet("bb", "LoadRoboto", {
                        wb: 1
                    });
                }
                var allowableLoadTime = 1000;
                var startTimeInt = +new Date();
                var roboto = new FontFace('Roboto',
                    'url(https://m.media-amazon.com/images/G/01/IMDb/KFOmCnqEu92Fr1Mu4mxKKTU1Kg._CB1529696197.woff2)', {
                        style: 'normal',
                        weight: 400
                    });
                var robotoMedium = new FontFace('Roboto',
                    'url(https://m.media-amazon.com/images/G/01/IMDb/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ._CB1530218750_.woff2)', {
                        style: 'normal',
                        weight: 500
                    });
                var robotoLoaded = roboto.load();
                var robotoMediumLoaded = robotoMedium.load();

                win.Promise.all([robotoLoaded, robotoMediumLoaded]).then(function() {___jdce_logger("lacuna_cache/exported_5ynfaf.js", 1126, 1878);
                    var loadTimeInt = +new Date();
                    var robotoLoadedCount = 0;
                    if ((loadTimeInt - startTimeInt) <= allowableLoadTime) {
                        win.document.fonts.add(roboto);
                        win.document.fonts.add(robotoMedium);
                        robotoLoadedCount++;
                    }
                    if (win.ue) {
                        win.ue.count("roboto-loaded", robotoLoadedCount);
                        win.uet("be", "LoadRoboto", {
                            wb: 1
                        });
                        win.uex("ld", "LoadRoboto", {
                            wb: 1
                        });
                    }
                }).catch(function() {___jdce_logger("lacuna_cache/exported_5ynfaf.js", 1886, 2030);
                    if (win.ue) {
                        win.ue.count("roboto-loaded", 0);
                    }
                });
            } else {
                if (win.ue) {
                    win.ue.count("roboto-load-not-attempted", 1);
                }
            }
        })(window);
    