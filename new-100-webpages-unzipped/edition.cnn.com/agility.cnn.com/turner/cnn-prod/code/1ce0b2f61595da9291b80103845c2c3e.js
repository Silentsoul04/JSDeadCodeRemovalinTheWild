Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                return Bootstrapper.ensightenOptions.publishPath + " - " + Bootstrapper.ensightenOptions.generatedOn
            },
            load: "instance",
            trigger: Bootstrapper.data.immediateTrigger,
            dataDefName: "ADBP - codeversion",
            collection: "ADBP",
            source: "Manage",
            priv: "false"
        }, {
            id: "8909"
        })
    }, 8909)
}, -1, -1);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                var host = location.hostname,
                    path = location.pathname;
                return host + path
            },
            transform: function(val) {
                return val ? val : ""
            },
            load: "instance",
            trigger: Bootstrapper.data.immediateTrigger,
            dataDefName: "ADBP - URL",
            collection: "ADBP",
            source: "Manage",
            priv: "false"
        }, {
            id: "50215"
        })
    }, 50215)
}, -1, -1);