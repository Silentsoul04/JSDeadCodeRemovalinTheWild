
        if (typeof raptor !== "undefined" && raptor.require) {
            var Uri = raptor.require("ebay/legacy/utils/Uri");
            $uri = function(href) {
                return new Uri(href);
            };
            window.raptor.extend(window.raptor, require("ebay/legacy/adaptor-utils"));
        }
    