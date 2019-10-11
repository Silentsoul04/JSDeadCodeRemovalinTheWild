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

        function TrackABTestsFromCookies() {lacuna_lazy_load("lacuna_cache/exported_tg1jay.js[44:874]", functionData => eval(functionData))}

        function TrackABTest(testData) {lacuna_lazy_load("lacuna_cache/exported_tg1jay.js[915:1351]", functionData => eval(functionData))}
        $(document).ready(function() {lacuna_lazy_load("lacuna_cache/exported_tg1jay.js[1389:1439]", functionData => eval(functionData))});
    