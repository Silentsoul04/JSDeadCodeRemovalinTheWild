(window.webpackJsonp=window.webpackJsonp||[]).push([["Reddit~RichTextEditor"],{"./src/lib/isSimpleClick/index.ts":function(e,t,n){"use strict";t.a=function(e){if(e&&e.target&&function(e){for(var t=e;t&&t!==window.document.body;){if("A"===t.nodeName)return!0;t=t.parentElement}return!1}(e.target)){if(e.ctrlKey)return!1;if(e.altKey)return!1;if(e.metaKey)return!1;if(e.shiftKey)return!1}return!0}},"./src/reddit/actions/economics/subredditPremium/actionCreators.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return p}));var r=n("./src/lib/makeActionCreator/index.ts"),s=n("./src/reddit/actions/economics/subredditPremium/constants.ts"),o=Object(r.a)(s.a),c=Object(r.a)(s.b),i=Object(r.a)(s.c),a=Object(r.a)(s.d),d=Object(r.a)(s.e),u=Object(r.a)(s.f),m=Object(r.a)(s.g),l=(Object(r.a)(s.h),Object(r.a)(s.i)),b=Object(r.a)(s.j),p=Object(r.a)(s.k)},"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es6.promise.js"),n("./node_modules/core-js/modules/es6.string.iterator.js");var r=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=(n("./node_modules/core-js/modules/es6.array.find.js"),n("./node_modules/core-js/modules/es6.object.assign.js"),n("./node_modules/@babel/runtime/regenerator/index.js")),o=n.n(s),c=(n("./node_modules/core-js/modules/web.dom.iterable.js"),n("./node_modules/core-js/modules/es6.array.iterator.js"),n("./node_modules/core-js/modules/es6.object.to-string.js"),n("./node_modules/core-js/modules/es6.object.keys.js"),n("./node_modules/regenerator-runtime/runtime.js"),n("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js")),i=n("./node_modules/lodash/forOwn.js"),a=n.n(i),d=n("./src/reddit/actions/governance/errorToast.ts"),u=n("./src/reddit/endpoints/economics/emojis.ts"),m=n("./src/reddit/endpoints/economics/specialMembership.ts"),l=n("./src/reddit/endpoints/economics/subredditPremium.ts"),b=n("./src/reddit/endpoints/governance/badges.ts"),p=n("./src/config.ts"),f=n("./src/reddit/endpoints/governance/requester.ts");function g(e,t,n){return Object(f.a)(e,{method:"get",endpoint:"".concat(p.a.metaUrl,"/products/").concat(t,"?owners=").concat(n)+"&types=emotes_pack,giphy"})}var j=n("./src/reddit/models/Badge/index.ts"),h=n("./src/reddit/models/Badge/managementPage.ts"),O=n("./src/reddit/models/Product/index.ts"),v=n("./src/reddit/reducers/economics/subredditPremium/index.ts"),y=n("./src/reddit/selectors/economics.ts"),x=n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return k})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return I}));var w=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t,n,r){var s,c,i,a,d,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.apiContext,c=n().user.account,i=!n().economics.specialMemberships.allSubscriptionsFetched,!c||!i){e.next=15;break}return e.next=6,Object(m.b)(s());case 6:if(!(a=e.sent).ok){e.next=15;break}if(t(Object(x.a)(a.body)),!(d=Object.keys(a.body)).length){e.next=15;break}return e.next=13,Object(m.f)(s(),d);case 13:(u=e.sent).ok&&t(Object(x.h)(u.body));case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},k=function(e,t){return function(){var n=Object(c.a)(o.a.mark((function n(r,s,c){var i,a,d,u,m;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=c.apiContext,a=s().user.account,d=s().economics.subredditPremium[e],u=!d||d.status!==v.a.Fetched||t,!a||!u){n.next=9;break}return n.next=7,Object(l.a)(i(),e,a.id);case 7:m=n.sent,r(Object(x.j)(m));case 9:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n,r,s){var c,i,a,u,m,l,p;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=s.apiContext,i=r(),a=i.user.account,u=Object(y.d)(i,e.subredditId),m=Object.keys(u).map((function(e){return u[e]})).filter(Boolean),!a||!e.badge){t.next=12;break}return l=e.placement===j.a.First?u[h.a.Loyalty]:e.placement===j.a.Second?u[h.a.Achievement]:u[h.a.Cosmetic],n(Object(x.b)(Object.assign({},e,{currentAppliedBadges:m,userId:a.id}))),t.next=10,Object(b.a)(c(),e.subredditId,e.badge.id);case 10:(p=t.sent).ok||(n(Object(x.b)(Object.assign({},e,{badge:l,currentAppliedBadges:m,userId:a.id}))),Object(d.a)(n,p.error));case 12:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},C=function(e,t){return function(){var n=Object(c.a)(o.a.mark((function n(r,s,c){var i,a,d;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.apiContext,n.next=3,r(k(e,!0));case 3:(i=s().economics.subredditPremium[e])&&i.status===v.a.Fetched&&(a=i.data.userOwnedBadges,(d=a.find((function(e){return e.type===t.id})))&&(r(_({badge:d,subredditId:e})),r(Object(x.e)(h.c.MyBadges))));case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n,s,c){var i,m,l,b,p,f,j,h,v;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=c.apiContext,m=s().user.account,l=!s().economics.emotes[e],b=!s().economics.gifs[e],!m||!l&&!b){t.next=17;break}return t.next=7,Promise.all([Object(u.b)(i(),e),g(i(),e,m.id)]);case 7:if(p=t.sent,f=Object(r.a)(p,2),j=f[0],(h=f[1]).ok){t.next=14;break}return Object(d.a)(n,h.error),t.abrupt("return");case 14:v={emotes:[],emoteCollections:j.ok?j.body:{},giphy:[]},a()(h.body,(function(e){e.type===O.a.EmotesPack?v.emotes.push(e):e.type===O.a.Giphy&&v.giphy.push(e)})),n(Object(x.f)({subredditId:e,products:v}));case 17:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}},"./src/reddit/constants/accountManager.ts":function(e,t,n){"use strict";var r,s,o;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),function(e){e.ChangePassword="/change_password/",e.Index="/login/",e.Register="/register/"}(r||(r={})),function(e){e.ChangePassword="changePassword",e.Close="close",e.CreateAccount="createAccount",e.Login="login",e.Register="register",e.Resize="resize",e.Subscribe="subscribe"}(s||(s={})),function(e){e.Embed="embed",e.Modal="modal"}(o||(o={}))},"./src/reddit/controls/ToggleSwitch/index.m.less":function(e,t,n){e.exports={toggleDisplay:"_2FKpII1jz0h6xCAw1kQAvS",toggleSwitch:"_2e2g485kpErHhJQUiyvvC2",mActive:"_1L5kUnhRYhUJ4TkMbOTKkI",mDisabled:"_3clF3xRMqSWmoBQpXv8U5z"}},"./src/reddit/controls/ToggleSwitch/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=n("./node_modules/react/index.js"),o=n.n(s),c=n("./src/lib/classNames/index.ts"),i=n("./src/reddit/controls/ToggleSwitch/index.m.less"),a=n.n(i);t.a=function(e){var t;return o.a.createElement("button",{"aria-checked":e.on,className:Object(c.a)(a.a.toggleSwitch,e.className,(t={},Object(r.a)(t,a.a.mActive,e.on&&!e.disabled),Object(r.a)(t,a.a.mDisabled,e.disabled),t)),style:e.on&&!e.disabled&&e.activeColorOverride?{backgroundColor:e.activeColorOverride}:void 0,id:e.id,role:"switch",tabIndex:e.tabIndex,type:"button",onClick:function(){return!e.disabled&&e.onToggle&&e.onToggle()}},o.a.createElement("div",{className:a.a.toggleDisplay}))}},"./src/reddit/endpoints/economics/emojis.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n("./src/config.ts"),s=n("./src/reddit/endpoints/governance/requester.ts"),o=function(e,t){return Object(s.a)(e,{method:"post",endpoint:"".concat(r.a.metaUrl,"/orders"),data:{price:"0",currency:"usd",products:[{productId:t.productId,quantity:"1"}],subredditId:t.subredditId}})},c=function(e,t){return Object(s.a)(e,{method:"get",endpoint:"".concat(r.a.metaUrl,"/product-collections/").concat(t,"?types=emotes_pack")})}},"./src/reddit/endpoints/economics/specialMembership.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return b}));n("./node_modules/core-js/modules/es6.object.assign.js");var r=n("./src/config.ts"),s=n("./src/lib/omitHeaders/index.ts"),o=n("./src/reddit/constants/headers.ts"),c=n("./src/reddit/endpoints/governance/requester.ts"),i=n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");function a(e,t){return Object(c.a)(e,{endpoint:"".concat(r.a.metaUrl,"/communities/").concat(t.subredditId,"/me"),method:"patch",data:{specialMemberships:{settings:{renew:!1}}}})}function d(e){return Object(c.a)(e,{endpoint:"".concat(r.a.metaUrl,"/users/me"),method:"get"}).then((function(e){return e.ok?e.body.specialMemberships?Object.assign({},e,{body:e.body.specialMemberships}):Object.assign({},e,{body:{}}):e}))}function u(e,t){return Object(c.a)(e,{endpoint:"".concat(r.a.metaUrl,"/ps/me/braintree-client-tokens"),method:"post",data:{username:t&&t.username}})}function m(e,t){return Object(c.a)(e,{endpoint:"".concat(r.a.metaUrl,"/orders"),method:"post",data:{currency:"usd",orderTarget:"special_membership",price:t.price,products:[{productId:"membership",quantity:"1"}],providerArgs:{paymentNonce:t.nonce,savePaymentMethod:!0},providerName:"braintree",subredditId:t.subredditId,targetArgs:{renew:!0,receiverName:t.username}}})}function l(e,t){return Object(c.a)(e,{endpoint:"".concat(r.a.metaUrl,"/orders"),method:"post",data:{currency:"usd",orderTarget:"special_membership",price:t.price,products:[{productId:"membership",quantity:t.numMonths}],providerArgs:{paymentNonce:t.nonce,savePaymentMethod:!1},providerName:"braintree",subredditId:t.subredditId,targetArgs:{renew:!1},recipientUserName:t.recipientUsername,anonymousGift:t.isAnonymous}})}function b(e,t){return Object(c.a)(Object(s.a)(e,[o.a]),{endpoint:"".concat(e.apiUrl,"/api/info?id=").concat(t.join(",")),method:"get"}).then((function(e){if(e.ok){var t=e.body.data.children.map((function(e){var t=e.data;return Object(i.a)(t)})).reduce((function(e,t){return e[t.id]=t,e}),{});return Object.assign({},e,{body:t})}return e}))}},"./src/reddit/endpoints/economics/subredditPremium.ts":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/regenerator/index.js"),s=n.n(r),o=(n("./node_modules/core-js/modules/es6.promise.js"),n("./node_modules/core-js/modules/web.dom.iterable.js"),n("./node_modules/core-js/modules/es6.array.iterator.js"),n("./node_modules/core-js/modules/es6.object.to-string.js"),n("./node_modules/core-js/modules/es6.string.iterator.js"),n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),c=(n("./node_modules/regenerator-runtime/runtime.js"),n("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js")),i=n("./node_modules/lodash/merge.js"),a=n.n(i),d=n("./src/config.ts"),u=n("./src/reddit/endpoints/governance/badges.ts"),m=n("./src/reddit/endpoints/governance/community.ts"),l=n("./src/reddit/endpoints/governance/products/badges.ts"),b=n("./src/reddit/endpoints/governance/requester.ts");function p(e,t){return Object(b.a)(e,{method:"get",endpoint:"".concat(d.a.metaUrl,"/product-collections/").concat(t,"?types=badge")})}function f(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(s.a.mark((function e(t,n,r){var c,i,d,b,f,g,j,h,O,v,y,x;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={subredditId:n,badges:{},errors:{},collections:{},products:{},subscription:void 0,userOwnedBadges:[]},i=p(t,n),d=Object(m.a)(t,{subredditId:n}),b=Object(l.a)(t,n),f=Object(u.c)(t,n,r),e.next=7,Promise.all([i,d,b,f]);case 7:return g=e.sent,j=Object(o.a)(g,4),h=j[0],O=j[1],v=j[2],y=j[3],h.ok?c.collections=h.body:c.errors.collections=h.error,O.ok&&(x=O.body,c.subscription=x.specialMemberships,c.communityRaw=x),v.ok?c.products=v.body:c.errors.products=v.error,y.ok?(a()(c.badges,y.body.badges),c.userOwnedBadges=y.body.userOwnedBadges):c.errors.userBadges=y.error,e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return j}));var j=function(e,t){return Object(b.a)(e,{endpoint:"".concat(d.a.metaUrl,"/products/").concat(t,"?types=badge,membership"),method:"delete"})}},"./src/reddit/helpers/trackers/monthsToMinutes.ts":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return f}));n("./node_modules/core-js/modules/es6.object.assign.js");var r=n("./src/reddit/selectors/subreddit.ts"),s=n("./src/reddit/selectors/telemetry.ts"),o=function(e){return Object.assign({},s.defaults(e),{actionInfo:s.actionInfo(e,{settingValue:"top_banner"}),noun:"account_complete",source:"banner"})},c=function(){return function(e){return Object.assign({},o(e),{action:"view"})}},i=function(e){return function(t){return Object.assign({},o(t),{action:"click",banner:{id:e,buttonText:e}})}},a=function(e){return Object.assign({},s.defaults(e),{source:"community_manager"})},d=function(e){return function(t){return Object.assign({},a(t),{action:"click",noun:"subreddit_name",subreddit:{id:Object(r.G)(t,e),name:e}})}},u=function(e){return function(t){return Object.assign({},a(t),{action:"click",noun:"remove_subreddit",subreddit:{id:Object(r.G)(t,e),name:e}})}},m=function(){return function(e){return Object.assign({},s.defaults(e),{action:"click",noun:"sign_up",source:"id_card"})}},l=function(e){return function(t){return Object.assign({},s.defaults(t),{action:"click",noun:e,source:"community_nav"})}},b=function(e){return Object.assign({},s.defaults(e),{noun:"starter_home",source:"banner"})},p=function(){return function(e){return Object.assign({},b(e),{action:"view"})}},f=function(){return function(e){return Object.assign({},b(e),{action:"click",actionInfo:s.actionInfo(e,{reason:"close"})})}}},"./src/reddit/icons/fonts/Coin/index.m.less":function(e,t,n){e.exports={CoinIcon:"_12xlue8dQ1odPw1J81FIGQ",coinIcon:"_12xlue8dQ1odPw1J81FIGQ"}},"./src/reddit/icons/fonts/Coin/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),s=n.n(r),o=n("./src/reddit/constants/colors.ts"),c=n("./src/reddit/icons/fonts/helpers.tsx"),i=n("./src/reddit/icons/fonts/Coin/index.m.less"),a=n.n(i),d=n("./src/lib/lessComponent.tsx").a.wrapped((function(e){return s.a.createElement("i",{className:"".concat(Object(c.b)("coin")," ").concat(e.className),style:{color:e.fillColor||o.a.gold}})}),"CoinIcon",a.a);t.a=d},"./src/reddit/icons/svgs/ChevronDown/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),s=n.n(r);t.a=function(e){return s.a.createElement("svg",{className:e.className,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",onClick:e.onClick},s.a.createElement("g",null,s.a.createElement("polygon",{fill:"inherit",points:"11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"})))}},"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less":function(e,t,n){e.exports={icon:"_1fQOXfyxB1SmgMOi7sihQV"}},"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),s=n.n(r),o=n("./src/lib/classNames/index.ts"),c=n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),i=n.n(c);t.a=function(e){return s.a.createElement("svg",{className:Object(o.a)(i.a.icon,e.className),style:e.style,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"}),s.a.createElement("path",{d:"M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"}),s.a.createElement("path",{d:"M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"}),s.a.createElement("path",{d:"M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"}),s.a.createElement("path",{d:"M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"}),s.a.createElement("path",{d:"M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"}))}},"./src/reddit/icons/svgs/Help/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),s=n.n(r);t.a=function(e){return s.a.createElement("svg",{className:e.className,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{fill:"inherit",d:"M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"}))}}}]);
//# sourceMappingURL=Legacy~Reddit~RichTextEditor.b23832787b6da487c121.js.map