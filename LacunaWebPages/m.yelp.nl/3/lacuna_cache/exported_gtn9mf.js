
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
            main("mobile_site", "296a65d2d7c9a44a95cdb7aed94b4c2f73c8f794");
        })();
    