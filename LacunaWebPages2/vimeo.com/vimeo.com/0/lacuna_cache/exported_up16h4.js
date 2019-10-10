
                // DO NOT REMOVE. This is a callback for the login & join buttons in TopNavBuilder.
                function completeUserLogin(response) {___jdce_logger("lacuna_cache/exported_up16h4.js", 117, 301);
                    if (response && !response.signup) {
                        window.location.reload();
                    }
                }

                function handleUploadButtonClick(event) {___jdce_logger("lacuna_cache/exported_up16h4.js", 319, 932);
                    // Opens the auth modal for logged out users
                    if (
                        window.vimeo &&
                        window.vimeo.config &&
                        window.vimeo.Modal &&
                        !window.vimeo.cur_user
                    ) {
                        event.preventDefault();
                        vimeo.Modal.create({
                            size: 'xsmall',
                            content: '/join?modal=new&redirect=/upload',
                        });
                    }
                }
            