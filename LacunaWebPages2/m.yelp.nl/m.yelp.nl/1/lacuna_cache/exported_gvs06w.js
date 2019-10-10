
        window.yPerfTimings = window.yPerfTimings || [];

        if (false) {
            window.yPageStart = new Date().getTime();
            window.yPerfTimings.push(["head:css:start", window.yPageStart]);
        } else {
            window.yPerfTimings.push(["head:css:start", new Date().getTime()]);
        }
    