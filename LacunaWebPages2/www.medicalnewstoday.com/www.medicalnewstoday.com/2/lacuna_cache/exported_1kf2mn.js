
        glob_JS = (typeof glob_JS === 'undefined') ? {
            'GAInit': [],
            'GA': [],
            "ExternalJS": [],
            "AD": []
        } : glob_JS;

        glob_TrueOnGDPR = (glob_mntcookie != 1);

        //if use GDPR is true, we need this flag to make sure ga queue can ber execute after ga is ready
        glob_isGaReady = !glob_TrueOnGDPR;



        if (typeof fireOrSaveGoogleAdFunctions === 'undefined') {



            function fireOrSaveGoogleAdFunctions(adFunction) {___jdce_logger("lacuna_cache/exported_1kf2mn.js", 459, 1008);

                if (!glob_TrueOnGDPR) {

                    adFunction();

                } else {

                    if (typeof fireOrSaveGoogleADs === 'undefined') {
                        //save ad event in queue
                        glob_JS.AD.push(adFunction);
                    } else {
                        //let next function to determine save or fire ad function
                        fireOrSaveGoogleADs(adFunction);

                    }
                }

            }

            function fireOrSaveJsFunctions(jsType, jsFunction) {___jdce_logger("lacuna_cache/exported_1kf2mn.js", 1022, 2714);

                if (!glob_TrueOnGDPR && jsType != 0) {
                    //if GDPR already accept, and func type is not ga event, just exec

                    jsFunction()

                } else if (!glob_TrueOnGDPR && jsType === 0) {
                    //for ga event only

                    if (glob_isGaReady) {
                        //if ga ready, call the function
                        jsFunction();
                    } else {
                        //if user accept GDPR, but ga not ready, still push new command into queue
                        glob_JS.GA.push(jsFunction);

                    }

                } else {

                    if (jsType < 0) {
                        jsType = 'GAInit'
                    } else if (jsType == 0) {
                        jsType = 'GA';
                    } else {
                        jsType = 'ExternalJS';
                    }

                    if (typeof fireJS === 'undefined') {
                        //save ad event in queue


                        if (jsType == 'GAInit') {

                            glob_JS.GAInit.push(jsFunction);

                        } else if (jsType == 'GA') {

                            glob_JS.GA.push(jsFunction);
                        } else {
                            //default is other js
                            glob_JS.ExternalJS.push(jsFunction);
                        }


                    } else {
                        //let next function to determine save or fire ad function
                        fireJS(jsType, jsFunction);

                    }
                }
            }



            function loadScript(url, parameters, callback) {___jdce_logger("lacuna_cache/exported_1kf2mn.js", 2730, 3910);



                var script = document.createElement("script");
                script.type = "text/javascript";


                //add custom attribute
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        script.setAttribute(key, parameters[key]);
                    }
                }


                if (script.readyState) { //IE
                    script.onreadystatechange = function() {___jdce_logger("lacuna_cache/exported_1kf2mn.js", 3242, 3528);
                        if (script.readyState == "loaded" ||
                            script.readyState == "complete") {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else { //Others
                    script.onload = function() {___jdce_logger("lacuna_cache/exported_1kf2mn.js", 3600, 3764);

                        if (typeof callback === 'function') {
                            callback();
                        }

                    };
                }

                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
            }



        }
    