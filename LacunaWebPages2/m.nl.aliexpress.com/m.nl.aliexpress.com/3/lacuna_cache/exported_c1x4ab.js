
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                    try {
                        navigator.serviceWorker.register("/sw-amp.js");
                    } catch (e) {}
                });
            }
        