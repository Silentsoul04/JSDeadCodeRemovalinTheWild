
            function displayError() {
                var e = document.getElementById("error__timeout"),
                    t = document.getElementById("header__loading");
                e && t && (e.className = "errorPage__inner", t.className = "sc-hidden")
            }
            setTimeout(displayError, 15e3), window.onerror = displayError
        