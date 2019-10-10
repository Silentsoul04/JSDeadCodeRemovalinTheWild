Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.pageLimit = 100;
    Bootstrapper.currentPageCount = 0;
    var originalInsertScript = Bootstrapper.insertScript;
    Bootstrapper.insertScript = function(src, dedupe, data, useCacheBuster) {
        if (src.indexOf(Bootstrapper.ensightenOptions.staticJavascriptPath) > -1) {
            if (Bootstrapper.currentPageCount < Bootstrapper.pageLimit) {
                originalInsertScript.call(Bootstrapper, src, dedupe, data, useCacheBuster);
                Bootstrapper.currentPageCount++
            }
        } else originalInsertScript.call(Bootstrapper, src, dedupe, data, useCacheBuster)
    }
}, 879098, 318540);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.deploymentLimit = 100;
    Bootstrapper.currentDeploymentCount = 0;
    var originalBindImmediate = Bootstrapper.bindImmediate;
    var originalBindDomParsed = Bootstrapper.bindDomParsed;
    var originalBindDomLoaded = Bootstrapper.bindDomLoaded;
    var originalbindDependencyImmediate = Bootstrapper.bindDependencyImmediate;
    var originalbindDependencyDOMLoaded = Bootstrapper.bindDependencyDOMLoaded;
    var originalbindDependencyDOMParsed = Bootstrapper.bindDependencyDOMParsed;

    function hijackFunction(originalFn) {
        return function() {
            if (arguments[1] !== -1) {
                if (Bootstrapper.currentDeploymentCount < Bootstrapper.deploymentLimit) {
                    originalFn.apply(Bootstrapper, arguments);
                    Bootstrapper.currentDeploymentCount++
                }
            } else originalFn.apply(Bootstrapper, arguments)
        }
    }
    Bootstrapper.bindImmediate = hijackFunction(originalBindImmediate);
    Bootstrapper.bindDomParsed = hijackFunction(originalBindDomParsed);
    Bootstrapper.bindDomLoaded =
        hijackFunction(originalBindDomLoaded);
    Bootstrapper.bindDependencyImmediate = hijackFunction(originalbindDependencyImmediate);
    Bootstrapper.bindDependencyDOMParsed = hijackFunction(originalbindDependencyDOMLoaded);
    Bootstrapper.bindDependencyDOMLoaded = hijackFunction(originalbindDependencyDOMLoaded)
}, 886749, 318581);