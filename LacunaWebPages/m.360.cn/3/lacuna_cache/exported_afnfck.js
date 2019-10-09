
    var carousel = new Carousel({
        element: '.nova-carousel',
        autoplay_interval_ms: 5000,
        autoplay: true
    });
    $(".header-right").click(function() {
        $(".sub-nav").toggle();
    });

    $("#spe-height").css("height", $("#spe-height-child").height() - 2);
    $("#more-btn").css("height", $("#speli").height() - 1);

    setTimeout(function() {
        $(".switch").css("height", $(".switch img").height() + 'px');
    }, 10);


    setTimeout(function() {
        $(".switch").css("height", $(".switch img").height() + 'px');
    }, 300);

    setTimeout(function() {
        $(".switch").css("height", $(".switch img").height() + 'px');
    }, 600);
    window.onresize = function() {
        $(".switch").css("height", $(".switch img").height() + 'px');
        $("#spe-height").css("height", $("#spe-height-child").height() - 1);
        $("#more-btn").css("height", $("#speli").height() - 1);
    }

    monitor.setConf({
        trackUrl: "//s.360.cn/qdas/s.htm",
        clickUrl: "//s.360.cn/qdas/c.htm",
        clickHeatMapUrl: "//s.360.cn/qdas/c.htm",
        wpoUrl: "//s.360.cn/qdas/p.htm"
    });
    monitor.setProject('QH_173_7').getTrack().getClickAndKeydown().getClickHeatmap(10, 1);
