
        function setCookieUkid(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.tribunnews.com;path=/;";
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var ukid_cookie = JSON.parse(xhttp.responseText);
                setCookieUkid('ukid', ukid_cookie.ukid, 365);
            }
        };
        xhttp.open("GET", "https://apis.kompas.com/api/activity/user", true);
        xhttp.send();
    