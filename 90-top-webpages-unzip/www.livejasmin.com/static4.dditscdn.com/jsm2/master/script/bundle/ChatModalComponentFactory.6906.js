(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{6741:function(e,t,i){var s=i("3414"),n=i("d869"),a=i("83cb"),o=function(e){o.superclass.constructor.call(this,e)};e.exports=Ext.extend(o,a,{name:n.FlashChatPageControllerAbstract.NAME,chatId:"chatapplet",minAppletHeight:1,minAppletWidth:1,defaultBrowserScrollBarWidth:17,removeAppletCounter:10,chatCounter:0,chatPageId:n.PageId.CHAT_PERFORMER,cookieExpiration:2592e3,defaultAppletResizeTimeOut:5e3,isVideoContentOpened:!1,_isFirstPerfShown:!1,_memberApplet:{},flashVarsNeedRefresh:["performerid","pid","sbip","sbhash","proxyip","category","tags","lowcamfeed","ishd","ishq","isFavorite","teaserduration","teaseraudio","teaserurl","teaservideoaudio","teasertype","channel_type"],init:function(e,t){this.addEvents(n.FlashChatPageControllerAbstract.EVENT_OVERLAY_CONTENT_READY,n.FlashChatPageControllerAbstract.EVENT_MODEL_CHANGE,n.FlashChatPageControllerAbstract.EVENT_APPLET_RESIZE,n.FlashChatPageControllerAbstract.EVENT_WINDOW_RESIZE),o.superclass.init.call(this,e,t),this.getAppletContainer()},getAppletContainer:function(){},muteChatApplet:function(){this.isVideoContentOpened=!0,this.callFunctionOnApplet("videoPlayingStarted")},unMuteChatApplet:function(){this.isVideoContentOpened&&(this.isVideoContentOpened=!1,this.callFunctionOnApplet("videoPlayingStopped"))},callFunctionOnApplet:function(e){var t=this.getAppletContainer();t&&s.isFunction(t[e])&&setTimeout(function(){try{t[e]()}catch(e){console.log(e)}},0)},setSessionId:function(e){try{this.getAppletContainer().setSessionId(e)}catch(e){console.error("Set session id failed: ",e)}},setLayoutMode:function(e){var t=s.Config.get("memberAppletFlashvars");t.appletsize=e,s.Config.set("memberAppletFlashvars",t),this._memberApplet.flashvars=t,this.model.setLayoutMode(e)},resetChatApplet:function(){},setDefaultFlashVars:function(){s.each(this.flashVarsNeedRefresh,function(e,t){this.setAllAppletsFlashvars(this.flashVarsNeedRefresh[t],"")},this)},_refreshFlashVars:function(e){var t=this._decodeFlashVars(e);for(var i in this.setDefaultFlashVars(),t)if(t.hasOwnProperty(i)){var s=i.replace("_","");this.setAllAppletsFlashvars(s,t[i])}},_decodeFlashVars:function(e){return Ext.isObject(e)?e:Ext.decode(e)},setAllAppletsFlashvars:function(e,t){this._memberApplet.flashvars&&(this._memberApplet.flashvars[e]=t)},getAppletFlashvars:function(){return this._memberApplet.flashvars},onWindowResize:function(){this.fireEvent(n.FlashChatPageControllerAbstract.EVENT_WINDOW_RESIZE)},onAppletLayoutModeChange:function(e){this.model.isPrivateEndDisplayed()||this.setLayoutMode(e.layout)},onBeforeUnload:function(){this.callHideChatOnMemberApplet()},callHideChatOnMemberApplet:function(){var e=this.getAppletContainer();e&&s.isFunction(e.hideChat)&&e.hideChat()},onExitFullScreen:function(){this.setLayoutMode(n.FlashChatPageControllerAbstract.LAYOUT_MODE_FULL)},onUpdateScrollPosition:function(e){this.view.updateScrollPosition(e)},setPerformerDetailsOnApplet:function(){},backToPrivate:function(){this.callFunctionOnApplet("backToPrivate")},onPerformerDetailsReady:function(e){var t=s.getPath(e,"json.data");this._performerName=t.performer_id||t.performerid,o.superclass.onPerformerDetailsReady.call(this,e)},bind:function(){o.superclass.bind.call(this),s.on([{element:Ext.fly(window),event:"beforeunload",handler:this.onBeforeUnload},{element:s.Broadcaster,event:n.BasicController.GLOBALEVENT_REFRESH_APPLET_SESSION,handler:this.setSessionId}],this)}})},"83cb":function(e,t,i){var s=i("3414"),n=i("d869"),a=i("e5b0").default,o=i("a9a1").store,l=i("06af").addPerformerToHistory,r=function(e,t){r.superclass.constructor.call(this,e,t)};e.exports=Ext.extend(r,s.Controller,{name:"ChatPageControllerAbstract",init:function(e,t){var i;r.superclass.init.call(this,e,t),this._isFirstPerfShown=this.model.isChatPage,i=this._getNormalizeAppletVars(),this._saveToHistory(i)},onPrivateStartClick:function(){this.model.setIsOnPrivate(!0)},onPrivateEnd:function(){this.model.setIsOnPrivate(!1)},registerHistory:function(){this.nextPerformerHistoryEntry="next-performer",s.History.registerActions(this.nextPerformerHistoryEntry,this.nextPerformerHistoryEntry,this.setNextModel,this),s.History.registerComponent(this,{state:this.nextPerformerHistoryEntry}),this.replaceState()},_saveToHistory:function(e){var t=e.p_id||e.pid,i=e.performer_id||e.performerid,s=e.status;t&&o.dispatch(l({nick:i,id:t.toString(),status:s}))},_getNormalizeAppletVars:function(){return s.Config.get("memberAppletFlashvars")?s.Config.get("memberAppletFlashvars"):s.Config.get("HTMLAppletVars")},replaceState:function(){throw"This method must be implemented."},setNextModel:function(e){if(!s.Config.get("isOnPrivate")){var t={performerId:e.name};this.model.getCurrentModelName()!==e.name&&(this.onGetPerformerDetails(t,!0),this.fireEvent(n.ChatPageController.HISTORY_CHANGE,e.name))}},getModelData:function(e){var t={};return"string"==typeof e?(t.performerId=e,t):e},onGetPerformerDetails:function(e){var t=this.getModelData(e),i=t.performerId;s.Config.set("performerChannelType",t.channelType),this._callPerformerDetailsService(i),this.model.setCurrentModelName(i);var a=this._getNormalizeAppletVars();this.fireEvent(n.ChatPageControllerAbstract.EVENT_MODEL_CHANGE,{modelData:t,flashVars:a,isFirstPerfShown:this._isFirstPerfShown}),this._isFirstPerfShown=!0},_callPerformerDetailsService:function(e){a.get(e).then(s.bind(this.onPerformerDetailsReady,this)).catch(function(e){})},onPerformerDetailsReady:function(e){var t=s.getPath(e,"json.data");this._performerData=e.responseText,this._refreshFlashVars(t),this._saveToHistory(t),this.setPerformerDetailsOnApplet()},_refreshFlashVars:function(e){s.Config.set("memberAppletFlashvars",e)},setPerformerDetailsOnApplet:function(){throw"You must implement setPerformerDetailsOnApplet method"}})},a937:function(e,t,i){var s=i("3414"),n=i("d869"),a=i("e58c"),o=i("0592").default,l=i("a9a1").store,r=i("06af").addPerformerToHistory,h=i("c33b").startPrivate,c=function(e){c.superclass.constructor.call(this,e)};e.exports=Ext.extend(c,a,{name:n.HTML5ChatPageModalController.NAME,init:function(e,t){c.superclass.init.call(this,e,t),s.Config.set("OverlayAppletType",n.appletType.HTML5)},openChatModal:function(e){c.superclass.openChatModal.call(this,e),this.model.isPrivateEndDisplayed()||(this.html5Client.sizeChange(),this.view.showHTML5Applet(),this.view.setAppletSizeType())},showChatModal:function(e){var t=s.Config.get("HTMLAppletVars");if(t){var i=t.performer_id||t.performerid;i===e&&l.dispatch(r({id:(t.p_id||t.pid).toString(),nick:i,status:t.status}))}c.superclass.showChatModal.call(this,e);try{this.html5Client.sizeChange(),this.html5Client.enableKeyboard()}catch(e){}this.showChatBlock()},getAppletContainer:function(){return this.html5Client},onLogIn:function(e){this._setSessionIdOnApplet(e)},onSignupSuccess:function(e){this._setSessionIdOnApplet(e)},_setSessionIdOnApplet:function(e){var t=e.json.data,i={sessionid:t.jsm1sessionid,jsm2sessionid:t.jsm2sessionid};try{this.html5Client.setSessionId(i)}catch(e){console.error(e)}},resetChatApplet:function(){this.html5Client.hideChat()},loadAppletAndPlay:function(){this._setSessionFlashVars(),this.html5Client.performerDetailsReady(this._performerData)},onModalOpened:function(e){c.superclass.onModalOpened.call(this,e),this.toggleKeyboardActionsOnApplet(e,!1)},onModalClosed:function(e){this.toggleKeyboardActionsOnApplet(e,!0)},onPrivatePeekButtonClick:function(){this.html5Client.startSneakPeek()},onJoinVipShowFromListPageClick:function(){this.html5Client.joinVIPShow()},onJoinScheduledShowFromListPageClick:function(){this.html5Client.joinScheduledShow()},onVideoCallButtonClick:function(){this.html5Client.startVideoCall()},onStartVideoCall:function(e){this.pleaseCallMeBack=e,o.navigateToChatPage("chat/"+e,{trigger:!0,preventNavigateBack:!0})},onStartPrivate:function(e){this.performerToPrivateFromMessages=e,o.navigateToChatPage("chat/"+e,{trigger:!0,preventNavigateBack:!0})},onStreamReady:function(){if(this.pleaseCallMeBack===l.getState().performer.nick){this.pleaseCallMeBack=null;var e=this;setTimeout(function(){e.html5Client.startVideoCall()},0)}this.performerToPrivateFromMessages===l.getState().performer.nick&&(l.dispatch(h(this.performerToPrivateFromMessages)),this.performerToPrivateFromMessages=null)},toggleKeyboardActionsOnApplet:function(e,t){if(e.scope&&e.scope.name!==n.ChatModalComponent.NAME&&!1===this.model.getIsMinimized())try{t?this.html5Client.enableKeyboard():this.html5Client.disableKeyboard()}catch(e){}},bind:function(){c.superclass.bind.call(this),s.on([{element:s.Broadcaster,event:n.ModalComponent.GLOBALEVENT_MODAL_OPENED,handler:this.onModalOpened},{element:s.Broadcaster,event:n.ModalComponent.GLOBALEVENT_MODAL_CLOSED,handler:this.onModalClosed},{element:s.Broadcaster,event:n.PerformerView.EVENT_JOIN_VIP_SHOW_FROM_LIST_PAGE,handler:this.onJoinVipShowFromListPageClick},{element:s.Broadcaster,event:n.PerformerView.EVENT_JOIN_SCHEDULED_SHOW_FROM_LIST_PAGE,handler:this.onJoinScheduledShowFromListPageClick},{element:s.Broadcaster,event:"PerformerView:privatePeekButtonClick",handler:this.onPrivatePeekButtonClick},{element:s.Broadcaster,event:"PerformerView:videoCallButtonClick",handler:this.onVideoCallButtonClick},{element:s.Broadcaster,event:n.ModelMessagesConversationController.GLOBALEVENT_VIDEO_CALL_START,handler:this.onStartVideoCall},{element:s.Broadcaster,event:n.FlashExternal.GLOBALEVENT_APPLET_STREAM_READY,handler:this.onStreamReady}],this)}})},b441:function(e,t,i){var s=i("3414"),n=i("d869"),a=function(e){a.superclass.constructor.call(this,e)};e.exports=Ext.extend(a,s.View,{name:"FlashChatPageViewAbstract",windowResizeDebounceTime:300,mainContainerId:"chatblock",footerTopLinkSel:".footer_link",headerTopLinkClass:"header_top_link",chatAppletId:"chatapplet",headerId:"header",footerId:"footer",freechatId:"freechat",_memberAppletEl:null,_mainContainerEl:null,showHTMLClass:"show-html",showFlashClass:"show-flash",init:function(){this.addEvents(n.FlashChatPageViewAbstract.EVENT_WINDOW_RESIZE,n.FlashChatPageViewAbstract.EVENT_APPLET_MINIMIZE),this._selectElements(),a.superclass.init.call(this)},_selectElements:function(){this._freechatEl=Ext.get(this.freechatId),this._mainContainerEl=Ext.get(this.mainContainerId)},minimizeMemberApplet:function(){},setFreeChatBlock:function(){this._freechatEl.display("block")},_showChatBlock:function(){switch(Ext.getBody().addClass("chat-opened"),this._mainContainerEl.removeClass("hidden"),this.name){case"HTML5ChatPageModalView":this._mainContainerEl.removeClass(this.showFlashClass);break;case"FlashChatPageModalView":this._mainContainerEl.removeClass(this.showHTMLClass)}},createMemberAppletContainer:function(){this._freechatEl.createChild('<div id="'+this.chatAppletId+'"></div>'),this._freechatEl.display("block")},getAppletEl:function(){return this._memberAppletEl||(this._memberAppletEl=Ext.get(this.chatAppletId)),this._memberAppletEl},onAppletSizeChange:function(){this.getAppletEl(),this._memberAppletEl.dom.width="",this._memberAppletEl.dom.height=this.model.getAppletSize().height,this.element.setStyle({width:"",height:this.model.getAppletSize().height+"px"}),this._memberAppletEl.dom.removeAttribute("style")},minimizeApplet:function(){this.element.setStyle({width:"1px",height:"1px"}),this.fireEvent(n.FlashChatPageViewAbstract.EVENT_APPLET_MINIMIZE,this)},resetAppletSize:function(){this.element.setStyle({width:"",height:""}),this.getAppletEl().dom.removeAttribute("style")},onWindowResize:function(){this.fireEvent(n.FlashChatPageViewAbstract.EVENT_WINDOW_RESIZE,{scope:this})},removeMemberApplet:function(){this.getAppletEl().remove(),this._memberAppletEl=null},onLayoutModeChange:function(){this.model.isCurrentLayoutMode(n.FlashChatPageControllerAbstract.LAYOUT_MODE_NORMAL)||this.model.isCurrentLayoutMode(n.FlashChatPageControllerAbstract.LAYOUT_MODE_FULLSCREEN)?this._mainContainerEl.removeClass(n.FlashChatPageControllerAbstract.LAYOUT_MODE_FULL):this._mainContainerEl.addClass(n.FlashChatPageControllerAbstract.LAYOUT_MODE_FULL)},updateScrollPosition:function(e){var t=window.scrollX||window.pageXOffset||document.documentElement.scrollLeft,i=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.scrollTo(t,i+e)},bind:function(){a.superclass.bind.call(this),s.on([{element:Ext.fly(window),event:"resize",handler:s.debounce(this.onWindowResize,this.windowResizeDebounceTime)},{element:this.model,event:n.ChatPageModel.EVENT_LAYOUT_MODE_CHANGE,handler:this.onLayoutModeChange},{element:this.model,event:n.ChatPageModel.EVENT_APPLET_SIZE_CHANGE,handler:this.onAppletSizeChange}],this)}})},ddd5:function(e,t,i){"use strict";i.r(t);var s=i("a937"),n=i.n(s),a=i("d869"),o=i.n(a),l=i("5aa8"),r=i.n(l),h=i("b441"),c=i.n(h),d=function e(t){e.superclass.constructor.call(this,t)};Ext.extend(d,c.a,{name:"HTML5ChatPageModalView",showClass:"show-html",fullClass:"full",updateScrollPosition:function(e){this._mainContainerEl.dom.scrollTop+=e},_showChatBlock:function(){Ext.getBody().addClass("chat-opened"),d.superclass._showChatBlock.call(this),this._mainContainerEl.addClass(this.showClass)},_hideChatBlock:function(){Ext.getBody().removeClass("chat-opened"),this._mainContainerEl.removeClass(this.showClass),this.getAppletEl()&&this.getAppletEl().blur()},showChat:function(){this.getAppletEl()&&this.getAppletEl().focus()},hideChat:function(){this._resetFreechatElement(),this.minimizeMemberApplet(),this._hideChatBlock()},setAppletSizeType:function(e){e&&(this.element.data("size-type",e),e===o.a.HTML5ChatPageComponent.SIZE_FLUID?this.element.addClass("full"):this.element.removeClass("full"))},_resetFreechatElement:function(){this._freechatEl.dom.removeAttribute("style")},lockChat:function(){this._hideChatBlock()},unlockChat:function(){this._showChatBlock()},hideHTML5Applet:function(){r.a.isWin7IE11()?Ext.fly("member_client_container").addClass("minified"):Ext.fly("member_client_container").addClass("hidden")},showHTML5Applet:function(){r.a.isWin7IE11()?Ext.fly("member_client_container").removeClass("minified"):Ext.fly("member_client_container").removeClass("hidden")}});var p,m=d;t.default=(p=null,{getComponent:function(){return new Promise(function(e,t){Promise.resolve().then(i.bind(null,"f94d")).then(function(t){t.default.instance.appletReady.then(function(){i.e(8).then(i.bind(null,"71fb")).then(function(t){var i=t.default;p||(p=new i("chatblock",{controllerClassName:n.a,viewClassName:m})),e(p)})})})})}})},e58c:function(e,t,i){var s=i("7ab0"),n=i("3414"),a=i("d869"),o=i("0592").default,l=i("2daa"),r=i("6741"),h=(i("a9a1").store,function(e){h.superclass.constructor.call(this,e)});e.exports=Ext.extend(h,r,{name:a.ChatPageModalControllerAbstract.NAME,chatTopValue:0,init:function(e,t){t.items.model.component.isChatPage=!1,t.items.model.component.setIsMinimized(!0),h.superclass.init.call(this,e,t)},onGetPerformerDetails:function(){h.superclass.onGetPerformerDetails.apply(this,arguments);var e=this.model.getCurrentModelName();this.model.getIsMinimized()||l.getHash()==="chat/"+e||o.navigateToChatPage("chat/"+e,{trigger:!1,keepActiveModal:!0,preventNavigateBack:!0})},onPerformerDetailsReady:function(e){this._performerData=e.responseText,this.model.getIsMinimized()||this.loadAppletAndPlay(),h.superclass.onPerformerDetailsReady.call(this,e)},openChatModal:function(e){this.model.getIsLocked()?this.unlockChatModal():this.showChatModal(e)},showChatModal:function(e){Promise.resolve().then(function(){i("f94d").default.instance.playStreamByModelName(e).catch(function(){})}.bind(null,i)).catch(i.oe),this.view.showChat(),this.model.setIsMinimized(!1)},redirectOnPerformerError:function(){var e=n.getUrl("Error/Error404");setTimeout(function(){document.location.replace(e)},1e3)},showChatBlock:function(){this.view._showChatBlock()},unlockChatModal:function(){this.model.setIsLocked(!1),this.view.unlockChat()},lockChatModal:function(){this.model.setIsLocked(!0),this.view.lockChat()},closeChatModal:function(){this.model.getIsOnPrivate()||(this.model.setIsLocked(!1),this.model.setIsMinimized(!0),this.view.hideChat(),this.resetChatApplet())},closeApplet:function(){this.model.getIsMinimized()||this.model.getIsLocked()||this.model.isPrivateEndDisplayed()||(this.model.setIsMinimized(!0),this.view.hideChat(),o.navigate("/",{trigger:!0,preventNavigateBack:!0}))},onModalOpened:function(e){e.scope&&e.scope.name===a.ChatModalComponent.NAME&&!this.model.isPrivateEndDisplayed()&&this.showChatBlock()},loadAppletAndPlay:function(){throw"You must implement loadAppletAndPlay method"},_setSessionFlashVars:function(){this.getAppletFlashvars()&&(this.setAllAppletsFlashvars("sessionid",n.Config.get("sessionIdJasmin1")),this.setAllAppletsFlashvars("jsm2session",s.getSessionId()),this.setAllAppletsFlashvars("issearchpage",parseInt(n.getMeta("isSearchPage"))))}})}}]);