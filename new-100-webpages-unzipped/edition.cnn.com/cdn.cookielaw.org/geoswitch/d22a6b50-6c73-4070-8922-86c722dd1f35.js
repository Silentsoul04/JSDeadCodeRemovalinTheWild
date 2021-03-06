var OneTrust = OneTrust || {},
    geolocationAPi = "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback\x3d?",
    containerName = "geoswitch",
    geolocationSwitcherFileName = "d22a6b50-6c73-4070-8922-86c722dd1f35.js",
    geolocationSwitcherFilePathPart = containerName + "/" + geolocationSwitcherFileName;
OneTrust.Banners = {
    eu: "d5426610-f2fd-4959-9fa9-d33443afbd2a",
    other: "57532588-b33e-4ac1-9ad8-f23937bfbc25"
};
var jsonFeed = function(a) {
        a = getGeolocationSwitcherScriptPath().replace(geolocationSwitcherFilePathPart, "consent/" + OneTrust.Banners[a.displayPopup ? "eu" : "other"] + ".js");
        var b = document.createElement("script");
        b.setAttribute("src", a);
        b.setAttribute("charset", "utf-8");
        b.async = !0;
        document.head.appendChild(b)
    },
    jsonp = document.createElement("script");
jsonp.setAttribute("src", geolocationAPi);
document.head.appendChild(jsonp);

function getGeolocationSwitcherScriptPath() {
    for (var a = document.getElementsByTagName("script"), b = "", c = 0; c < a.length; ++c)
        if (isGeolocationSwitcherFile(a[c], geolocationSwitcherFilePathPart)) {
            b = a[c].src;
            break
        }
    return b
}

function isGeolocationSwitcherFile(a, b) {
    return a.getAttribute("src") ? -1 !== a.getAttribute("src").indexOf(b) : !1
};