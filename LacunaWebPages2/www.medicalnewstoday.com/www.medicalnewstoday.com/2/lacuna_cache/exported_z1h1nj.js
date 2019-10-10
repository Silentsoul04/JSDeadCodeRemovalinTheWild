
        //CMP	
        var isEEA = true;
        var passEEACheck = false;

        var metadata = 'BOSk20WOSk20WABABBENBR-AAAAeCAFAAUABwAEAANABCA';
        var purposeConsents = {
            1: true,
            2: true,
            3: true,
            4: true,
            5: true
        };
        var vendorConsents = {
            10: true,
            28: true,
            32: true,
            52: true,
            132: true
        };

        function __cmp(cmd, p, cb) {___jdce_logger("lacuna_cache/exported_z1h1nj.js", 458, 1153);
            if (cmd === 'getVendorConsents' || cmd === 'getConsentData') {
                cb({
                    hasGlobalScope: true,
                    gdprApplies: isEEA,
                    metadata: metadata,
                    consentData: metadata,
                    purposeConsents: purposeConsents,
                    vendorConsents: vendorConsents
                }, true);
            } else if (cmd === 'ping') {
                cb({
                    gdprAppliesGlobally: false,
                    cmpLoaded: isEEA
                });
            } else {
                throw new Error('Invalid CMP command ' + cmd);
            }
        }
    