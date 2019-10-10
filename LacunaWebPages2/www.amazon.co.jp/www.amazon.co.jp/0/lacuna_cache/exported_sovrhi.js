
            (function(d) {___jdce_logger("lacuna_cache/exported_sovrhi.js", 14, 1631);
                document.createElement("header");

                function b(e) {___jdce_logger("lacuna_cache/exported_sovrhi.js", 95, 172);
                    return [].slice.call(e)
                }

                function c(f, e) {___jdce_logger("lacuna_cache/exported_sovrhi.js", 190, 339);
                    return {
                        m: f,
                        a: b(e)
                    }
                }
                var a = function(f) {___jdce_logger("lacuna_cache/exported_sovrhi.js", 364, 1404);
                    var g = {};
                    g._sourceName = f;
                    g._replay = [];
                    g.getNow = function(i, h) {___jdce_logger("lacuna_cache/exported_sovrhi.js", 516, 587);
                        return h
                    };

                    function e(i, h, j) {___jdce_logger("lacuna_cache/exported_sovrhi.js", 610, 793);
                        i[j] = function() {___jdce_logger("lacuna_cache/exported_sovrhi.js", 663, 771);
                            g._replay.push(h.concat(c(j, arguments)))
                        }
                    }
                    g.when = function() {___jdce_logger("lacuna_cache/exported_sovrhi.js", 823, 1152);
                        var i = [c("when", arguments)];
                        var h = {};
                        e(h, i, "run");
                        e(h, i, "declare");
                        e(h, i, "publish");
                        e(h, i, "build");
                        return h
                    };
                    e(g, [], "declare");
                    e(g, [], "build");
                    e(g, [], "publish");
                    e(g, [], "importEvent");
                    a._shims.push(g);
                    return g
                };
                a._shims = [];
                if (!d.$Nav) {
                    d.$Nav = a("rcx-nav")
                }
                if (!d.$Nav.make) {
                    d.$Nav.make = a
                }
            }(window));
            $Nav.importEvent('navbarJS-mobile');
            $Nav.declare('img.sprite', {
                'png32': 'https://images-fe.ssl-images-amazon.com/images/G/09/gno/sprites/new-nav-sm-smile-sprite-global-1x_blueheaven._CB496016393_.png',
                'png32-2x': 'https://images-fe.ssl-images-amazon.com/images/G/09/gno/sprites/new-nav-sm-smile-sprite-global-2x_blueheaven._CB496016393_.png'
            });
            window._navbarSpriteUrl = 'https://images-fe.ssl-images-amazon.com/images/G/09/gno/sprites/new-nav-sm-smile-sprite-global-1x_blueheaven._CB496016393_.png';
            $Nav.declare('img.pixel', 'https://images-fe.ssl-images-amazon.com/images/G/09/x-locale/common/transparent-pixel._CB386942697_.gif');
            var nav_t_after_preload_JS = +new Date();
        