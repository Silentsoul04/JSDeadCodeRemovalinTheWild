
                    ! function(a) {
                        a.getData = function(t, o) {
                            var r, i, e, n = "export",
                                l = t.split("."),
                                u = l.length;
                            if (u > 1) {
                                for (r = a[n] || {}, i = 0; i < u; i++)
                                    if (void 0 === (r = r[l[i]])) return void 0 === r ? o : r;
                                return void 0 === r ? o : r
                            }
                            return n = "export", void 0 === (e = a && a[n] && a[n][t]) ? o : e
                        }, a.dataCallbacks = a.dataCallbacks || [], a.subscribeData = function(t) {
                            a["export"] ? t() : a.dataCallbacks.push(t)
                        }
                    }(home);
                