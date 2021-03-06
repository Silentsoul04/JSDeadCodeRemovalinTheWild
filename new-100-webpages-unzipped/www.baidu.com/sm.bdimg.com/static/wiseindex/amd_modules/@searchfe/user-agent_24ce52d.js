define("@searchfe/user-agent/src/index", ["require"], function() {
    function a(c) {
        var mod = {
            isAndroid: function() {
                return /android/i.test(c)
            },
            isIOS: function() {
                return /(iPhone|iPod|iPad)/.test(c)
            },
            isWinPhone: function() {
                return /Windows Phone ([\d.]+)/.test(c)
            },
            iOSVersion: function() {
                var a = /OS (\d+)_(\d+)/.exec(c);
                return a ? [Number(a[1]), Number(a[2])] : []
            },
            appleWebkitVersion: function() {
                var a = c.match(/ applewebkit\/([0-9.]+)/i);
                return a ? a[1].split(".").map(parseFloat) : []
            },
            baiduBoxVersion: function() {
                if (!this.isBaiduBox()) return 0;
                var a, h = /([\d+.]+)_(?:diordna|enohpi)_/i,
                    b = /baiduboxapp\/([\d+.]+)/i;
                return h.test(c) ? a = c.match(h)[1].split(".").reverse() : b.test(c) && (a = c.match(b)[1].split(".")), a ? a.map(parseFloat) : []
            },
            secrVersion: function() {
                if (!this.isSearchCraft()) return 0;
                var a = c.match(/ SearchCraft\/([0-9]+_)?([0-9.]+)/i),
                    h = a[2].split(/(iPhone|iPod|iPad)/.test(c) ? "." : ".");
                return h ? h.map(parseFloat) : []
            },
            getChromeVersion: function() {
                if (!this.isChromeDesktop() && !this.isChromeMobile()) return 0;
                var a = c.match(/ Chrome\/([0-9]+_)?([0-9.]+)/i);
                return a && a[2] ? a[2].split(".").map(parseFloat) : []
            },
            androidVersion: function() {
                var a = c.match(/Android ([0-9.]+);/);
                if (!a) return [];
                var h = a[1].split(".").map(parseFloat);
                return h
            },
            isBaiduBox: function() {
                return /baiduboxapp/.test(c)
            },
            isBaiduBoxLite: function() {
                return /lite baiduboxapp/.test(c)
            },
            isBaiduBoxJisu: function() {
                return mod.isAndroid() && /lite baiduboxapp/.test(c) || mod.isIOS() && /info baiduboxapp/.test(c)
            },
            isQQ: function() {
                return /QQBrowser/.test(c)
            },
            isQQApp: function() {
                return /QQ\/[0-9]+/.test(c)
            },
            isWeixinApp: function() {
                return /MicroMessenger/.test(c)
            },
            isQQBrowser: function() {
                return /QQBrowser/.test(c) && !(/QQ\//.test(c) || /MicroMessenger/.test(c))
            },
            isBaiduBrowser: function() {
                return /baidubrowser/.test(c)
            },
            isSearchCraft: function() {
                return /SearchCraft/i.test(c)
            },
            isUC: function() {
                return /UCBrowser/.test(c)
            },
            isChromeDesktop: function() {
                return /Chrome\//.test(c)
            },
            isChromeMobile: function() {
                return /Chrome\/(\S*) Mobile/.test(c)
            },
            isCriOS: function() {
                return /CriOS/.test(c)
            },
            isSogouMobile: function() {
                return /SogouMobileBrowser/.test(c)
            },
            isMiuiBrowser: function() {
                return /MiuiBrowser\/(\S*)/.test(c)
            },
            isHUAWEIBrowser: function() {
                return /HUAWEI/i.test(c) && !(/baiduboxapp/.test(c) || /QQBrowser/.test(c) || /UCBrowser/.test(c) || /MicroMessenger/.test(c))
            },
            isMZBrowser: function() {
                return /MZBrowser/i.test(c)
            },
            isWKWebview: function() {
                var a = mod.appleWebkitVersion();
                return mod.isIOS() && a[0] && a[0] > 600
            },
            isUIWebview: function() {
                var a = mod.appleWebkitVersion();
                return mod.isIOS() && a[0] && a[0] <= 600
            },
            use: a
        };
        return mod
    }
    return a(navigator.userAgent)
}), define("@searchfe/user-agent", ["@searchfe/user-agent/src/index"], function(mod) {
    return mod
});