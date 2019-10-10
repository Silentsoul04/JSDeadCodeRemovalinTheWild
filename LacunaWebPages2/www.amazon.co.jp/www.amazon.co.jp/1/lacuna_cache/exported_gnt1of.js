// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

            (function(d) {lacuna_lazy_load("lacuna_cache/exported_gnt1of.js[26:1631]", functionData => eval(functionData))  };
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
        