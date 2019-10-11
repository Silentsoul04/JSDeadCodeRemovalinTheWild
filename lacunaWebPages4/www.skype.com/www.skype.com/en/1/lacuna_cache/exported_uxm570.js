
        skypeArtemis.addSettings({
            skypeLazyLoadActive: true
        });
        if (window.skypeLazyGravity && typeof window.skypeLazyGravity.init === "function") {
            window.skypeLazyGravity.init([".lazyLoad", ".promo-image"]);
        }
    