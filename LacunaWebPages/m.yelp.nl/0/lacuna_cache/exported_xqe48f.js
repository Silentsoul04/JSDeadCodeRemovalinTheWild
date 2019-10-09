
        window.yPerfTimings = window.yPerfTimings || [];

        if (false) {
            window.yPageStart = new Date().getTime();
            window.yPerfTimings.push(["head:css:end", window.yPageStart]);
        } else {
            window.yPerfTimings.push(["head:css:end", new Date().getTime()]);
        }
    