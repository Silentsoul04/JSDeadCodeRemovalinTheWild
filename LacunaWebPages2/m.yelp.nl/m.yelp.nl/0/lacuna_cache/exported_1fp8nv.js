
        window.yPerfTimings = window.yPerfTimings || [];

        if (false) {
            window.yPageStart = new Date().getTime();
            window.yPerfTimings.push(["head:end", window.yPageStart]);
        } else {
            window.yPerfTimings.push(["head:end", new Date().getTime()]);
        }
    