define(function() {
    function a(a, c) {
        this.bannerStr = a, this.strategy = (c || {}).strategy, this.insertMethod = O[0], this.selector, this.specialHandlerArr = [], this.init()
    }
    var c = {
            COMMON: 0,
            SPECIAL: 1
        },
        h = {
            POSITION: 1
        },
        O = {
            0: "appendTo",
            1: "insertBefore",
            2: "insertAfter"
        };
    return a.prototype = {
        constructor: a,
        init: function() {
            var a = (this.strategy || "").split("|"),
                O = this;
            a.forEach(function(a) {
                var S = a.split("_"),
                    y = +S[0];
                if (y === c.COMMON) switch (+S[1]) {
                    case h.POSITION:
                        O.positionDataHandler(S[2])
                } else y === c.SPECIAL && O.specialHandler(+S[1], S[2])
            })
        },
        positionDataHandler: function(a) {
            var c = a.split("@"),
                h = O[c[0]],
                S = c[1];
            h && document.querySelector(S) && (this.insertMethod = h, this.selector = S)
        },
        specialHandler: function(a, c) {
            this.specialHandlerArr.push({
                projectSymbol: a,
                params: c
            })
        }
    }, a
});