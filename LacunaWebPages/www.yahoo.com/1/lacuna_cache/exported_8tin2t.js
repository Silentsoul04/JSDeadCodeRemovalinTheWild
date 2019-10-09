
                    var Y = window.Y || {};
                    if (window.VideoManager) {
                        Y.videoManagerMobileCards = new VideoManager({
                            autoplay: (0 === 1),
                            adautoplay: (1 === 1),
                            adclickhandler: (1 === 1),
                            contentLinkTarget: '.js-content-viewer',
                            device: 'smartphone',
                            expBucket: 'FPVIDBACK01,FPRIVEN02',
                            expName: 'advance',
                            expType: 'fp-video-inline',
                            html5: true,
                            lang: 'en-US',
                            loop: false,
                            mute: true,
                            nielsenEnabled: '',
                            preloadPlayerJS: (0 === 1),
                            playerJsUrl: 'https://yep.video.yahoo.com/js/3/videoplayer-min.js?r=nextgen-mobile',
                            pageSpaceId: '1197228339',
                            region: 'US',
                            renderBatchSize: 3,
                            singleVideo: (0 === 1),
                            site: 'fp',
                            stopBufferingOnPause: (1 === 0),
                            swapSelector: '.js-video-target',
                            transferSize: 64000,
                            videosContainer: '#MainView',
                            isUserConnectionCellular: '',
                            videoAdsOnCellular: 1,
                            videoAdsMinBandwidth: 2,
                            videoStreamRapidEnabled: '1'
                            ,veModulePath: 'https://s.yimg.com/rb/screwdriver/ctv/ve-module/builds/prod/dist/bundle.js'
                            ,livestreamParams: '{"featuredVideoNFLSportsTitle":"config.category=nfl_sports&config.headerMarkupOnly=true&config.i13n.slk=video_livestream_start","featuredVideoSportsTitle":"config.category=sportsreel&config.headerMarkupOnly=true&config.i13n.slk=video_livestream_complete"}'
                        });
                    }
                