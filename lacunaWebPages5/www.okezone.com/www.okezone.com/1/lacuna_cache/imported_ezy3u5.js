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
/*__________________________________________________________________________push okezone main __*/

var config = {
    apiKey: "AIzaSyC-J5qQqlxG4_LoQ_MHXYXR_EGPjv6XK_M",
    authDomain: "okezone-web.firebaseapp.com",
    databaseURL: "https://okezone-web.firebaseio.com",
    storageBucket: "okezone-web.appspot.com",
    messagingSenderId: "33055933926"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

navigator.serviceWorker.register('/fm-sw.js')
.then((fmsw) => {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[506:925]", functionData => eval(functionData))}).catch((err) => {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[942:997]", functionData => eval(functionData))});
console.log('poi is on');
/*__________________________________________________________________________the functions __*/

function permissionReq(){lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[1150:1943]", functionData => eval(functionData))}

function displayPOI(){lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[1968:2575]", functionData => eval(functionData))}
function displayNotif(){lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[2600:2778]", functionData => eval(functionData))}

function storeToken(token) {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[2809:3265]", functionData => eval(functionData))}

function getToken(){lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[3288:3661]", functionData => eval(functionData))}

function retrieveCurrentToken(){lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[3696:3991]", functionData => eval(functionData))}

function retrieveNewToken() {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[4023:4159]", functionData => eval(functionData))}

function setCookie(cname, cvalue, exdays, domain) {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[4213:4494]", functionData => eval(functionData))}

function getCookie(cname) {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[4524:4933]", functionData => eval(functionData))}

function checkCookie(cname) {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[4965:5108]", functionData => eval(functionData))}

function deleteCookie(cname, domain) {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[5149:5344]", functionData => eval(functionData))}

function rangeTime(miliseconds){lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[5379:5772]", functionData => eval(functionData))}

if(typeof utm_source!=="undefined"){
if (utm_source !== null){
          $.ajax({
            url:"https://webpush.okezone.com/administrator/auth_push/auth_utm",
            type:"POST",
            data:{
                tracking : utm_source
            },
            success:function(data) {lacuna_lazy_load("lacuna_cache/imported_ezy3u5.js[6078:6137]", functionData => eval(functionData))}
          });
        }


}else{
console.log('No UTM');
 
}
