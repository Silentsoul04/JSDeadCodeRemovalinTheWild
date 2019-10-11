
        var script_tag = document.createElement('script');
        script_tag.type = 'text/javascript';
        script_tag.src = '//storage.googleapis.com/adasia-ad-network-origin/atm/library/avmLibrary.js';
        script_tag.async = true;
        script_tag.onload = function() {
            var script_tag = document.createElement('script');
            script_tag.type = 'text/javascript';
            script_tag.text = 'var adAsiaTM = window.adAsiaTM || adAsiaTM,zoneList = [];adAsiaTM.init(zoneList);';
            document.head.appendChild(script_tag);
        }
        document.head.appendChild(script_tag);
    