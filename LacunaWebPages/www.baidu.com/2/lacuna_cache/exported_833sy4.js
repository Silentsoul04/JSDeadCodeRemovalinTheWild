
        var url = location.href;
        if (url.indexOf('%23') != -1) {
            location.href = url.replace(/%23/g, '#');
        }
        url = location.href;
        if (url.indexOf('%7C') != -1) {
            location.href = url.replace(/%7C/g, '|');
        }
        if (window.location.hash.match(/\&iview\b.*/)) {
            var style = document.createElement('style');
            style.id = 'activitystyle';
            style.innerHTML = '#page {width:100%;position:absolute;top:-99999px;opacity:0;}';
            document.head.appendChild(style);
            setTimeout(function() {}, 0);
        }
        if (/#\iact/.exec(location.href) && !(/\&iview\b.*/.exec(location.href))) {
            var style = document.createElement('style');
            style.id = 'activitystyle';
            style.innerHTML = '#page {width:100%;position:absolute;top:-99999px;opacity:0;}';
            document.head.appendChild(style);
        }
    