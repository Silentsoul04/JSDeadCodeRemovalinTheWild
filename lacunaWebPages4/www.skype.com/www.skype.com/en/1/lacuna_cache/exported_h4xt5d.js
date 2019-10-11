
            var expiresIn = sessionStorage.getItem('cacheExpiration');
            if (Date.now() >= expiresIn) {
                sessionStorage.removeItem("skypeToken");
                sessionStorage.removeItem("signinName");
                sessionStorage.removeItem("skypeTokenTimestamp");
                sessionStorage.removeItem("cacheExpiration");
                var timestamp = Date.now();
                var iframe = document.getElementById('skypeToken815617');
                if (iframe) {
                    iframe.setAttribute("name", "skypeToken815617" + timestamp);
                    iframe.setAttribute("id", "skypeToken815617" + timestamp);
                    iframe.src = "https://a.lw.skype.com/login/silent?client_id=815617&response_type=postmessage&redirect_uri=https://www.skype.com&timestamp=" + timestamp;
                }
            }
        