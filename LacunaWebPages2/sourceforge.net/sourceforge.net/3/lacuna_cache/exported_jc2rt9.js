
        /*global unescape, window, SF*/
        // Setup our namespace
        if (!window.SF) {
            window.SF = {};
        }
        if (!window.net) {
            window.net = {};
        }
        if (!window.net.sf) {
            window.net.sf = {};
        }
        SF.Ads = {};
        SF.cdn = '//a.fsdn.com/con';
        SF.deploy_time = '1570050284';
        SF.sandiego = true;
        SF.sandiego_chrome = true;

        SF.Breakpoints = {
            small: 0,
            medium: 640,
            leaderboard: 743,
            billboard: 985,
            large: 1053,
            xlarge: 1295,
            xxlarge: 1366
        };
        SF.initial_breakpoints_visible = {};
        for (var bp in SF.Breakpoints) {
            if (!SF.Breakpoints.hasOwnProperty(bp)) {
                continue;
            }
            SF.initial_breakpoints_visible[bp] = !window.matchMedia || window.matchMedia('(min-width: ' + SF.Breakpoints[bp] + 'px)').matches;
        }
        SF.Ads.viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        SF.Ads.viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    