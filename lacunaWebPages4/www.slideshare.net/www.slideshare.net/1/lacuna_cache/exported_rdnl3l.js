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

        $(window).load(function() {lacuna_lazy_load("lacuna_cache/exported_rdnl3l.js[35:315]", functionData => eval(functionData))});
        // Slideshare Object

        slideshare_object.add_signin_link('a.j-favorite');
        slideshare_object.add_login_source('a.j-favorite', 'homepage.popup.like');
        slideshare_object.add_login_source('a.j-save', 'homepage.popup.download');
        slideshare_object.addSigninFrom('.j-favorite', 'favorite');
        slideshare_object.bindToModalLogin('.j-favorite');
        slideshare_object.bindToModalLogin('.j-save');

        slideshare_object.bind_favorites('body');


        var gaCat = "homepage_loggedout";

        slideshare_object.ga(gaCat, 'pageload', null, null, true);

        $(document).ready(function() {lacuna_lazy_load("lacuna_cache/exported_rdnl3l.js[956:5528]", functionData => eval(functionData))});
    