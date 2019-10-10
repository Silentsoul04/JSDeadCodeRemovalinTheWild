Bootstrapper.bindDOMLoaded(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    window["ensightenVariables"] = function() {
        var custId = merchId = totalAmt = currencyCode = XOFlowId = fptiPage = flowName = pageGroup = urlConstruct = "";
        urlConstruct = window.location.host + window.location.pathname;
        if (urlConstruct && typeof urlConstruct === "string") {
            if (urlConstruct.indexOf("\x26") !== -1) urlConstruct = urlConstruct.substr(0, urlConstruct.indexOf("\x26"));
            urlConstruct = urlConstruct.replace(RegExp(/[^@]+@[^\\.]+\..+/gi),
                "REDACTED")
        }
        if (window.fpti !== null && window.fpti !== undefined) {
            if (window.fpti.cust && window.fpti.cust.length > 0) custId = window.fpti.cust;
            if (window.pre !== null && window.pre !== undefined)
                if (window.pre.payee !== null && window.pre.payee !== undefined) {
                    if (window.pre.payee.res.data.merchant.id) merchId = window.pre.payee.res.data.merchant.id;
                    if (window.pre.cart.res.data.purchase.amounts.total.amount) totalAmt = window.pre.cart.res.data.purchase.amounts.total.amount;
                    if (window.pre.cart.res.data.purchase.amounts.total.currency_code) currencyCode =
                        window.pre.cart.res.data.purchase.amounts.total.currency_code;
                    if (window.pre.checkoutAppData.res.data.flow_id) XOFlowId = window.pre.checkoutAppData.res.data.flow_id
                }
            if (window.fpti.page && window.fpti.page.length > 0) fptiPage = window.fpti.page;
            if (window.fpti.flnm && window.fpti.flnm.length > 0) flowName = window.fpti.flnm;
            if (window.fpti.pgrp && window.fpti.pgrp.length > 0) pageGroup = window.fpti.pgrp
        }
        var dcmVars, mediaplexVars, mathVars, allVariables = {};
        dcmVars = "u1\x3d" + custId + ";u2\x3d" + merchId + ";u3\x3d" + totalAmt + ";u4\x3d" +
            currencyCode + ";u5\x3d;u6\x3d" + fptiPage + ";u7\x3d" + urlConstruct + " " + ";u8\x3d" + flowName + ";u9\x3d" + Bootstrapper.data.resolve(["19470"]) + ";u10\x3d" + window.dataLayer.contentCountry + ";u11\x3d;u12\x3d;u13\x3d;u14\x3d;u15\x3d;u16\x3d;u17\x3d;u18\x3d;u19\x3d;u20\x3d;" + "dc_lat\x3d;dc_rdid\x3d;tag_for_child_directed_treatment\x3d;ord\x3d1?";
        mediaplexVars = "mpuid\x3d" + custId + ";;;;" + merchId + ";;;;" + totalAmt + ";;;;;" + currencyCode + ";;" + pageGroup + ";;;;" + ";;;;" + Bootstrapper.data.resolve(["19470"]) + ";";
        mathVars = "v1\x3d" +
            Bootstrapper.data.resolve(["19470"]) + "\x26v2\x3d" + totalAmt + "\x26v3\x3d\x26s1\x3d" + merchId + "\x26s2\x3d\x26s3\x3d";
        allVariables = {
            u1_CustomerId: custId,
            u2_MerchantId: merchId,
            u3_TotalAmount: totalAmt,
            u4_CurrencyCode: currencyCode,
            u5_FPTIPage: fptiPage,
            u6_FPTIPageGroup: pageGroup,
            u7_HREF: urlConstruct,
            u8_FPTIFlowName: flowName,
            XOFLOWID: XOFlowId,
            u9_FPTICookie: Bootstrapper.data.resolve(["19470"])[0],
            u10_CountryCode: window.dataLayer.contentCountry,
            u11_ContentLanguage: window.dataLayer.contentLanguage
        };
        return {
            dcmVars: dcmVars,
            mediaplexVars: mediaplexVars,
            mathVars: mathVars,
            allVariables: allVariables
        }
    };
    setTimeout(function() {
        if (window.location.href.indexOf("myaccount/home") == -1 && window.location.href.indexOf("help/home") == -1) Bootstrapper.imageRequest("https://ad.doubleclick.net/ddm/activity/src\x3d6386697;type\x3dmppmz0;cat\x3dpphom0;" + window.ensightenVariables().dcmVars)
    }, 100)
}, 3005293, 337001);