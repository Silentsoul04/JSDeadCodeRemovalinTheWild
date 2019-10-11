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

        function __cmp(cmd, p, cb) {lacuna_lazy_load("lacuna_cache/exported_o4kkcf.js[485:1153]", functionData => eval(functionData))w Error('Invalid CMP command ' + cmd);
            }
        }
    