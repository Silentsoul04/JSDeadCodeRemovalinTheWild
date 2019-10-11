
                (function() {___jdce_logger("lacuna_cache/exported_o4bo1z.js", 18, 2524);
                    try {

                        try {
                            //create a new XHR request
                            var xhrRequest = new XMLHttpRequest();
                            var startTime;
                            var endTime;

                            function onStateChange() {___jdce_logger("lacuna_cache/exported_o4bo1z.js", 323, 1697);
                                //called when the XHR request object updates  status
                                if (xhrRequest.readyState === XMLHttpRequest.DONE) {
                                    //after its done, mark the time
                                    endTime = encodeURIComponent(Date.now());

                                    var statusCode = xhrRequest.status;

                                    //assemble a logging url with the things we're interested in
                                    var url = '/personalization/cl2/freeform/DebugEvent?source=www&action=cssSimplicityPrefetch&statusCode=' + statusCode + '&startTime=' + startTime + '&endTime=' + endTime;

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
                            xhrRequest.open('GET', 'https://codex.nflxext.com/%5E3.0.0/truthBundle/webui/0.0.1-shakti-css-v9aa8064a/css/css/less%7Cpages%7Csignup%7Csimplicity%7Csimplicity.less/1/PFyIaA3JzMj9HNO/none/true/none', true);

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
            