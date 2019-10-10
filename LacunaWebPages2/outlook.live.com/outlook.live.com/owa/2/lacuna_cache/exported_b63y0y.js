
        mscc.on("show", () => {
            $("body").attr("data-show-gdpr-banner", "true");
        });
        mscc.on("hide", () => {
            $("body").removeAttr("data-show-gdpr-banner");
        });
    