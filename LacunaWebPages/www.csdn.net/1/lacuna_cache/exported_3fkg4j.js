
// Traffic Stats of the entire Web site By baidu
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
// Traffic Stats of the entire Web site By baidu end
window.csdn.fixedSidebar({
    targetBox: $('nav'), //判断到达底部的元素
    mainBox: $("main"), //侧边栏旁边的主体元素
    sidebar: $("nav"), //侧边栏主体元素，可与判断到达底部的元素相同
    direction: 'left', //侧边栏浮动方向
    position: 'fixed',//定位方式
    top:-6,
    bottom: 0,
    zIndex: 99,
    sidebarRightMargin: 13,//direction为left,侧边栏距离mainbox的右边距
    sidebarLeftMargin: 15,//direction为right,侧边栏距离mainbox的左边距
})
window.csdn.fixedSidebar({
    targetBox: $('.persion_article'),
    mainBox: $("main"),
    sidebar: $("aside"),
    direction: 'right', 
    position: 'fixed',
    bottom: 0,
    zIndex: 99,
    sidebarRightMargin: 8,
    sidebarLeftMargin: 14,
})
