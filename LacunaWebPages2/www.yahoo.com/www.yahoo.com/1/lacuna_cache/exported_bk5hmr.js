
        var rapidPageConfig = {
            rapidEarlyConfig : {"compr_type":"deflate","tracked_mods":[],"spaceid":1197228339,"click_timeout":300,"track_right_click":false,"apv":true,"apv_time":0,"async_all_clicks":false,"compr_on":true,"yql_host":"udc.yahoo.com","yql_path":"\/v2\/public\/yql","test_id":"MFPTOAST02,FPRIVEN02","client_only":0,"pageview_on_init":true,"perf_navigationtime":2,"addmodules_timeout":300,"extendbcookie":false,"keys":{"_rid":"9sm8t6hepu37t","mrkt":"us","pt":"home","site":"fp","ver":"ss","uh_vw":0,"colo":"bf1","navtype":"server"},"dwell_on":true,"viewability":true,"tracked_mods_viewability":{"applet_p_50000372":"hd","applet_p_50000291":"app-brea","applet_p_50000313":"strm","applet_p_50000314":"strm","applet_p_50000325":"toaster"}},
            rapidConfig: {"compr_type":"deflate","tracked_mods":[],"spaceid":1197228339,"click_timeout":300,"track_right_click":false,"apv":true,"apv_time":0,"async_all_clicks":false,"compr_on":true,"yql_host":"udc.yahoo.com","yql_path":"\/v2\/public\/yql","test_id":"MFPTOAST02,FPRIVEN02","client_only":0,"pageview_on_init":false,"perf_navigationtime":2,"addmodules_timeout":300,"extendbcookie":false,"keys":{"_rid":"9sm8t6hepu37t","mrkt":"us","pt":"home","site":"fp","ver":"ss","uh_vw":0,"colo":"bf1","navtype":"server"},"dwell_on":true,"viewability":true,"tracked_mods_viewability":{"applet_p_50000372":"hd","applet_p_50000291":"app-brea","applet_p_50000313":"strm","applet_p_50000314":"strm","applet_p_50000325":"toaster"}},
            rapidSingleInstance: 1
        };
                var avpRapidCallBack = function(apvObj) {
            try {
                var spaceid=YAHOO && YAHOO.i13n && YAHOO.i13n.SPACEID;
                if (1197228339 == spaceid) {
                   var img = new Image();
                   img.src = "/p.gif?beaconType=apv&sp=" + spaceid + "&device=smartphone&intl=us&pixel_pos=" + apvObj.pixel_pos + "&scroll_dir=" + apvObj.scroll_dir;
                }
            } catch (e) {}
            if (window.sdaAvpCallback) {
                window.sdaAvpCallback();
            }
        };
        rapidPageConfig.rapidConfig.apv_callback = avpRapidCallBack;
        
        try {
            if (YAHOO && YAHOO.i13n && YAHOO.i13n.Rapid) {
                YAHOO.i13n.WEBWORKER_FILE = '/lib/metro/g/myy/rapidworker_1_2_0.0.38.js';
            }
        } catch (e) {}
        