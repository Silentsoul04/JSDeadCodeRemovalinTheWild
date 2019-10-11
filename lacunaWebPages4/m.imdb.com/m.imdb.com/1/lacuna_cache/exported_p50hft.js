
                if (!window.RadWidget) {
                    window.RadWidget = {
                        registerReactWidgetInstance: function(input) {___jdce_logger("lacuna_cache/exported_p50hft.js", 136, 508);
                            window.RadWidget[input.widgetName] = window.RadWidget[input.widgetName] || [];
                            window.RadWidget[input.widgetName].push({
                                id: input.instanceId,
                                props: JSON.stringify(input.model)
                            })
                        },
                        getReactWidgetInstances: function(widgetName) {___jdce_logger("lacuna_cache/exported_p50hft.js", 559, 677);
                            return window.RadWidget[widgetName] || []
                        }
                    };
                }
            