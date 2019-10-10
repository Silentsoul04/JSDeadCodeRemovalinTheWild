
            (function() {

                try {
                    var $ = window.$;

                    function onDownloadInit() {
                        var $downloadEle = $('#m_common_tip');
                        var $win = $(window);
                        var tipArg1 = {
                            tipId: 'm_common_tip', //
                            downAppConfigData: {}, //选配，文案，样式，图片配置（默认会从配置中心获取配置，一般不需要页面配置，由产品定）
                            downloadAppPlugIn: {
                                openAppBtnId: "download_openapp",
                                downAppURl: "//wqs.jd.com/downloadApp/downloadAppIOSMPage.html?channel=jd-msy",
                                inteneUrl: "openapp.jdmobile://virtual?",
                                M_sourceFrom: "index",
                                inteneUrlParams: {
                                    des: "HomePage",
                                    from: "search",
                                    category: "jump"
                                }
                            }, //必配， 配置跳转app参数 唤起，不配默认唤起到app首页，这个参数会影响到APP落地页，相信参考：引流组件接入规范文档
                            onClickTrynow: function() {
                                //alert('点击立即打开执行该方法，无需求不需要实现')
                            },
                            onClickTipX: function() {
                                //alert("点击关闭按钮执行该方法，无需求不需要实现");
                                $downloadEle.data('show', 0);
                                $win.scroll();
                            },
                            callFunShowTip: function() {
                                $('.j_smart_box_wrapper').css({
                                    top: $downloadEle && $downloadEle.offset() && $downloadEle.offset().height || 0
                                });
                                if ($('#m_common_tip_div').length) {
                                    $downloadEle.data('show', 1);
                                    $downloadEle.show();
                                    $('#pannelSeat').show().height($('#m_common_tip_div').height());
                                } else {
                                    $downloadEle.data('show', 0);
                                    $('#pannelSeat').hide();
                                    $downloadEle.hide();
                                }
                                $win.scroll();
                            }
                        };
                        $ && $.downloadAppLayerConfigData && $.downloadAppLayerConfigData(tipArg1);


                        function autoOpenApp() {
                            var t = {
                                M_sourceFrom: "index",
                                NoJumpDownLoadPage: !0,
                                kepler_param: null,
                                downAppURl: "//wqs.jd.com/downloadApp/downloadAppIOSMPage.html?channel=jd-msy",
                                // downAppURl: "//st.360buyimg.com/common/downLoadCommon/downLoadAppIOSMPage.html?channel=jd-msy",
                                inteneUrl: "openapp.jdmobile://virtual?",
                                inteneUrlParams: {
                                    des: "HomePage",
                                    from: "search",
                                    category: "jump"
                                }
                            };
                            if ($ && typeof $.downloadAppPlugInOpenApp === 'function') {
                                console.log('唤起jdapp');
                                $.downloadAppPlugInOpenApp(t);
                            }
                        }

                        autoOpenApp();
                    }

                    if (window.navigator.userAgent.indexOf('viomi_fridge_21face') == -1 && JD.url.getUrlParam('fr', window.location.href) != 'jdpingou') { // 屏蔽智能冰箱 和 拼购app
                        onDownloadInit();
                    }
                } catch (error) {
                    console.error('引流组件初始化失败', error)
                }

            })();
        