
        window.yPerfTimings = window.yPerfTimings || [];

        if (true) {
            window.yPageStart = new Date().getTime();
            window.yPerfTimings.push(["head:start", window.yPageStart]);
        } else {
            window.yPerfTimings.push(["head:start", new Date().getTime()]);
        }
    