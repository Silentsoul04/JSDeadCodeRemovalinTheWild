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
waShBtn=function(){this.isIos===!0&&this.cntLdd(window,this.crBtn)},waShBtn.prototype.isIos=navigator.userAgent.match(/Android|iPhone/i)&&!navigator.userAgent.match(/iPod|iPad/i)?!0:!1,waShBtn.prototype.cntLdd=function(win,fn){lacuna_lazy_load("lacuna_cache/imported_y6auvr.js[226:962]", functionData => eval(functionData))},waShBtn.prototype.addStyling=function(){lacuna_lazy_load("lacuna_cache/imported_y6auvr.js[1002:4292]", functionData => eval(functionData))},waShBtn.prototype.crBtn=function(){lacuna_lazy_load("lacuna_cache/imported_y6auvr.js[4327:5340]", functionData => eval(functionData))};var theWaShBtn=new waShBtn;