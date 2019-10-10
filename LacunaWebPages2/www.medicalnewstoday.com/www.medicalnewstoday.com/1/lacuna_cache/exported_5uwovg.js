
        fireOrSaveJsFunctions(1, function() {___jdce_logger("lacuna_cache/exported_5uwovg.js", 34, 869);

            ! function(f, b, e, v, n, t, s) {___jdce_logger("lacuna_cache/exported_5uwovg.js", 62, 680);
                if (f.fbq) return;
                n = f.fbq = function() {___jdce_logger("lacuna_cache/exported_5uwovg.js", 157, 305);
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window,
                document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1039134266174910');
            fbq('track', "PageView");
        });
    