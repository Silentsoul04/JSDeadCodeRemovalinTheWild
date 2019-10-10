let timeId;
let displayOverlayFunction;

const eventListeners = [];

function cancelTimer() {
    clearTimeout(timeId);
    eventListeners.forEach(function(listener) {
        document.removeEventListener(listener.event, listener.handler);
    });
}

function startTimer(overlay, thresholdMs) {
    timeId = setTimeout(() => {
        displayOverlayFunction(overlay);
        cancelTimer(timeId);
    }, thresholdMs);
}

function resetTimer(overlay, thresholdMs) {
    clearTimeout(timeId);
    startTimer(overlay, thresholdMs);
}

function setupEventHandler(eventHandler, overlay, thresholdMs) {
    const type = overlay.timer.event_handler[eventHandler];
    if (eventHandler === 'page_interaction') {
        let handler;
        if (type === 'reset') {
            handler = function() {
                resetTimer(overlay, thresholdMs);
            };
        }

        if (type === 'cancel') {
            handler = function() {
                cancelTimer();
            };
        }

        if (handler) {
            [
                'mousemove',
                'mousedown',
                'click',
                'scroll',
                'keydown',
            ].forEach(function(event) {
                eventListeners.push({
                    event,
                    handler,
                });
                document.addEventListener(event, handler);
            });

            startTimer(overlay, thresholdMs);
        }
    }
}

function renderTimeDelayedOverlay(overlay) {
    const scope = overlay.timer.scope;
    if (scope === 'page') {
        const thresholdMs = overlay.timer.threshold_ms || 0;

        if (!overlay.timer.event_handler) { // time-on-page
            setTimeout(() => {
                displayOverlayFunction(overlay);
            }, thresholdMs);
        } else {
            const eventHandlers = Object.keys(overlay.timer.event_handler);
            for (let i = 0; i < eventHandlers.length; i += 1) {
                setupEventHandler(eventHandlers[i], overlay, thresholdMs);
            }
        }
    } else {
        displayOverlayFunction(overlay);
    }
}

const defaultFn = (displayPersonalizedOverlayHTML) => {
    displayOverlayFunction = displayPersonalizedOverlayHTML;
    return {
        renderTimeDelayedOverlay,
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/overlays/timeOverlay.js