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
"use strict";var Y=window.Y||{};var EVENT_POPSTATE="popstate";function isUndefined(a){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[85:108]", functionData => eval(functionData))}Y.History=function(a){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[129:237]", functionData => eval(functionData))};Y.History.prototype={on:function(a){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[273:343]", functionData => eval(functionData))},off:function(a){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[359:432]", functionData => eval(functionData))},getState:function(){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[452:509]", functionData => eval(functionData))},getUrl:function(){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[527:717]", functionData => eval(functionData))},pushState:function(d,f,c){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[743:1026]", functionData => eval(functionData))},replaceState:function(d,f,c){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[1055:1321]", functionData => eval(functionData))},setTitle:function(a){lacuna_lazy_load("lacuna_cache/imported_s9zgaa.js[1342:1406]", functionData => eval(functionData))}};/* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */
