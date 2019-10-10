/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.2 - 2015 (CUSTOMIZED BY WHITEPAGES)
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
export default function outdatedBrowser() {
    //Variable definition (before ajax)
    var outdated = document.getElementById('outdated');

    // Default settings
    const defaultOpts = {
        bgColor: '#FBAB15',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    };

    const bkgColor = defaultOpts.bgColor;
    const txtColor = defaultOpts.color;
    const cssProp = defaultOpts.lowerThan;
    const languagePath = defaultOpts.languagePath;

    //Define opacity and fadeIn/fadeOut functions
    var done = true;

    function function_opacity(opacity_value) {
        outdated.style.opacity = opacity_value / 100;
        outdated.style.filter = 'alpha(opacity=' + opacity_value + ')';
    }

    function function_fade_in(opacity_value) {
        function_opacity(opacity_value);
        if (opacity_value == 1) {
            outdated.style.display = 'block';
        }
        if (opacity_value == 100) {
            done = true;
        }
    }

    var supports = (function() {
        var div = document.createElement('div');
        var vendors = 'Khtml Ms O Moz Webkit'.split(' ');
        var len = vendors.length;

        return function(prop) {
            if (prop in div.style) return true;

            prop = prop.replace(/^[a-z]/, function(val) {
                return val.toUpperCase();
            });

            while (len--) {
                if (vendors[len] + prop in div.style) {
                    return true;
                }
            }
            return false;
        };
    })();

    //if browser does not supports css3 property (transform=default), if does > exit all this
    if (!supports('' + cssProp + '')) {
        if (done && outdated.style.opacity !== '1') {
            done = false;
            for (var i = 1; i <= 100; i++) {
                setTimeout(
                    (function(x) {
                        return function() {
                            function_fade_in(x);
                        };
                    })(i),
                    i * 8
                );
            }
        }
    } else {
        return;
    } //end if

    //Check AJAX Options: if languagePath == '' > use no Ajax way, html is needed inside <div id="outdated">
    if (languagePath === ' ' || languagePath.length == 0) {
        startStylesAndEvents();
    } else {
        grabFile(languagePath);
    }

    //events and colors
    function startStylesAndEvents() {
        var btnClose = document.getElementById('btnCloseUpdateBrowser');
        var btnUpdate = document.getElementById('btnUpdateBrowser');

        //check settings attributes
        outdated.style.backgroundColor = bkgColor;
        //way too hard to put !important on IE6
        outdated.style.color = txtColor;
        outdated.children[0].style.color = txtColor;
        outdated.children[1].style.color = txtColor;

        //check settings attributes
        btnUpdate.style.color = txtColor;
        // btnUpdate.style.borderColor = txtColor;
        if (btnUpdate.style.borderColor) {
            btnUpdate.style.borderColor = txtColor;
        }
        btnClose.style.color = txtColor;

        //close button
        btnClose.onmousedown = function() {
            outdated.style.display = 'none';
            return false;
        };

        //Override the update button color to match the background color
        btnUpdate.onmouseover = function() {
            this.style.color = bkgColor;
            this.style.backgroundColor = txtColor;
        };
        btnUpdate.onmouseout = function() {
            this.style.color = txtColor;
            this.style.backgroundColor = bkgColor;
        };
    } //end styles and events

    // IF AJAX with request ERROR > insert english default
    var ajaxEnglishDefault =
        '<h6>Outdated Browser</h6>' +
        '<p>Update your browser for the best Whitepages experience.' +
        '<a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">View Browser Options</a></p>' +
        '<p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>';

    //** AJAX FUNCTIONS - Bulletproof Ajax by Jeremy Keith **
    function getHTTPObject() {
        var xhr = false;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                try {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (e) {
                    xhr = false;
                }
            }
        }
        return xhr;
    } //end function

    function grabFile(file) {
        var request = getHTTPObject();
        if (request) {
            request.onreadystatechange = function() {
                displayResponse(request);
            };
            request.open('GET', file, true);
            request.send(null);
        }
        return false;
    } //end grabFile

    function displayResponse(request) {
        var insertContentHere = document.getElementById('outdated');
        if (request.readyState == 4) {
            if (request.status == 304) {
                insertContentHere.innerHTML = request.responseText;
            } else {
                insertContentHere.innerHTML = ajaxEnglishDefault;
            }
            startStylesAndEvents();
        }
        return false;
    } //end displayResponse
} //END of outdatedBrowser function