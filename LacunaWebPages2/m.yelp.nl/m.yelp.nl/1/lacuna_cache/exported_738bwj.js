
        window.yPerfTimings = window.yPerfTimings || [];

        if (false) {
            window.yPageStart = new Date().getTime();
            window.yPerfTimings.push(["body:start", window.yPageStart]);
        } else {
            window.yPerfTimings.push(["body:start", new Date().getTime()]);
        }
    