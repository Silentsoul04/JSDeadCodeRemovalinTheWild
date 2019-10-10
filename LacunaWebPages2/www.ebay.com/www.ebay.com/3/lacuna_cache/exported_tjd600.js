
        (function(scope) {
            var trackingInfo = {
                "X_EBAY_C_CORRELATION_SESSION": "gci=b558942a16d0a4d0ebc3580dfb7ac054,si=b5588fac16d0a4e8837e8db1fffdc917,siid=AWI%2FXpIg*,c=6,sid=p2481888,operationId=2481888,trk-gflgs="
            };
            scope.trkCorrelationSessionInfo = {};
            scope.trkCorrelationSessionInfo.getTrackingInfo = function() {
                return trackingInfo;
            };
            scope.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo = function() {
                return trackingInfo.X_EBAY_C_CORRELATION_SESSION
            };
        })(window)
    