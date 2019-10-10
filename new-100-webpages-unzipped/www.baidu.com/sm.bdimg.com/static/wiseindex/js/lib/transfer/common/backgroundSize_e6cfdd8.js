define(function() {
    function L() {
        var L = c.NORMAL,
            M = window.screen.width;
        switch (!0) {
            case M <= A.SMALL:
                L = c.SMALL;
                break;
            case M >= A.NORMAL:
                L = c.BIG
        }
        return L
    }
    var c = {
            SMALL: "110%",
            NORMAL: "cover",
            BIG: "contain"
        },
        A = {
            SMALL: 320,
            NORMAL: 415
        };
    return L()
});