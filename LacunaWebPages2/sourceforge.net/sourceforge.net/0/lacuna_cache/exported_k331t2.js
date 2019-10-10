
                        /*global googletag */
                        if (SF.initial_breakpoints_visible.leaderboard) {
                            (function() {

                                var el = document.getElementById('SF_HP_728x90_B_wrapped');
                                var newNode = document.createElement('div');
                                newNode.id = 'div-gpt-ad-1392148208790-0';
                                el.appendChild(newNode);
                            }());

                            gptadRenderers['SF_HP_728x90_B'] = function() { // jshint ignore:line

                                if (!SF.adblock) {
                                    $('#div-gpt-ad-1392148208790-0').parents('.draper').css("min-height", 90 + 13); // 13 for height of .lbl-ad
                                }

                                googletag.cmd.push(function() {
                                    googletag.display('div-gpt-ad-1392148208790-0');
                                });
                            };
                            gptadRenderers['SF_HP_728x90_B'](); // jshint ignore:line
                        }
                    