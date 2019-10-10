
(function(window, document){___jdce_logger("lacuna_cache/exported_urhkgn.js", 2, 8567);

    // Global values
    window.vimeo = window.vimeo || {};
    vimeo.mobile = vimeo.mobile || {};
    Vimeo = vimeo.mobile || {};
    Vimeo.desktop_shared = Vimeo.desktop_shared || {};

    // DESKTOP HANDLERS

    var desktop = document.getElementById('topnav_desktop');

    // Prevent touch device to higtlight the area tapped
    desktop.addEventListener('touchstart', function(e){___jdce_logger("lacuna_cache/exported_urhkgn.js", 405, 707);
        // Take into consideration avatar img
        var target = (e.target.tagName.toLowerCase() === 'img') ? e.target.parentNode : e.target;

        if (target.classList.contains('topnav_has_dropdown')) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, false);

    // Add last_page cookie
    var listen = 'ontouchstart' in window ? 'touchstart' : window.PointerEvent ? 'pointerdown' : window.MSPointerEvent ? 'MSPointerDown' : 'click';
    desktop.addEventListener(listen, function(e){___jdce_logger("lacuna_cache/exported_urhkgn.js", 931, 1146);
        if (e.target.classList.contains('js-topnav_menu_auth')) {
            document.cookie = 'last_page=' + encodeURIComponent(window.location.pathname) + ';path=\'/\';max-age=1800;';
        }
    }, false);

    // MOBILE HANDLERS

    // Trigger iOS Upload flow
    Vimeo.desktop_shared._upload = function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 1247, 2114);
        // show iTunes only if we are in iOS world
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)){
            var deeplink = 'vimeo://app.vimeo.com/upload?ref=mobileweb',
                fallback = '/upload',
                webkitHiddenCallback,
                hitCallback;

            // Callbacks
            webkitHiddenCallback = function() {___jdce_logger("lacuna_cache/exported_urhkgn.js", 1610, 1812);
                // If the user is still here open the url page.
                if (!document.webkitHidden) {
                    window.location = fallback;
                }
            };

            // Try to open the Vimeo App
            hitCallback = function() {___jdce_logger("lacuna_cache/exported_urhkgn.js", 1882, 2006);
                window.location = deeplink;
                setTimeout(webkitHiddenCallback, 25);
            };

            hitCallback();

            return false;
        }

        window.location = e.href;

    }


