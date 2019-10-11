
        window.yPerfTimings = window.yPerfTimings || [];

        if (false) {
            window.yPageStart = new Date().getTime();
            window.yPerfTimings.push(["body:end", window.yPageStart]);
        } else {
            window.yPerfTimings.push(["body:end", new Date().getTime()]);
        }
    