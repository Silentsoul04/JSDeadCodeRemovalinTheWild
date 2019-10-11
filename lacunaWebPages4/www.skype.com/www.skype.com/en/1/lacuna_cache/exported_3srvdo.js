
        var pageName = "static/new";
        var config = {
            isLoggedIn: (sessionStorage.profile !== undefined),
            shareAuthStatus: true,
            authMethod: 1,
            autoCapture: {
                pageView: true,
                onLoad: true,
                onUnload: true,
                scroll: true,
                resize: true,
                lineage: true,
                click: true
            },
            coreData: {
                appId: "scom",
                env: "prod",
                pageName: pageName
            }
        };
        awa.init(config);
    