            var _comscore = _comscore || [];
            window.__cmp('getVendorConsents', null, function(result, success) {
                 		  var comsCoreParams = {
		    c1: "2",
		    c2: "7241469",
		    c5: "1197228339",
		    c7: "https://www.yahoo.com/",c14: "-1"
		  };
                  var result = result || {};
                  if (typeof success === "boolean" && success && result.gdprApplies && result.vendorConsents) {
                      var COMSCORE_VENDOR_ID = 77;
                      comsCoreParams.cs_ucfr = result.vendorConsents[COMSCORE_VENDOR_ID] ? 1 : 0;
                  }
		  _comscore.push(comsCoreParams);
		  (function() {
		    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
		    s.src = "https://s.yimg.com/lq/lib/3pm/cs_0.2.js";
		    el.parentNode.insertBefore(s, el);
		  })();
            });		