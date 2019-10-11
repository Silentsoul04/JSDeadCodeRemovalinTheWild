// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        var rapidPageConfig = {
            rapidEarlyConfig : {"compr_type":"deflate","tracked_mods":[],"spaceid":1197228339,"click_timeout":300,"track_right_click":false,"apv":true,"apv_time":0,"async_all_clicks":false,"compr_on":true,"yql_host":"udc.yahoo.com","yql_path":"\/v2\/public\/yql","test_id":"MFPTOAST02,FPRIVEN02","client_only":0,"pageview_on_init":true,"perf_navigationtime":2,"addmodules_timeout":300,"extendbcookie":false,"keys":{"_rid":"9sm8t6hepu37t","mrkt":"us","pt":"home","site":"fp","ver":"ss","uh_vw":0,"colo":"bf1","navtype":"server"},"dwell_on":true,"viewability":true,"tracked_mods_viewability":{"applet_p_50000372":"hd","applet_p_50000291":"app-brea","applet_p_50000313":"strm","applet_p_50000314":"strm","applet_p_50000325":"toaster"}},
            rapidConfig: {"compr_type":"deflate","tracked_mods":[],"spaceid":1197228339,"click_timeout":300,"track_right_click":false,"apv":true,"apv_time":0,"async_all_clicks":false,"compr_on":true,"yql_host":"udc.yahoo.com","yql_path":"\/v2\/public\/yql","test_id":"MFPTOAST02,FPRIVEN02","client_only":0,"pageview_on_init":false,"perf_navigationtime":2,"addmodules_timeout":300,"extendbcookie":false,"keys":{"_rid":"9sm8t6hepu37t","mrkt":"us","pt":"home","site":"fp","ver":"ss","uh_vw":0,"colo":"bf1","navtype":"server"},"dwell_on":true,"viewability":true,"tracked_mods_viewability":{"applet_p_50000372":"hd","applet_p_50000291":"app-brea","applet_p_50000313":"strm","applet_p_50000314":"strm","applet_p_50000325":"toaster"}},
            rapidSingleInstance: 1
        };
                var avpRapidCallBack = function(apvObj) {lacuna_lazy_load("lacuna_cache/exported_70zgm5.js[1598:2092]", functionData => eval(functionData))};
        rapidPageConfig.rapidConfig.apv_callback = avpRapidCallBack;
        
        try {
            if (YAHOO && YAHOO.i13n && YAHOO.i13n.Rapid) {
                YAHOO.i13n.WEBWORKER_FILE = '/lib/metro/g/myy/rapidworker_1_2_0.0.38.js';
            }
        } catch (e) {}
        