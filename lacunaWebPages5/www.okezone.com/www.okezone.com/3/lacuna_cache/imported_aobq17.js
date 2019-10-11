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
.then(null).catch(null);
console.log('poi is on');
/*__________________________________________________________________________the functions __*/
























if(typeof utm_source!=="undefined"){
if (utm_source !== null){
          $.ajax({
            url:"https://webpush.okezone.com/administrator/auth_push/auth_utm",
            type:"POST",
            data:{
                tracking : utm_source
            },
            success:null
          });
        }


}else{
console.log('No UTM');
 
}
