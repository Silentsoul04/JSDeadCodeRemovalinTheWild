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

(function(window, document){lacuna_lazy_load("lacuna_cache/exported_nq19bi.js[28:8567]", functionData => eval(functionData))bubble) {
            bubble.classList.add('on');
        }

        // And we attach hide the bubble
        avatar.addEventListener('mouseover', function() {___jdce_logger("lacuna_cache/exported_nq19bi.js", 7665, 7956);
            if (on_hover) return;

            on_hover = true;

            if (bubble) {
                bubble.classList.remove('on');
            }

            // Save removed state [1 means the user open the dropdown]
            store_user_message_settings(1);

        }, false);

        // Store status of user nav message (bubble closed [1], message hidden [2])
        function store_user_message_settings(value) {___jdce_logger("lacuna_cache/exported_nq19bi.js", 8059, 8549);
            var xhr = new XMLHttpRequest();

            xhr.open('POST', '/settings/nav');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('message_state=' + value + '&token=' + vimeo.xsrft);

            // Nothing to handle. We hope for the best in this case
            xhr.onload = function () {___jdce_logger("lacuna_cache/exported_nq19bi.js", 8524, 8538);};
        };

    }, 1000);
})(window, document);
