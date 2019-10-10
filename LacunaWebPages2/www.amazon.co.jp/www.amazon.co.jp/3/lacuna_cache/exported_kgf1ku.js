
        (null            ue.tag(csmTag);

                                logMetric('fetchStart', resources[i].fetchStart);
                                logMetric('duration', resources[i].duration);
                                logMetric('transferSize', resources[i].transferSize);
                            }
                        }
                    });
                };
            cfPerformanceFunc(cfImages);
        }());
    