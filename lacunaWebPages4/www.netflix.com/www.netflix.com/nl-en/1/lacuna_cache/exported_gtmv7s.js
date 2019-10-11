
                (function() {___jdce_logger("lacuna_cache/exported_gtmv7s.js", 18, 2551);
                    try {

                        try {
                            //create a new XHR request
                            var xhrRequest = new XMLHttpRequest();
                            var startTime;
                            var endTime;

                            function onStateChange() {___jdce_logger("lacuna_cache/exported_gtmv7s.js", 323, 1696);
                                //called when the XHR request object updates  status
                                if (xhrRequest.readyState === XMLHttpRequest.DONE) {
                                    //after its done, mark the time
                                    endTime = encodeURIComponent(Date.now());

                                    var statusCode = xhrRequest.status;

                                    //assemble a logging url with the things we're interested in
                                    var url = '/personalization/cl2/freeform/DebugEvent?source=www&action=jsSimplicityPrefetch&statusCode=' + statusCode + '&startTime=' + startTime + '&endTime=' + endTime;

                                    //create an img
                                    var img = document.createElement('img');
                                    img.src = url;
                                    // making sure the images are hidden, otherwise they add a small white bar at the bottom of our NMHP
                                    img.setAttribute('style', 'display: none');
                                    //append it to <body>, thereby making a request and logging.
                                    document.getElementsByTagName('body')[0].appendChild(img);
                                }
                            }

                            //record the timestamp when we open the request
                            startTime = encodeURIComponent(Date.now());

                            //open the request for the resource
                            xhrRequest.open('GET', 'https://codex.nflxext.com/%5E3.0.0/truthBundle/webui/0.0.1-shakti-js-v9aa8064a/js/js/signup%7Csimplicity%7CsimpleSignupClient.js/2/4N024n4m4a4o0b464w4M050q004O4r4G4y4p4H4c4x4k4A4e4d0915014J/l/true/none', true);

                            xhrRequest.onreadystatechange = onStateChange;

                            //fire!
                            xhrRequest.send();
                        } catch (e) {
                            //do nothing
                        }

                    } catch (ex) {
                        //do nothing
                    }
                })();
            