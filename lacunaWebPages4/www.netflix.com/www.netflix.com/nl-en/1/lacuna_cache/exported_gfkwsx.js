
        if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {___jdce_logger("lacuna_cache/exported_gfkwsx.js", 149, 406);
                if (registrations) {
                    registrations.forEach(function(registration) {___jdce_logger("lacuna_cache/exported_gfkwsx.js", 254, 372);
                        registration.unregister().catch(function() {___jdce_logger("lacuna_cache/exported_gfkwsx.js", 335, 348);});
                    });
                }
            }).catch(function() {___jdce_logger("lacuna_cache/exported_gfkwsx.js", 414, 427);});
        }
    