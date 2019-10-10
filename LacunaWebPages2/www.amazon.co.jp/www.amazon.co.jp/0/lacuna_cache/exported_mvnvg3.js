
            var footerTimer = setTimeout(function() {___jdce_logger("lacuna_cache/exported_mvnvg3.js", 42, 416);
                P.now('merch-data-store').execute(function(merchDataStore) {___jdce_logger("lacuna_cache/exported_mvnvg3.js", 105, 400);
                    if (typeof merchDataStore === 'undefined') {
                        P.declare('merch-data-store', {
                            html: "",
                            cardsData: []
                        });
                    }
                });
            }, 10000);

            P.when('merch-data-store').execute(function() {___jdce_logger("lacuna_cache/exported_mvnvg3.js", 474, 543);
                clearTimeout(footerTimer);
            });
        