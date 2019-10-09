

window.addEventListener('load', function(){

    function getFB_GOOLE_trackJs(url){
        var ele = document.createElement('script');
        ele.async = !0;
        ele.src = url;
        document.head.appendChild(ele);
    }
    getFB_GOOLE_trackJs('https://connect.facebook.net/en_US/fbevents.js');
    getFB_GOOLE_trackJs('https://www.googletagmanager.com/gtag/js?id=AW-968167707')
})

// fb全局埋点方法
! function (f, b, e, v, n, t, s) {
     if (f.fbq) return;
     n = f.fbq = function () {
         n.callMethod ?
         n.callMethod.apply(n, arguments) : n.queue.push(arguments)
     };
     if (!f._fbq) f._fbq = n;

     n.push = n;
     n.loaded = !0;
     n.version = '2.0';
     n.queue = [];

 }(window, document, 'script');
 // Insert Your Custom Audience Pixel ID below. 
 fbq('init', '2216359875254418'); 
 fbq('track', 'PageView');


// google 全局方法
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments)};
 gtag('js', new Date());

 gtag('config', 'AW-968167707');


//自定义方法
function gfbtrack(eventName, config, isConversion){

    var fbConfig =  Object.assign({
        content_name: config.title,
        content_category: config.category,
        content_ids: config.ids, 
        content_type: config.product,
        value: config.price,
        currency: config.currency,
        referrer: document.referrer, 
        userAgent: navigator.userAgent, 
        language: navigator.language
    }, config);

    var gtagConfig = Object.assign({
        ecomm_name: config.title || config.content_name,
        ecomm_category: config.category || config.content_category,
        ecomm_prodid: config.ids || config.content_ids, 
        ecomm_pagetype: config.product || config.content_type,
        ecomm_totalvalue: config.price || config.value
    }, config);
    
    fbq('track', eventName, fbConfig);
    gtag('event', eventName, gtagConfig);
    
    if(isConversion) {
        var conversionGtagConfig = Object.assign(gtagConfig, {'send_to': 'AW-968167707/f_L4CMzOw4UBEJui1M0D', 'transaction_id': ''});
        gtag('event', eventName, conversionGtagConfig);
    }
}
// gfbtrack('Purchase', {})
