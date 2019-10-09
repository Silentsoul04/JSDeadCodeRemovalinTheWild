'use strict';var h=Date.now||function(){return+new Date};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var k=a=>new Promise((b,c)=>{let e=a.length,d=null;if(e){var f=(g,x)=>{g||d||(d=x);e--;e||(d?c(d):b())};
for(const g of a)g.then(f.bind(null,!0),f.bind(null,!1))}else b()}),l=a=>self.btoa(String.fromCharCode.apply(null,new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_");let m=null;function n(a,b){const c={};c.key=a;c.value=b;return p().then(e=>new Promise((d,f)=>{try{const g=e.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{d()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function q(){return n("IndexedDBCheck","testing IndexedDB").then(()=>r("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function r(a){return p().then(b=>new Promise((c,e)=>{const d=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);d.onsuccess=()=>{const f=d.result;c(f?f.value:null)};
d.onerror=()=>{e('Unable to get key "'+a+'" from object store.')}}),()=>null)}
function p(){return m?Promise.resolve(m):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const e=c.result;if(e.objectStoreNames.contains("swpushnotificationsstore"))m=e,a(m);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),p()};
c.onupgradeneeded=t})}
function t(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;function u(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function v(a){if(!(a.payload&&a.payload.chrome&&a.payload.chrome.endpoint))return Promise.resolve();const b=new FormData;b.append("json_navigation_endpoints",JSON.stringify([a.payload.chrome.endpoint]));let c="[]";a.payload.chrome.extraUrlParams&&(c=JSON.stringify(a.payload.chrome.extraUrlParams));b.append("extra_url_params",c);b.append("hashed_identifier",a.hashedIdentifier||"");b.append("identifier_salt",a.identifierSalt||"");return fetch("/notifications_ajax?action_convert_endpoint_to_url=1",{credentials:"include",
method:"POST",body:b}).then(e=>e.ok?e.json().then(d=>{if(!d.successful_conversion)return Promise.resolve();if(a.payload.chrome.postedEndpoint){{var f=a.payload.chrome.postedEndpoint;const g=new FormData;g.append("record_notification_interactions_endpoint",JSON.stringify(f));fetch("/notifications_ajax?action_record_notification_interactions=1",{credentials:"include",method:"POST",body:g})}}return w(a,d.url)}).catch(()=>Promise.resolve()):Promise.resolve())}
function w(a,b){a.deviceId&&n("DeviceId",a.deviceId);a.timestampSec&&y(a.timestampSec);const c=a.payload.chrome;return self.registration.showNotification(c.title,{body:c.body,icon:c.iconUrl,data:{nav:b,id:c.notificationId,attributionTag:c.attributionTag},tag:c.title+c.body+c.iconUrl,requireInteraction:!0}).then(()=>{z(a.displayCap)}).catch(()=>{})}
function A(a){return r("DeviceId").then(b=>{b={credentials:"include",method:"POST",body:B({deviceId:b,c:a})};return fetch("/notifications_ajax?action_notification_click=1",b)})}
function C(){return Promise.all([r("TimestampLowerBound"),D(),r("DeviceId")]).then(([a,b,c])=>{if(!a)return Promise.reject(null);a={credentials:"include",method:"POST",body:B({endpoint:b,deviceId:c,ts:a})};return fetch("/notifications_ajax?action_get_notifications=1",a).then(E)})}
function E(a){return a.ok?a.json().then(F).catch(()=>{}):Promise.resolve()}
function F(a){if(a.errors)return Promise.reject(a.errors);a.device_id&&n("DeviceId",a.device_id);a.ts&&y(a.ts);if(a.notifications){const b=[];a.notifications.forEach(c=>{b.push(self.registration.showNotification(c.title,{body:c.message,icon:c.iconUrl,data:{nav:c.nav,id:c.id,attributionTag:c.attributionTag},tag:c.title+c.message+c.iconUrl,requireInteraction:c.requireInteraction}))});
return k(b).then(()=>{z(a.display_cap)})}return Promise.resolve()}
function z(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let c=0;c<b.length-a;c++)b[c].close()})}
function G(a){const b=[H(a),r("RegistrationTimestamp").then(I),J(),K()];Promise.all(b).catch(()=>{n("IDToken",a);L();return Promise.resolve()})}
function I(a){a=a||0;return 9E7>=h()-a?Promise.resolve():Promise.reject()}
function H(a){return r("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function J(){return r("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function K(){return r("Endpoint").then(a=>D().then(b=>a===b?Promise.resolve():Promise.reject()))}
function L(){n("RegistrationTimestamp",0);Promise.all([D(),M(),N()]).then(([a,b,c])=>{O(a,b?l(b):null,c?l(c):null)}).catch(()=>{O()})}
function O(a=null,b=null,c=null){q().then(e=>{e&&(n("Endpoint",a),n("P256dhKey",b),n("AuthKey",c),n("Permission",Notification.permission),Promise.all([r("DeviceId"),r("NotificationsDisabled"),P()]).then(([d,f,g])=>{d={credentials:"include",method:"POST",body:B({endpoint:a,deviceId:d,d:f,p256dhKey:b,authKey:c,e:g})};fetch("/notifications_ajax?action_register_device=1",d).then(Q).catch(()=>{})}))})}
function B(a){const b=new FormData;a.endpoint&&b.append("endpoint",a.endpoint);a.deviceId&&b.append("device_id",a.deviceId);a.ts&&b.append("timestamp_lower_bound",a.ts);a.c&&(b.append("notification_id",a.c.id),b.append("attribution_tag",a.c.attributionTag));a.d&&b.append("notifications_disabled",(!!a.d).toString());a.p256dhKey&&b.append("p256dh_key",a.p256dhKey);a.authKey&&b.append("auth_key",a.authKey);a.e&&b.append("registration_token",a.e);b.append("permission",Notification.permission);return b}
function Q(a){n("RegistrationTimestamp",h());a.ok&&a.json().then(b=>{b.ts&&y(b.ts);b.device_id&&n("DeviceId",b.device_id)}).catch(()=>{})}
function D(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function M(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function N(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function P(){return fetch("/notifications_ajax?action_get_registration_token=1",{credentials:"include",method:"POST"}).then(a=>{if(a.ok)return a.json().then(b=>b.registration_token).catch(()=>{})})}
function y(a){n("TimestampLowerBound",a)}
;self.oninstall=function(a){a.waitUntil(self.skipWaiting())};
self.onactivate=function(a){a.waitUntil(self.clients.claim())};
self.onmessage=function(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(n("IDToken",b),L()):"notifications_check_registration"===a&&G(b)};
self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data,c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(e=>{a:{var d=b.nav;for(const f of e)if(f.url===d){f.focus();break a}self.clients.openWindow(d)}});
a.waitUntil(c);a.waitUntil(A(b))};
self.onpush=function(a){a.waitUntil(r("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return v(a.data.json())}catch(c){return Promise.resolve(c.message)}return C()}));
a.waitUntil(u())};
self.onpushsubscriptionchange=function(){L()};
