
        var _maq = _maq || [];
        var userAgent = window.navigator.userAgent;
        var android = userAgent.match(/(Android)[s/]*([d.]+)/i);
        var ios = userAgent.match(/(iPad|iPhone|iPod)[ws]*;(?:[ws]+;)*[ws]+(?:iPad|iPhone|iPod)?sOSs([d_.]+)/i);
        _maq.push(
            ['account', 'sohunews'], ['channel', ''], ['point', ''], ['platform', android ? 'android' : (ios ? 'ios' : '')]);
        (function() {
            var ma = document.createElement('script');
            ma.type = 'text/javascript';
            ma.async = true;
            ma.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.qchannel03.cn/m2.js?w=' + _maq[0][1];
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ma, s);
        })();
    