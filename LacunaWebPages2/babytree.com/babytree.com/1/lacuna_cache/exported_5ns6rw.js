
        if (typeof bui === "undefined") bui = {};
        bui.webSite = bui.webSite || {};
        bui.webSite.isLogin = false;
        bui.webSite.userData = [];
        bui.webSite.getRootDomain = function() {
            return 'babytree.com';
        };
        bui.webSite.getWebDomain = function() {
            return 'www.babytree.com';
        };
        bui.webSite.getMobileDomain = function() {
            return 'm.babytree.com';
        };
        bui.webSite.getApiDomain = function() {
            return 'api.babytree.com';
        };
        bui.webSite.getHomeDomain = function() {
            return 'home.babytree.com';
        };
        bui.webSite.getUploadDomain = function() {
            return 'upload.babytree.com';
        };
        bui.webSite.getRdDomain = function() {
            return 'log.babytree.com';
        };
        bui.webSite.getSsoDomain = function() {
            return 'sso.babytree.com';
        };
        bui.webSite.getPromoDomain = function() {
            return 'promo.babytree.com';
        };
        bui.webSite.getPromoUploadDomain = function() {
            return 'promo.upload.babytree.com';
        };
        bui.webSite.getCDNDomain = function() {
            return 'static01.babytreeimg.com';
        };
    