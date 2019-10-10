
                        (function() {
                            try {
                                var js = (document.querySelector("#wml-header-data") ||
                                    {}).innerHTML;
                                var json = js ? JSON.parse(js) : null;
                                _wml.headerConfig = json;
                            } catch (e) {}
                        })();
                    