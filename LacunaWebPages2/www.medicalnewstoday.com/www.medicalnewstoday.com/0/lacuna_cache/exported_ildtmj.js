
        var amzn_win = window,
            amzn_c = 5,
            amzn_x = 0;
        while (amzn_x < amzn_c) {
            amzn_win = amzn_win.parent;
            if (amzn_win.apstag) try {
                amzn_win.apstag.renderImp(document, "%%PATTERN:amzniid%%");
                amzn_x = amzn_c
            } catch (e) {}
            amzn_x++
        };
    