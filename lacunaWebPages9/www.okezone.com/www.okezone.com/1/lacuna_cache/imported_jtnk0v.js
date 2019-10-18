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
  .then((fmsw) => {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[498:944]", functionData => eval(functionData))}).catch((err) => {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[961:1018]", functionData => eval(functionData))});
console.log('poi is on');
/*__________________________________________________________________________the functions __*/

function permissionReq() {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[1172:1923]", functionData => eval(functionData))}

function displayPOI() {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[1949:2524]", functionData => eval(functionData))}

function displayNotif() {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[2552:2721]", functionData => eval(functionData))}

function storeToken(token) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[2752:3192]", functionData => eval(functionData))}

function getToken() {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[3216:3553]", functionData => eval(functionData))}

function retrieveCurrentToken() {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[3589:3877]", functionData => eval(functionData))}

function retrieveNewToken() {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[3909:4039]", functionData => eval(functionData))}

function setCookie(cname, cvalue, exdays, domain) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[4093:4364]", functionData => eval(functionData))}

function getCookie(cname) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[4394:4761]", functionData => eval(functionData))}

function checkCookie(cname) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[4793:4924]", functionData => eval(functionData))}

function deleteCookie(cname, domain) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[4965:5154]", functionData => eval(functionData))}

function rangeTime(miliseconds) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[5190:5571]", functionData => eval(functionData))}

if (typeof utm_source !== "undefined") {
  if (utm_source !== null) {
    $.ajax({
      url: "https://webpush.okezone.com/administrator/auth_push/auth_utm",
      type: "POST",
      data: {
        tracking: utm_source
      },
      success: function(data) {lacuna_lazy_load("lacuna_cache/imported_jtnk0v.js[5843:5880]", functionData => eval(functionData))}
    });
  }


} else {
  console.log('No UTM');

}