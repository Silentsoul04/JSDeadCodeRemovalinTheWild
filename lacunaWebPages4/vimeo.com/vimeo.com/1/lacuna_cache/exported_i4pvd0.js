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

                // DO NOT REMOVE. This is a callback for the login & join buttons in TopNavBuilder.
                function completeUserLogin(response) {lacuna_lazy_load("lacuna_cache/exported_i4pvd0.js[154:301]", functionData => eval(functionData))ow.location.reload();
                    }
                lacuna_lazy_load("lacuna_cache/exported_i4pvd0.js[359:932]", functionData => eval(functionData))         content: '/join?modal=new&redirect=/upload',
                        });
                    }
                }
            