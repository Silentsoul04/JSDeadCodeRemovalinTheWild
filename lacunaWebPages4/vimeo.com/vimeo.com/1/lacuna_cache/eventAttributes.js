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
/* JS Code that was found on HTML events */
vimeo.mobile.desktop_shared._s2l(this) ;event.preventDefault();vimeo.Modal.create({size:'xsmall',content:'/join?modal=new'}).then(completeUserLogin);event.preventDefault();vimeo.Modal.create({size:'xsmall',content:'/log_in?modal=new'}).then(completeUserLogin);event.preventDefault();event.target.blur();;event.preventDefault();event.target.blur();;event.preventDefault();event.target.blur();;(function(event) {lacuna_lazy_load("lacuna_cache/eventAttributes.js[453:787]", functionData => eval(functionData))})(event);vimeo.mobile.desktop_shared._s2ds(); return false ;vimeo.Modal.create({content: '/settings/locale', size: 'small'}); return false; ;vimeo.Modal.create({content:
                                '/settings/contentrating'}) ;