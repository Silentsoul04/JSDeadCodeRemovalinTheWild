
    (function() {
        'use strict';
        window.cookieBannerKit = {
            doNotTrack: function() {
                // Internet Explorer 11 uses window.doNotTrack rather than navigator.doNotTrack.
                // Safari 7.1.3+ uses window.doNotTrack rather than navigator.doNotTrack.
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/navigator/doNotTrack#Browser_compatibility
                return ( window.doNotTrack === '1' || ( window.navigator && window.navigator.doNotTrack === '1' ) );
            },
            createScriptElement: function( url, attrs, onLoad, onError ) {
                var script = document.createElement( 'script' );
                script.src = url;
                script.type = 'text/javascript';
                script.async = true;
                script.onload = onLoad;
                script.onerror = onError;
                if ( attrs ) {
                    jQuery.each( attrs, function( key, val ) {
                        script.setAttribute( key, val );
                    } );
                }
                return script;
            },
            attachToBody: function( element ) {
                document.body.appendChild( element );
                return element;
            },
            attachScriptElement: function( url, attrs, onLoad, onError ) {
                return this.attachToBody( this.createScriptElement( url, attrs, onLoad, onError ) );
            },
            loadPixelImage: function( url ) {
                return jQuery( '<img>', {
                    src: url,
                    width: 1,
                    height: 1,
                    border: 0,
                });
            },
        }
    })();
