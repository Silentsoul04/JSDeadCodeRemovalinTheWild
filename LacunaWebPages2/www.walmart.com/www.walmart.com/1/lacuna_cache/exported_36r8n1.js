
        window._wml.seoTags = (function a(b) {
            if (!b) {
                return b
            }
            var c = {};
            for (var d in b) {
                var e = b[d];
                if (typeof e === "string") {
                    e = decodeURIComponent(e)
                } else if (e && typeof e === "object") {
                    e = a(e)
                }
                c[d] = e
            }
            return c
        })({
            "presets": {
                "og:type": "Website",
                "og:image": "http%3A%2F%2Fsphotos-b.xx.fbcdn.net%2Fhphotos-ash4%2F229244_10150189115584236_162217_n.jpg",
                "og:site_name": "Walmart.com",
                "fb:app_id": "105223049547814",
                "twitter:card": "summary",
                "twitter:image": "https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F616833885%2Fwalmart_logo_youtube_bigger.jpg",
                "twitter:site": "%40walmart"
            },
            "defaults": {
                "title": "Walmart.com"
            }
        });
    