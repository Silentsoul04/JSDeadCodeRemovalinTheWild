
                                    function onVimeoDomReady(e) {

                                        var parts = ('; ' + document.cookie).split('; vuid='),
                                            vuid_from_cookie = (parts.length == 2) ? parts.pop().split(';').shift() : '',
                                            _session_id = vuid_from_cookie,
                                            _sift = window._sift = window._sift || [];

                                        _sift.push(['_setAccount', '9fc40762c3']);

                                        _sift.push(['_setSessionId', _session_id]);
                                        _sift.push(['_trackPageview']);
                                        (function() {

                                            var gdprCookie = (document.cookie.match(/^(?:.*;)?\s*vimeo_gdpr_optin\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1];
                                            if (gdprCookie === '-1') {
                                                return;
                                            }

                                            function ls() {
                                                var e = document.createElement('script');
                                                e.type = 'text/javascript';
                                                e.async = true;
                                                e.src = 'https://f.vimeocdn.com/js_opt/vendor/siftscience/siftscience.1.0.min.js?DEV';
                                                var s = document.getElementsByTagName('script')[0];
                                                s.parentNode.insertBefore(e, s);
                                            }

                                            if (window.attachEvent) {
                                                window.attachEvent('onload', ls);
                                            } else {
                                                window.addEventListener('load', ls, false);
                                            }

                                        })();

                                        if (!vimeo.bypass_player_responsive_delegates) {
                                            vimeo.player_responsive_delegates = vimeo.player_responsive_delegates || {};
                                            vimeo.player_responsive_delegates.willOpenShareOverlay = vimeo.player_responsive_delegates.willOpenShareOverlay || function(id) {
                                                PlayerManager.pauseAllPlayers();
                                                vimeo.share.Popup(id);
                                                return false;
                                            };

                                            vimeo.player_responsive_delegates.willOpenLoginForm = vimeo.player_responsive_delegates.willOpenLoginForm || function(id, context) {
                                                if (typeof vimeo.Modal !== 'undefined') {
                                                    PlayerManager.pauseAllPlayers();

                                                    if (context) {
                                                        vimeo.Session.create({
                                                            player: 1,
                                                            clip_id: id,
                                                            context: context
                                                        });
                                                    } else {
                                                        vimeo.Session.create();
                                                    }

                                                    return false;
                                                }
                                            };

                                            if (PlayerManager) {
                                                PlayerManager.setDefaultDelegate(vimeo.player_responsive_delegates);
                                            }
                                        }

                                        if (PlayerManager) {
                                            PlayerManager.dispatchReadySignals();
                                        }

                                    }

                                    $(document).ready(onVimeoDomReady);
                                