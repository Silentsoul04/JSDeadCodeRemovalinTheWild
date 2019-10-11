
        if (!window.RadWidget) {
            window.RadWidget = {
                registerReactWidgetInstance: function(input) {___jdce_logger("lacuna_cache/exported_lonjwv.js", 112, 436);
                    window.RadWidget[input.widgetName] = window.RadWidget[input.widgetName] || [];
                    window.RadWidget[input.widgetName].push({
                        id: input.instanceId,
                        props: JSON.stringify(input.model)
                    })
                },
                getReactWidgetInstances: function(widgetName) {___jdce_logger("lacuna_cache/exported_lonjwv.js", 479, 581);
                    return window.RadWidget[widgetName] || []
                }
            };
        }
    