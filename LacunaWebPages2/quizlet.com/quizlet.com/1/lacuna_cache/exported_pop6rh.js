
        (function() {___jdce_logger("lacuna_cache/exported_pop6rh.js", 10, 948);
            var ajax = new XMLHttpRequest();
            ajax.open('GET', "\/a\/i\/icons.230cde7c9f063a4.svg");
            ajax.send();
            ajax.onload = function() {___jdce_logger("lacuna_cache/exported_pop6rh.js", 186, 937);
                if (ajax.status === 404) return Rollbar.error('Error fetching SVG sprite sheet (not found)');
                else if (ajax.status !== 200) return Rollbar.warning('Error fetching SVG sprite sheet (bad response)', {
                    code: ajax.status
                });
                var div = document.createElement('div');
                div.style.display = 'none';
                div.innerHTML = ajax.responseText;
                var waitForBody = setInterval(function() {___jdce_logger("lacuna_cache/exported_pop6rh.js", 686, 917);
                    if (document.body) {
                        clearInterval(waitForBody);
                        document.body.insertBefore(div, document.body.childNodes[0]);
                    }
                }, 10);
            };
        })();
    