
        (function() {___jdce_logger("lacuna_cache/exported_109kd7.js", 10, 2649);
            history.replaceState && history.replaceState({}, null, null);

            var cfImages = [];

            var cfMetricFunc =

                function(images) {___jdce_logger("lacuna_cache/exported_109kd7.js", 178, 754);
                    gm.wil(images, function(cached) {___jdce_logger("lacuna_cache/exported_109kd7.js", 232, 734);
                        gm.w('af:lg', function() {___jdce_logger("lacuna_cache/exported_109kd7.js", 289, 710);

                            gm.mpe('cf');
                            window.P && P.register('sp.load.js');
                            if (typeof(ue) != 'undefined') {
                                if (ue && ue.tag) {
                                    ue.tag(cached.length > 0 ? 'gwImgCached' : 'gwImgNoCached');
                                }
                            }
                        });
                    });
                };
            P.declare('cfImages', cfImages);
            cfMetricFunc(cfImages);

            var cfPerformanceFunc =

                function(images) {___jdce_logger("lacuna_cache/exported_109kd7.js", 891, 2597);
                    P.when('cf').execute(function() {___jdce_logger("lacuna_cache/exported_109kd7.js", 951, 2577);
                        var id = 'gwm:cfImage:';

                        var logMetric = function(name, value) {___jdce_logger("lacuna_cache/exported_109kd7.js", 1054, 1273);
                            if (!value) {
                                return;
                            }

                            ue.count(id + name, value);

                        }

                        var resources =
                            window.performance &&
                            typeof window.performance.getEntriesByType === 'function' &&
                            window.performance.getEntriesByType("resource") || [];
                        var imageSrc;
                        var duration;
                        var csmTag;
                        var i;

                        if (!images || !images.length) {
                            return;
                        }

                        if (!ue.count || !ue.tag) {
                            return;
                        }

                        imageSrc = images[0];

                        for (i = 0; i < resources.length; i++) {
                            if (resources[i].name === imageSrc) {
                                csmTag = (resources[i].duration < 50) ? id + ":cfCached" : id + ":cfNotCached"
                                ue.tag(csmTag);

                                logMetric('fetchStart', resources[i].fetchStart);
                                logMetric('duration', resources[i].duration);
                                logMetric('transferSize', resources[i].transferSize);
                            }
                        }
                    });
                };
            cfPerformanceFunc(cfImages);
        }());
    