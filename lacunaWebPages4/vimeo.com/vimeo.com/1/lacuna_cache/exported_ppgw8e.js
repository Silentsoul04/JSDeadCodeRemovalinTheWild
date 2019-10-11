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

        var date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        document.cookie = 'vuid=' + encodeURIComponent('1467615771.1874609968') + ';domain=.vimeo.com;path=/;expires= ' + date.toGMTString();
        var playerAssetUrls = {
            "barebone_js": "https:\/\/f.vimeocdn.com\/p\/3.14.45\/js\/barebone.js",
            "js": "https:\/\/f.vimeocdn.com\/p\/3.14.45\/js\/player.js",
            "chromeless_css": "https:\/\/f.vimeocdn.com\/p\/3.14.45\/css\/chromeless.css",
            "chromeless_js": "https:\/\/f.vimeocdn.com\/p\/3.14.45\/js\/chromeless.js",
            "css": "https:\/\/f.vimeocdn.com\/p\/3.14.45\/css\/player.css",
            "player_url": "player.vimeo.com"
        };

        var _extend = function() {lacuna_lazy_load("lacuna_cache/exported_ppgw8e.js[774:1010]", functionData => eval(functionData)) && (r[a] = t[a])
            }
            return r
        };

        window = _extend(window, {
            "vimeo_esi": {
                "config": {
                    "route": "Vimeo\\Controller\\Mobile\\HomeController:main",
                    "controller": "Vimeo\\Controller\\Mobile\\HomeController",
                    "autocomplete_enabled": true,
                    "onsite_referrer": false
                }
            },
            "ablincoln_config": {
                "user": {
                    "vuid": "1467615771.1874609968",
                    "cuid": null,
                    "language": "en",
                    "location": "NL",
                    "logged_in": 0,
                    "is_mobile": true
                },
                "disabled": false
            },
            "vimeo": {
                "xsrft": "6795bec7d4e0735e0b571ca220308156760d6c69.nh4phxuc13.1570705409",
                "qualifies_for_gdpr": true,
                "config": {
                    "cart": {
                        "cart_content": {
                            "stock": {
                                "store": "stock",
                                "version": 1,
                                "quantities": [],
                                "items": [],
                                "attributes": [],
                                "currency": "EUR",
                                "items_sorted_by_index": [],
                                "items_count": 0
                            }
                        }
                    }
                }
            }
        });
    