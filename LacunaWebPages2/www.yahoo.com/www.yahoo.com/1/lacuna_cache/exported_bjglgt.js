
                var Y = window.Y || {};
                var smadConfig = {};
                if (!!1) {
                    smadConfig = {
                        smad: {
                            enabled: 1,
                            enablesmAdDedupe: 0,
                            adFloorPrice: '3',
                            adServiceEndpointEnabled: '',
                            adCluster: 'true',
                            playableMoments: '',
                            flashSales: 'true',
                            flashSaleText: '1780595:Tune in,1780615:Tune in,1780616:Tune in',
                            flashSaleDynamicMoments: '1',
                            buttonColor: '20122:#F88C38,1088864:#78DCFF,1436571:#284B55,1606406:#CA1F14,1444695:#369A44,1700492:#C02136,1710372:#188D00,1778070:#22C0DD,1793518:#F40008',
                            portraitBackgroundImages: '1655255:https://s.yimg.com/cv/apiv2/spons/SM_Carousel_Dynamic1_ios_copy_720_X_1280.jpg,1606406:https://s.yimg.com/cv/apiv2/spons/Macys_DynamicMoments_Macys_AlwaysOn.png',
                            indicatorColor: '20122:#F88C38,1088864:#78DCFF,1436571:#284B55,1606406:#CA1F14,1700492:#C02136,1710372:#188D00,1778070:#22C0DD,1793518:#F40008',
                            containerSize: '',
                            nextAdCallDelay: 500,
                            sectionId: {
                                entertainment: 5560361,
                                finance: 5556938,
                                lifestyle: 5560361,
                                sports: 5556937
                            },
                            siteBlackList: "gma",
                            spaceidBlackList: '',
                            touchPoints: '1',
                            fallbackEnabled: '',
                            adFormats: '',
                            type: 'STRM,STRM_VIDEO',
                            viewMaxLimit: 20
                        }
                    };
                }
                if (Y.CaasViewer) {
                    Y.caasViewerI = new Y.CaasViewer({
                        aboveFoldModList: ["applet_p_50000291:breakingnews","applet_p_50000313:ntk","applet_p_50000314:stream","applet_p_50000325:toaster"],
                        ads: smadConfig,
                        appType: 'default',
                        bucket: 'MFPTOAST02,FPRIVEN02',
                        comscoreBaseUrl: 'https://sb.scorecardresearch.com/p?c1=2&c2=7241469&ns_c=UTF-8&c14=-1',
                        comscoreBeaconUri: '/pageview/',
                        device: 'smartphone',
                        editorialPromoModule: '',
                        enableCaaSOathPlayer: 0,
                        enableCaaSSidekick: 0,
                        enableCaaSVerticalVideo: 1,
                        enableCaaSVideoDocking: 1,
                        enableCaaSVideoLightbox: 0,
                        enableRecommendedVideos: 0,
                        enableViewerLinkOpenViewer: 1,
                        forceLrec2: 0,
                        headerClosesViewer: 1,
                        enableMonAds: 1,
                        enableDisplayAds: 1,
                        enablePrefetch: 1,
                        extraSiteAttribute: '',
                        hideCommentsForSlick: 1,
                        infoBeaconUri: '/p.gif',
                        lang: 'en-US',
                        prefetchBatchSize: 20,
                        region: 'US',
                        relatedContentModules: 0,
                        rid: '9sm8t6hepu37t',
                        site: 'fp',
                        xhrPath: '/tdv2_fp/remote',
                        xhrUri: '/fpjs/viewer/'
                    });
                }
            