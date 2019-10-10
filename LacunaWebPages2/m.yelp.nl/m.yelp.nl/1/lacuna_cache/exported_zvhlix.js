
        (function() {
            var main = null;

            main = function(serviceName, sha) {
                window.yelp_react = {
                    serviceName: serviceName,
                    sha: sha
                };
            };

            if (main === null) {
                throw 'invalid inline script, missing main declaration.';
            }
            main("mobile_site", "952104dd24f2a1d23a195e0d36e853166e9a0e9b");
        })();
    