(function(){___jdce_logger("lacuna_cache/exported_kq05oe.js", 1, 2598);var k=function(a,b){___jdce_logger("lacuna_cache/exported_kq05oe.js", 18, 562);var c=window,d=document;if(!a)return 0;if(!b){if("none"==a.style.display)return 0;if(d.defaultView&&d.defaultView.getComputedStyle){var e=d.defaultView.getComputedStyle(a);if(e&&("hidden"==e.visibility||"0px"==e.height&&"0px"==e.width))return 0}}if(!a.getBoundingClientRect)return 1;var f=a.getBoundingClientRect();e=f.left+c.pageXOffset;var m=f.top+c.pageYOffset,h=f.width;f=f.height;return!b&&0>=f&&0>=h?0:0>m+f?2:m>=(c.innerHeight||d.documentElement.clientHeight)?3:0>e+h||e>=(c.innerWidth||
d.documentElement.clientWidth)?4:1};var l,n=["aft","hct","prt","pprt","sct"];function p(a){___jdce_logger("lacuna_cache/exported_kq05oe.js", 604, 691);return(a=q.search.match(new RegExp("[?&]"+a+"=(\\d+)")))?Number(a[1]):-1}function r(a){___jdce_logger("lacuna_cache/exported_kq05oe.js", 691, 777);l.removeEventListener("click",r);a.stopPropagation&&a.stopPropagation()}var q=location;var t=0,u=0,v=0,w=0,x=0,y,z;function A(a,b,c,d){___jdce_logger("lacuna_cache/exported_kq05oe.js", 820, 913);var e=google.timers.load.t[a];e&&(c||d&&b&&b<e)||google.tick("load",a,b)}function C(a,b){___jdce_logger("lacuna_cache/exported_kq05oe.js", 913, 980);b=b||google.time();A("aft",b,!1,!0);++x;D();E(a,b)}function E(a,b){___jdce_logger("lacuna_cache/exported_kq05oe.js", 980, 1044);var c=b||google.time();A("iml",c,!1,!0);++u;F()}function F(){___jdce_logger("lacuna_cache/exported_kq05oe.js", 1044, 1083);z||u!=t||google.c.u("il")}
function D(){___jdce_logger("lacuna_cache/exported_kq05oe.js", 1084, 1922);if(!y&&x==v){var a="&ima="+v+"&imad="+w;google.timers.load.e.imn&&(a+="&imn="+google.timers.load.e.imn);var b=google.timers.load,c=p("qsubts");if(0<c){var d=p("fbts");0<d&&(b.t.start=Math.max(c,d))}var e=b.t,f=e.start;d={wsrt:b.wsrt};for(var m=0,h;h=n[m++];){var B=e[h];B&&f&&(d[h]=B-f)}0<c&&(d.gsasrt=Math.abs(b.t.start-c));b="/gen_204?s="+google.sn+"&t=aft&atyp=csi&ei="+google.kEI+"&rt=";c="";for(var g in d)b+=c+g+"."+d[g],c=",";google.cshid&&(b+="&cshid="+google.cshid);(g=window.performance&&
window.performance.navigation)&&2==g.type&&(b+="&bb=1");"gsasrt"in d&&(g=p("qsd"),0<g&&(b+="&qsd="+g));google.kBL&&(b+="&bl="+google.kBL);a=b+(a||"");(l=document.getElementById("csi-ping"))?(l.addEventListener("click",r),l.setAttribute("ping",a),l.click()):navigator.sendBeacon?navigator.sendBeacon(a,""):google.log("","",a)}}
function G(a){___jdce_logger("lacuna_cache/exported_kq05oe.js", 1923, 2257);var b="string"!=typeof a.src||!a.src,c=!!a.getAttribute("data-bsrc"),d=a.getAttribute("data-deferred"),e=(b||a.complete)&&!d&&!c;b=e&&Number(a.getAttribute("data-iml"))||0;c=k(a,c);a.setAttribute("data-atf",c);++t;e&&!b||a.hasAttribute("data-noaft")?++u:(e=(c=1==c)?C:E,c&&(++v,d&&++w),b?e(void 0,b):google.rll(a,!0,e))};(function(){___jdce_logger("lacuna_cache/exported_kq05oe.js", 2259, 2593);var a=google.time();if(google.timers&&google.timers.load.t){z=y=!0;google.c.b("il");for(var b=document.getElementsByTagName("img"),c=0,d=void 0;d=b[c++];)G(d);A("prt",a);A("aft",a,!0);A("iml",a,!0);google.c.e("load","imn",String(t));y&&(y=!1,D());z=!1;F();google.rll(window,!1,function(){___jdce_logger("lacuna_cache/exported_kq05oe.js", 2547, 2590);A("ol",void 0);google.c.u("pr")})}})();}).call(this);google.drty&&google.drty();