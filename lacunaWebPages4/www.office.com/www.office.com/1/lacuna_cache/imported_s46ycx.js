// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
var pmgControls={},pmgUtils={};if(pmgUtils.WindowWidth=function(){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[65:156]", functionData => eval(functionData))},pmgUtils.isIE=function(){var e=navigator.userAgent.toLowerCase(),n=-1!=e.indexOf("msie")&&parseInt(e.split("msie")[1]);return n||-1==e.indexOf("trident/7.0")||(n=11),n},pmgControls.CategoryHeader=function(e){try{var n=e.categoryMenuLink,o=e.headerItem,t=e.menu,a=e.categoryHeaderLogo,i=e.menuSection,d=e.allMenus,s=$(e.skipNavigation+" a"),r=$(e.skipNavigation),l=function(e,n,o,t){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[538:785]", functionData => eval(functionData))};$(n).on("click",function(e){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[813:1341]", functionData => eval(functionData))}),$(a).on("click",function(e){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[1370:1650]", functionData => eval(functionData))}),s.on("keyup",function(n){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[1676:1889]", functionData => eval(functionData))}),s.on("blur",function(){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[1913:1990]", functionData => eval(functionData))}),$(e.skipNavigationTabPlaceholder).on("focus",function(){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[2047:2138]", functionData => eval(functionData))})}catch(e){console.log(e)}},pmgControls.FatFooter=function(e){var n=function(e){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[2217:2812]", functionData => eval(functionData))};$(e).on("click",function(){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[2839:2848]", functionData => eval(functionData))}),$(e).on("keyup",function(e){lacuna_lazy_load("lacuna_cache/imported_s46ycx.js[2877:2899]", functionData => eval(functionData))})},$(function(){pmgControls.CategoryHeader({categoryHeaderSection:".pmg-category-header",categoryHeaderSectionPlaceholder:".pmg-category-header-placeholder",categoryMenuLink:".pmg-category-header .pmg-menu-link",headerItem:".pmg-header-item",menu:".pmg-menu",categoryHeaderLogo:".pmg-category-header .pmg-category-header-logo",menuSection:".pmg-header-item",allMenus:".pmg-category-header .pmg-menu",skipNavigation:".pmg-skip-navigation-flyout",firstBodyLink:".first-body-link",categoryLogoLink:".pmg-category-header .pmg-category-header-logo .pmg-category-header-logo-link",skipNavigationTabPlaceholder:"#pmg-category-header--skip-navigation-flyout-tab-placeholder"}),pmgControls.FatFooter(".pmg-footer-expand-collapse"),pmgUtils.isIE()&&$("html").addClass("ie"+pmgUtils.isIE())}),window.external&&/Edge/.test(navigator.userAgent)&&"getHostEnvironmentValue"in window.external){var cloudOsGetHostEnvironmentKey="os-sku",cloudOsGetHostEnvironmentValues=["178","179"],externalFunctions=window.external,result=externalFunctions.getHostEnvironmentValue(cloudOsGetHostEnvironmentKey);!result||-1===result.indexOf(cloudOsGetHostEnvironmentValues[0])&&-1===result.indexOf(cloudOsGetHostEnvironmentValues[1])||$("#pmgLnkDownloads").hide()}