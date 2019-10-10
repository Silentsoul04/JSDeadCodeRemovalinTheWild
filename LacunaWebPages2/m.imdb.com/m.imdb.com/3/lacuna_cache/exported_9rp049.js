
                try {
                    window.lumierePlayer = window.lumierePlayer || {};
                    window.lumierePlayer.weblab = JSON.parse('{"IMDB_TV_REBRAND_212999":"T1","IMDB_VIDEO_PLAYER_162496":"C","IMDB_RELATED_VIDEOS_196868":"T1"}');
                } catch (error) {
                    if (window.ueLogError) {
                        window.ueLogError(error, {
                            logLevel: "WARN",
                            attribution: "videoplayer",
                            message: "Failed to parse weblabs for video player."
                        });
                    }
                }
            