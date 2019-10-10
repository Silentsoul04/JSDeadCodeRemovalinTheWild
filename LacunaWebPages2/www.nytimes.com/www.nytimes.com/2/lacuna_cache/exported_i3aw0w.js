
        var alsVariant = window.NYTD.Abra('DFP_als');
        if (alsVariant != null && alsVariant.match(/(0_control|1_als)/)) {
            window.NYTD.Abra.reportExposure('DFP_als');
        }
        if (window.NYTD.Abra('DFP_als') === '1_als') {
            (function() {})();
        }
    