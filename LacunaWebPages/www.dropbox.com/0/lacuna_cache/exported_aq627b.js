
        /* global: ensemble is from ensemble_appshell.js */
        /* global: configureRequire comes from the
            fake_require_snippet (ui/page/script_tags.py) */
        /* global: addRequireLoadCallback comes from init_requirejs.ts */
        /* global: execTiers comes from require_init.ts */
        /* global: requirejs defined by alameda_bundle */
        ensemble.processChunk("dev-tools-pagelet", "done-1", function(){
        ensemble.setupPagelet("dev-tools-pagelet", "dev-tools-pagelet-placeholder", {"stylesheets": [], "delayRender": false, "html": "", "driver": "js_only", "name": "dev_tools__dev_tools_rpc"}, false,
            function () { addRequireLoadCallback(function() {
                execTiers(requirejs.config({"context": "ef6b87dccadfe4b8c076c5d823c4ef5bee7ae9f4"}), function () {}, []);
            })}
        )});
        