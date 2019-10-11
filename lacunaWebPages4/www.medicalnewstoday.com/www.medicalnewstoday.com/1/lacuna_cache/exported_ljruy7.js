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

        <!-- GA Universal Code 2014-08 (obfuscated) -->

        eval(function(p, a, c, k, e, d) {lacuna_lazy_load("lacuna_cache/exported_ljruy7.js[98:465]", functionData => eval(functionData)) = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
                }
            }
            return p
        }('5(-1,2(){(2(i,s,o,g,r,a,m){i[\'c\']=r;i[r]=i[r]||2(){(i[r].q=i[r].q||[]).e(d)},i[r].l=1*j h();a=s.b(o),m=s.6(o)[0];a.7=1;a.8=g;m.9.k(a,m)})(y,A,\'z\',\'//x.n-3.t/3.u\',\'4\')});5(-1,2(){4(\'v\',\'p-w-1\',\'f\')});', 37, 37, '||function|analytics|ga|fireOrSaveJsFunctions|getElementsByTagName|async|src|parentNode||createElement|GoogleAnalyticsObject|arguments|push|auto||Date||new|insertBefore|||google||UA||||com|js|create|849615|www|window|script|document'.split('|')))
    