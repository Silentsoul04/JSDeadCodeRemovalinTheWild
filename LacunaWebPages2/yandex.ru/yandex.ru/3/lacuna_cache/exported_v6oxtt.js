
                    var cb = function() {
                        if (!home.disabledLS && home && home.getData) {
                            var a = home.localStorage,
                                e = home.getData("i-yandexuid.data") || {},
                                l = e.cb_url,
                                s = function(e) {
                                    if (e.ls) {
                                        var s, o, t = "yandexuid" === e.ls.key ? "yu" : e.ls.key,
                                            d = e.ls.value,
                                            i = a.getItem(t) || null,
                                            n = (s = e.ls.key, (o = document.cookie.match(new RegExp(s + "=(\\d+)"))) && o[1]);
                                        if (i && e.prefix + n !== i.split(":")[0] || e.ls.force || !n) {
                                            var u = e.ls;
                                            u.old = n, e.ls.force || (u.value = i), $.ajax({
                                                url: l,
                                                data: u,
                                                type: "POST",
                                                dataType: "json",
                                                crossDomain: !0,
                                                xhrFields: {
                                                    withCredentials: !0
                                                },
                                                success: function(e) {
                                                    e.jsmda_url && BEM && BEM.blocks && BEM.blocks["i-mda-auth"] && (window.Lego || (window.Lego = {}), window.Lego.params || (window.Lego.params = {}), Lego.params["mda-auth-url"] = e.jsmda_url, BEM.blocks["i-mda-auth"].authenticate()), e.clean_ls && a.setItem(t, ""), e.update_ls && a.setItem(t, d)
                                                }
                                            })
                                        } else a.setItem(t, d)
                                    }
                                };
                            !e.ls && e.ls_data_url ? $.ajax({
                                dataType: "jsonp",
                                url: e.ls_data_url
                            }).then(function(a) {
                                e.ls = a, s(e)
                            }) : s(e)
                        }
                    };
                    "home" in window && home.loadManager ? home.loadManager.subscribe("js", cb) : $(cb);
                