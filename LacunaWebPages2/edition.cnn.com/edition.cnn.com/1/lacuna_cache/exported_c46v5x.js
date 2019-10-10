
        (function(doc, fd) {
            fd.measure(function() {
                var scpt = doc.getElementsByTagName('script')[0];
                fd.mutate(function() {
                    var elem = doc.createElement('script');
                    elem.id = 'quantScript';
                    elem.async = true;
                    elem.type = 'text/javascript';
                    elem.src = (doc.location.protocol === 'https:' ? 'https://secure.quantserve.com/quant.js' : 'http://edge.quantserve.com/quant.js');
                    scpt.parentNode.insertBefore(elem, scpt);
                });
            });
        }(document, fastdom));
    