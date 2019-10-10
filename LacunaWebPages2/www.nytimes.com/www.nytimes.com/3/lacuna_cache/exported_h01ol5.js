
        if (typeof testCookie === 'undefined') {
            var testCookie = function(name) {
                var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
                if (match) return match[1];
            }
        }
    