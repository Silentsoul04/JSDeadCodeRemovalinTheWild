
        if (!window.RadWidget) {
            window.RadWidget = {
                registerReactWidgetInstance: function(input) {
                    window.RadWidget[input.widgetName] = window.RadWidget[input.widgetName] || [];
                    window.RadWidget[input.widgetName].push({
                        id: input.instanceId,
                        props: JSON.stringify(input.model)
                    })
                },
                getReactWidgetInstances: function(widgetName) {
                    return window.RadWidget[widgetName] || []
                }
            };
        }
    