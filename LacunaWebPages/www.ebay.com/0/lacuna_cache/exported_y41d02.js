 window.addEventListener('load', function() { if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistration('/p').then(function(existingReg) { if (existingReg) { existingReg.update(); } else { navigator.serviceWorker.register('https://www.ebay.com/sw.js', { scope: '/p' }).catch(function(ex) { /** TODO: tracking **/ }); } }); } }); 