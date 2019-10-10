
        /*
        *
        2018-02-26 临时 将所有a标签的target由target改为self
        */


        ! function() {
            var as = document.querySelectorAll("a"),
                len = as.length,
                i = 0,
                tmp = "";
            for (; i < len; i++) {
                tmp = (as[i].getAttribute("target") || "").toLowerCase();
                if (!!tmp && tmp == "_blank") as[i].setAttribute("target", "_self");
            }


            var isMobile = (/iPad|iPhone|Android|Windows Phone|Nokia/).test(navigator.userAgent); //当前访问设备为移动端
            var isLow750 = document.querySelector("body").clientWidth <= 750; //判断是否屏幕尺寸小于750，针对pc，小于750展示手机版页面
            if (!isMobile && isLow750) {
                //console.log("123123123");
                $("#column-topic-swiper,#column-depth,.column-subtits,.topicbar-business").hide();
            };



            //手机封面js
            //		                $(".cover").css({
            //                    "width": window.innerWidth,
            //                    "height": window.innerHeight
            //                })
            //                setTimeout(function() {
            //                    $(".cover").animate({
            //                        "margin-top": -(window.innerHeight)
            //                    },1000,function () { 
            //                        $(this).remove();
            //                     })
            //                }, 3000);
        }()
    