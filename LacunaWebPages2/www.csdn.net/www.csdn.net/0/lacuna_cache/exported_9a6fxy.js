
        //h5定义rem
        initpage();
        window.onresize = initpage;

        function initpage() {
            var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
            var _html = document.getElementsByTagName('html')[0];
            window.fontSize = view_width > 750 ? 750 / 7.5 : view_width / 7.5;
            _html.style.fontSize = window.fontSize + 'px';
        }
    