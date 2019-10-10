
                (function () {
                    var overlay = document.querySelector('[data-applet-type="userintentmgmt"]');
                    if (overlay) {
                        var _clientY = null; // remember Y position on touch start
                        overlay.addEventListener('touchstart', function (event) {
                            if (event.targetTouches && event.targetTouches.length === 1) {
                                // detect single touch
                                _clientY = event.targetTouches[0].clientY;
                            }
                        }, false);
                        overlay.addEventListener('touchmove', function (event) {
                            if (event.targetTouches && event.targetTouches.length === 1) {
                                // detect single touch
                                disableRubberBand(event);
                            }
                        }, false);
                    }
                    // checks if a node is a descendant of the scrollable panel
                    function isDescendantOfPanel(scrollElement, child) {
                        if (!scrollElement) { return false; }
                        var node = child.parentNode;
                        while (node != null) {
                            if (node == scrollElement) {
                                return true;
                            }
                            node = node.parentNode;
                        }
                        return false;
                    }
                    function disableRubberBand(event) {
                        if (!event.target || !event.targetTouches) {
                            return;
                        }
                        var scrollElement = document.querySelector('.userintentmgmt-panel > ul');
                        if (scrollElement && !isDescendantOfPanel(scrollElement, event.target)) {
                            return event.preventDefault();
                        }
                        var clientY = event.targetTouches[0].clientY - _clientY;

                        if (scrollElement.scrollTop === 0 && clientY > 0) {
                            // element is at the top of its scroll
                            event.preventDefault();
                        }

                        if (isOverlayTotallyScrolled(scrollElement) && clientY < 0) {
                            //element is at the top of its scroll
                            event.preventDefault();
                        }
                    }

                    function isOverlayTotallyScrolled(scrollElement) {
                        if (!scrollElement || typeof scrollElement.scrollHeight === 'undefined') { return; }
                        return scrollElement.scrollHeight - scrollElement.scrollTop <= scrollElement.clientHeight;
                    }
                }())
            