// AFTER MOBILE NAV TEST RECONCILE WITH THE `mobile_menu_script.phtml`
// ===================================================================
    // Switch to desktop site
    Vimeo.desktop_shared._s2ds = function() {___jdce_logger("lacuna_cache/exported_urhkgn.js", 2322, 2479);
        document.cookie='opt_out_mobile=1;expires=Fri, 31 Dec 9999 23:59:59 GMT;domain=' + vimeo.domain;
        window.location.reload();
    };

    // Switch to language
    Vimeo.desktop_shared._s2l = function(sel) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 2540, 3035);
        var lang = sel.value,
            xhr = new XMLHttpRequest();

        xhr.open('POST', '/settings/locale');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send('locale=' + lang + '&token=' + vimeo.xsrft);
        xhr.onload = function post() {___jdce_logger("lacuna_cache/exported_urhkgn.js", 2907, 3028);
            if (xhr.status === 200) {
                window.location.reload();
            }
        };
    };

    // AB Test PHP.Home.MobileMenu | mobile_nav_priority |  @ricardo-cabret
    function checkForMobileMenuExperiment() {___jdce_logger("lacuna_cache/exported_urhkgn.js", 3118, 3796);

        var test = window.ABLincoln && window.ABLincoln.getTest('JS.MobileMenu').get('mobile_nav_priority', 'control');

        if (test === 'variant') {
            var mobileMenuList = document.getElementById('menu_list');
            var upgradeLink = document.querySelector('#js-upgrade-link').parentElement;
            var uploadLink = document.querySelector('#js-upload-link').parentElement;

            if (mobileMenuList) {
                mobileMenuList.insertBefore(upgradeLink, mobileMenuList.children[1]);
                mobileMenuList.insertBefore(uploadLink, mobileMenuList.children[2]);
            }
        }
    }

    var mobileMenuEle = document.querySelector('.js-topnav_mobile_header_logo');
    if (mobileMenuEle) {
        mobileMenuEle.addEventListener('click', function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 3952, 5670);

            // AB Test PHP.Home.MobileMenu | mobile_nav_priority |  @ricardo-cabret
            checkForMobileMenuExperiment();

            e.stopPropagation();
            e.preventDefault();
            // Open Menu
            var mobile_menu_main = document.querySelector('.js-topnav_mobile_menu_main');
            mobile_menu_main.style.display = 'block';

            // Close Menu
            var mobile_header_close = document.querySelector('.js-topnav_mobile_header_close');
            mobile_header_close.addEventListener('click', function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 4511, 4668);
                e.stopPropagation();
                e.preventDefault();
                mobile_menu_main.style.display = 'none';
            });

            // Toggle Settings
            var mobile_menu_settings = document.querySelector('.js-topnav_mobile_menu_settings');
            var topnav2015_mobile_header_settings = document.querySelector('.js-topnav_mobile_header_settings');
            topnav2015_mobile_header_settings.addEventListener('click', function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 4986, 5657);
                e.stopPropagation();
                e.preventDefault();
                mobile_menu_settings.style.display = 'block';
                mobile_menu_main.style.display = 'none';
                var topnav2015_mobile_header_settings_close = document.querySelector('.js-topnav_mobile_header_settins_close');
                topnav2015_mobile_header_settings_close.addEventListener('click', function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 5402, 5641);
                    e.stopPropagation();
                    e.preventDefault();
                    mobile_menu_settings.style.display = 'none';
                    mobile_menu_main.style.display = 'block';
                });
            });

        }, false);
    };

    var mobileAlbumsEle = document.querySelector('.js-topnav_mobile_header_albums');
    if (mobileAlbumsEle) {
        mobileAlbumsEle.addEventListener('click', function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 5850, 6502);
            e.stopPropagation();
            e.preventDefault();
            var mobile_menu_albums = document.querySelector('.js-topnav_mobile_album_list');
            mobile_menu_albums.classList.add('open');

            // Close
            var mobile_albums_close = document.querySelector('.js-topnav_mobile_album_list_close');
            if (mobile_albums_close) {
                mobile_albums_close.addEventListener('click', function(e) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 6299, 6476);
                    e.stopPropagation();
                    e.preventDefault();
                    mobile_menu_albums.classList.remove('open');
                });
            }
        }, false);
    };



// ^^^^^^^^^^^^^^^^^^^^
// AFTER MOBILE NAV TEST RECONCILE WITH THE `mobile_menu_script.phtml`
// ===================================================================

    // USER MESSAGE

    // Show notification if it is the case
    // We wrap this in a setTimeout since the notifications should
    // have a lower priority in terms of visual compared to other
    // items on the page.
    setTimeout(function(){___jdce_logger("lacuna_cache/exported_urhkgn.js", 6927, 8557);
         // DOM Elements
        var avatar = document.getElementById('topnav_menu_avatar');
        // If there is no avatar then stop it
        if (!avatar) {
            return;
        }

        var bubble = avatar.querySelector('.topnav_menu_avatar_bubble');
        var dropdown = avatar.querySelector('#topnav_user_dropdown');
        //var message = avatar.querySelector('.topnav_user_menu_message');
        //var close = avatar.querySelector('.topnav_user_menu_message_close');
        var on_hover = false;

        // If there is no bubble then stop it
        if (bubble) {
            bubble.classList.add('on');
        }

        // And we attach hide the bubble
        avatar.addEventListener('mouseover', function() {___jdce_logger("lacuna_cache/exported_urhkgn.js", 7665, 7956);
            if (on_hover) return;

            on_hover = true;

            if (bubble) {
                bubble.classList.remove('on');
            }

            // Save removed state [1 means the user open the dropdown]
            store_user_message_settings(1);

        }, false);

        // Store status of user nav message (bubble closed [1], message hidden [2])
        function store_user_message_settings(value) {___jdce_logger("lacuna_cache/exported_urhkgn.js", 8059, 8549);
            var xhr = new XMLHttpRequest();

            xhr.open('POST', '/settings/nav');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('message_state=' + value + '&token=' + vimeo.xsrft);

            // Nothing to handle. We hope for the best in this case
            xhr.onload = function () {___jdce_logger("lacuna_cache/exported_urhkgn.js", 8524, 8538);};
        };

    }, 1000);
})(window, document);
