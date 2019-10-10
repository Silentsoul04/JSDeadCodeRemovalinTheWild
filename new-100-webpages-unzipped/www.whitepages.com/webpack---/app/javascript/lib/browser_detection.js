var UserAgent = navigator.userAgent;

export default {
    isIPhone: function() {
        return /iPhone/.test(UserAgent);
    },
    isIPad: function() {
        return /iPad/.test(UserAgent);
    },
    isAndroid: function() {
        return /Android/.test(UserAgent);
    },
    isWindowsPhone: function() {
        return /IEMobile/.test(UserAgent);
    },
    isBlackberryPhone: function() {
        return /Blackberry/.test(UserAgent);
    },
    isMobile: function() {
        return /(?:Android|Blackberry|IEMobile|iPhone)/.test(UserAgent);
    },

    matchesWidth: function(widthRule) {
        var clientWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        var match = /([<>]=?)\s(\d+)/.exec(widthRule);
        var qualifies = true;
        if (match) {
            var rule = match[1],
                size = match[2];
            var left, right;
            if (/</.exec(rule)) {
                (left = size), (right = clientWidth);
            } else if (/>/.exec(rule)) {
                (left = clientWidth), (right = size);
            }

            if (left < right) {
                qualifies = false;
            }
        } else {
            // if width is invalidly defined we mark ad as unqualified
            qualifies = false;
        }
        return qualifies;
    },

    // Takes an object of restricted attributes and their rules and
    // determines if the current browser is compliant with them.
    is_compliant: function(restrictions) {
        var compliant = true;
        if (restrictions.hasOwnProperty('width'))
            compliant = compliant && this.matchesWidth(restrictions.width);
        // If a can_be_mobile restriction is false, we are only compliant while not on mobile device.
        if (
            restrictions.hasOwnProperty('can_be_mobile') &&
            restrictions.can_be_mobile === false
        )
            compliant = compliant && !this.isMobile();

        return compliant;
    }
};