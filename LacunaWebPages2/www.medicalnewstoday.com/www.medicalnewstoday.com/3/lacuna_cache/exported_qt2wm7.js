
        var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var viewportOrientation = viewportWidth > viewportHeight ? 'landscape' : 'portrait';
        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 331, 412);
            ga('set', 'dimension19', viewportOrientation);
        });
        switch (true) {
            case viewportWidth > 480:
                var viewportBreakpoint = 'Mobile - XL';
                break;
            case viewportWidth > 360:
                var viewportBreakpoint = 'Mobile - L';
                break;
            case viewportWidth > 340:
                var viewportBreakpoint = 'Mobile - M';
                break;
            case viewportWidth > 320:
                var viewportBreakpoint = 'Mobile - S';
                break;
            default:
                var viewportBreakpoint = 'Mobile - XS';
        }

        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 1025, 1105);
            ga('set', 'dimension20', viewportBreakpoint);
        });

        var existUserId = false;
        var vanillaAjax = function(url, httpMethod, data, headerJsonString) {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 1168, 2530);

            var request = new XMLHttpRequest();


            request.open(httpMethod, url, true);


            //set header if exist
            try {
                var headerObj = JSON.parse(headerJsonString);

                for (var headerName in headerObj) {

                    //optional check for properties from prototype chain
                    if (headerObj.hasOwnProperty(headerName)) {
                        //no a property from prototype chain

                        var headerValue = headerObj[headerName];
                        request.setRequestHeader(headerName, headerValue);

                    }
                }

            } catch (e) {
                console.log("Set datadog api header failed");
                //don't set header if something wrong;
            }




            request.onload = function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 2061, 2365);

                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    var resp = request.responseText;

                } else {
                    // We reached our target server, but it returned an error

                }
            };

            request.onerror = function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 2398, 2485);
                // There was a connection error of some sort
            };

            request.send(data);

        };



        function getUrlVars(targetField) {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 2543, 2964);
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                function(m, key, value) {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 2701, 2783);
                    vars[key] = value;
                });

            if (typeof vars[targetField] !== "undefined") {

                return vars[targetField];

            } else {

                return "";
            }

        }


        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 3000, 3078);
            ga('set', 'dimension35', getUrlVars("tc"));
        });
        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 3114, 3195);
            ga('set', 'dimension36', getUrlVars("subid"));
        });
        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 3231, 3313);
            ga('set', 'dimension37', getUrlVars("subid2"));
        });
        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 3349, 3430);
            ga('set', 'dimension38', getUrlVars("apsid"));
        });


        //set dimension34 value if exist

        if (existUserId) {

            fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 3542, 3623);
                ga('set', 'dimension34', existUserId);
            });

        } else if (getUrlVars("apid")) {

            fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 3706, 3794);
                ga('set', 'dimension34', getUrlVars("apid"));
            });

            vanillaAjax("/account/message-session-setter.php", "POST", "activation_platform_user_id=" + getUrlVars("apid"), "{\"Content-type\":\"application/x-www-form-urlencoded\"}");

        }

        //will be called from newsletter register.
        function setUserId(userId) {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 4054, 4145);

            ga('set', 'dimension34', "" + userId);

        }



        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 4182, 4438);
            ga('set', {
                'dimension1': "no",
                'dimension2': "homepage",
                'dimension3': "None",
                'dimension6': "mobile",
                'dimension17': "7721"
            });
        });

        if (window.devicePixelRatio) {
            var pixelRatio = (window.devicePixelRatio >= 1.5) ? "HiDPI" : "1X";
            fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 4598, 4677);
                ga('set', 'dimension7', pixelRatio);
            });
        }

        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 4724, 4792);
            ga('set', 'dimension16', 'None');
        });
        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 4828, 4892);
            ga('require', 'GTM-W59HFNJ');
        });
        fireOrSaveJsFunctions(0, function() {___jdce_logger("lacuna_cache/exported_qt2wm7.js", 4928, 4986);
            ga('send', 'pageview');
        });
    