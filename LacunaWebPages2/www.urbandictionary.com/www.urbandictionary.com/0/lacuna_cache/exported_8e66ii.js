
        //<![CDATA[
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var param = getParameterByName("test", window.location.href);
        if (param) {
            var elements = document.getElementsByTagName('a');
            for (var i = 0; i < elements.length; i++) {
                var href = elements[i].getAttribute('href');
                if (href && (href.indexOf('/define.php') > -1 || href.indexOf('/category.php') > -1)) {
                    if (href.indexOf('?') > -1) {
                        elements[i].setAttribute('href', href + '&test=' + encodeURIComponent(param));
                    } else {
                        elements[i].setAttribute('href', href + '?test=' + encodeURIComponent(param));
                    }
                }
            }

            var elements = document.getElementsByClassName(param);
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('hide');
            }
        }

        //]]>
    