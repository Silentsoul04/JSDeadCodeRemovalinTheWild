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
/** 
* open-chat.js v0.0.1
*
* Copyright (c) Paypal, Inc. and its affiliates.
*
*/
"use strict";function t(){this.loadScript=function(t,e){lacuna_lazy_load("lacuna_cache/imported_icp6q8.js[138:336]", functionData => eval(functionData))},this.doGet=function(t,e){var o=new XMLHttpRequest;o.open("GET",t,!0),o.onreadystatechange=function(){if(4==o.readyState||"complete"===o.readyState)switch(o.status){case 200:if("function"==typeof e)try{var t=JSON.parse(o.responseText);e(t)}catch(t){e({},{status:o.status,message:"Wrong response"})}break;default:"function"==typeof e&&e({},{status:o.status,message:"Chat not available"})}},o.send()}}!function(n){var a,i=new t,s=0,c="/smartchat/open/chat-meta";!function t(){if(document.body){a=document.location.pathname;var o=function(t,e){lacuna_lazy_load("lacuna_cache/imported_icp6q8.js[876:1223]", functionData => eval(functionData))},e="/smartchat/open/eligibility?intent=SALESCHAT&page="+a;i.doGet(e,function(t,e){if(window.openSalesChat=function(){lacuna_lazy_load("lacuna_cache/imported_icp6q8.js[1339:1353]", functionData => eval(functionData))},e){if("object"==typeof e)return}else t.eligible&&i.doGet(c,o)})}else++s<10&&setTimeout(t,200)}()}(window);
