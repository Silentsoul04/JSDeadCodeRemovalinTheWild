(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0c1e":function(e,t,n){var a=n("3414"),o=n("d869"),i=function(e,t){i.superclass.constructor.call(this,e,t)};e.exports=Ext.extend(i,a.Model,{name:o.ChatPageModel.NAME,isChatPage:!0,_isOnPrivate:!1,_isChatLocked:!1,_currentModelName:null,_isPrivateEndDisplayed:!1,setIsOnPrivate:function(e){a.Config.set("isOnPrivate",e),this._isOnPrivate=e},getIsOnPrivate:function(){return this._isOnPrivate},getIsLocked:function(){return this._isChatLocked},setCurrentModelName:function(e){this._currentModelName=e},getCurrentModelName:function(){return this._currentModelName},setIsLocked:function(e){this._isChatLocked=e},getIsMinimized:function(){return this._isMinimized},setIsMinimized:function(e){this._isMinimized=e},setIsPrivateEndDisplayed:function(e){this._isPrivateEndDisplayed=e},isPrivateEndDisplayed:function(){return this._isPrivateEndDisplayed},setAppletReady:function(e){a.Config.set(o.ChatPageModel.MEMBERAPPLET_READY_STATE,e)},isAppletReady:function(){return a.Config.get(o.ChatPageModel.MEMBERAPPLET_READY_STATE)}})},"3aaa":function(e,t,n){var a=n("3414"),o=n("d869"),i=n("0592").default,r=n("83cb"),s=n("a9a1").store,l=n("c33b").startPrivate,h=n("cbc5").setPerformerNick,E=function(e,t){E.superclass.constructor.call(this,e,t)};e.exports=Ext.extend(E,r,{name:o.HTML5ChatPageController.NAME,html5Client:null,appletReady:!1,modalOpened:!1,init:function(e,t){E.superclass.init.call(this,e,t),this.registerHistory()},onPrivateStartClick:function(){E.superclass.onPrivateStartClick.call(this)},_setSessionIdOnApplet:function(e){this.html5Client.setSessionId(e)},muteChatApplet:function(){this.html5Client.mute()},unMuteChatApplet:function(){this.html5Client.unMute()},onModalClosed:function(){this.model.isPrivateEndDisplayed()||setTimeout(a.bind(this.replaceState,this),0),this.html5Client.enableKeyboard(),this.keyboardDisabled=!1,this.modalOpened=!1},onModalOpened:function(){this.appletReady&&(this.html5Client.disableKeyboard(),this.keyboardDisabled=!0),this.modalOpened=!0},onAppletReady:function(){this.appletReady=!0,this.modalOpened&&!this.keyboardDisabled&&this.html5Client.disableKeyboard()},replaceState:function(){var e=this.model.getCurrentModelName(),t=e;""!==location.hash&&(t+=location.hash);try{window.history.replaceState({HTML5ChatPageController:{name:e,state:this.nextPerformerHistoryEntry,params:e,url:e}},null,t)}catch(e){console.error("error: ",e)}},onGetPerformerDetails:function(e,t){var n,o,r=this.model.getCurrentModelName();E.superclass.onGetPerformerDetails.apply(this,arguments),n=this.model.getCurrentModelName(),o=a.Config.get("htmlTitle").replace(r,n),s.dispatch(h(n)),i.pushState({HTML5ChatPageController:{name:n,state:this.nextPerformerHistoryEntry,params:n,url:n}},o,n,t)},_refreshFlashVars:function(e){a.Config.set("HTMLAppletVars",e)},setPerformerDetailsOnApplet:function(){this.html5Client.enableKeyboard(),this.html5Client.performerDetailsReady(this._performerData)},onStartVideoCall:function(e){this.model.getCurrentModelName()!==e?(this.pleaseCallMeBack=e,a.fireEvent(o.FlashExternal.GLOBALEVENT_GET_PERFORMER_DETAILS,e)):this.html5Client.startVideoCall()},onStartPrivate:function(e){this.model.getCurrentModelName()!==e?(this.pleaseTakeMePrivate=e,a.fireEvent(o.FlashExternal.GLOBALEVENT_GET_PERFORMER_DETAILS,e)):s.dispatch(l(e))},onStreamReady:function(){var e=this.model.getCurrentModelName();if(this.pleaseCallMeBack===e){this.pleaseCallMeBack=null;var t=this;setTimeout(function(){t.html5Client.startVideoCall()},0)}this.pleaseTakeMePrivate===e&&(this.pleaseTakeMePrivate=null,s.dispatch(l(e)))},bind:function(){E.superclass.bind.call(this),a.on([{element:a.Broadcaster,event:o.BasicController.GLOBALEVENT_REFRESH_APPLET_SESSION,handler:this._setSessionIdOnApplet},{element:a.Broadcaster,event:o.ModalComponent.GLOBALEVENT_MODAL_CLOSED,handler:this.onModalClosed},{element:a.Broadcaster,event:o.ModalComponent.GLOBALEVENT_MODAL_OPENED,handler:this.onModalOpened},{element:a.Broadcaster,event:o.FlashExternal.GLOBALEVENT_APPLET_READY,handler:this.onAppletReady},{element:a.Broadcaster,event:o.FlashExternal.GLOBALEVENT_APPLET_STREAM_READY,handler:this.onStreamReady}],this)}})},"5d02":function(e,t,n){var a=n("b441"),o=n("5aa8"),i=function(e){i.superclass.constructor.call(this,e)};e.exports=Ext.extend(i,a,{name:"FlashChatPageView",hideChat:function(){this.minimizeMemberApplet()},showChat:function(){this.resetAppletSize()},hideHTML5Applet:function(){try{o.isWin7IE11()?Ext.fly("member_client_container").addClass("minified"):Ext.fly("member_client_container").display("none")}catch(e){}}})},"71fb":function(e,t,n){"use strict";n.r(t);var a=n("3414"),o=n.n(a),i=n("d869"),r=n.n(i),s=n("a9a1"),l=n("cbc5"),h=n("0592"),E=n("7ab0"),d=n.n(E),c=n("98d2"),C=n("3aaa"),_=n.n(C),p=n("5d02"),m=n.n(p),A=n("0c1e"),u=n.n(A),P=n("c384"),T=n.n(P),L=function e(t,n){e.superclass.constructor.call(this,t,n)};Ext.extend(L,o.a.Component,{name:r.a.ChatPageComponentAbstract.NAME,controllerClassName:_.a,viewClassName:m.a,modelClassName:u.a,privateEndContainerId:"freechat_container",applet:null,init:function(e,t){L.superclass.init.call(this,e,t),this._addGlobalEvents(),this._setChatController()},_addGlobalEvents:function(){o.a.addEvents(r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_START,r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_END,r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_TEASER_LEFT,r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_GET_CREDITS_CLICK,r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_RESIZE,r.a.ChatPageComponentAbstract.GLOBALEVENT_MODEL_CHANGE,r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_LOAD_READY,r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_RECOMMENDER_CLICK,r.a.ChatPageComponentAbstract.GLOBALEVENT_SET_MODEL_FROM_HISTORY,r.a.ChatPageComponentAbstract.GLOBALEVENT_OPEN_CHAT,r.a.ChatPageComponentAbstract.GLOBALEVENT_ESC_KEYPRESS,r.a.ChatPageComponentAbstract.GLOBALEVENT_CLOSE_CHAT,r.a.ChatPageComponentAbstract.GLOBALEVENT_WINDOW_RESIZE,r.a.ChatPageComponentAbstract.GLOBALEVENT_HISTORY_CHANGE)},setApplet:function(){throw"You must override this method"},_setModelContentComponent:function(){var e=this,t=o.a.Config.get("performerHasStory"),a=o.a.Config.get("performerMyStoryProfilePictureUrl");void 0!==t&&(t?s.store.dispatch(l.setPerformerHasStory()):s.store.dispatch(l.setPerformerHasNoStory())),void 0!==a&&s.store.dispatch(l.setSmallProfilePicture(a)),Promise.all([n.e(3),n.e(4),n.e(24),n.e(1),n.e(18)]).then(n.bind(null,"92aa")).then(function(t){var n=t.default;e.modelContentComponent instanceof n||(e.modelContentComponent=new n(e.element,{chatComponent:e}))}).catch(function(e){return"An error occurred while loading the component"})},_setChatController:function(){var e=this.controllerClassName;return this._chatController instanceof e||(this._chatController=new e({items:{IndexBroadcaster:{component:o.a.Broadcaster,listeners:o.a.object([[r.a.FlashExternal.GLOBALEVENT_LAYOUT_MODE_CHANGE,"onAppletLayoutModeChange"],[r.a.FlashExternal.GLOBALEVENT_PRIVATE_START,"onPrivateStartClick"],[r.a.FlashExternal.GLOBALEVENT_PRIVATE_END,"onPrivateEnd"],[r.a.FlashExternal.GLOBALEVENT_PEEK_END,"onPrivateEnd"],[r.a.FlashExternal.GLOBALEVENT_EXIT_FULLSCREEN,"onExitFullScreen"],[r.a.FlashExternal.GLOBALEVENT_UPDATE_SCROLL_POSITION,"onUpdateScrollPosition"],[r.a.FlashExternal.GLOBALEVENT_GET_PERFORMER_DETAILS,"onGetPerformerDetails"],[r.a.FlashExternal.GLOBALEVENT_VIP_SHOW_STARTED,"onVipShowStarted"]])},model:{component:this._setChatModel()},view:{component:this._setChatView()}}}),o.a.on([{element:this._chatController,event:r.a.ChatPageControllerAbstract.EVENT_MODEL_CHANGE,handler:this.onModelChange},{element:this._chatController,event:r.a.FlashChatPageControllerAbstract.EVENT_APPLET_RESIZE,handler:this.onAppletResize},{element:this._chatController,event:r.a.FlashChatPageControllerAbstract.EVENT_WINDOW_RESIZE,handler:this.onWindowResize},{element:this._chatController,event:r.a.ChatPageController.HISTORY_CHANGE,handler:this.onHistoryChange}],this)),this._chatController},_setChatView:function(){throw"You must override this method"},_setChatModel:function(){var e=this.modelClassName,t=s.store.getState().performer.nick;return this._chatModel instanceof e||(this._chatModel=new e({performerName:t}),this._chatModel.setCurrentModelName(t)),this._chatModel},getChatModel:function(){return this._setChatModel()},onWindowResize:function(){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_WINDOW_RESIZE,{scope:this})},onPrivateStartClick:function(){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_START,{scope:this,currentModelName:this._chatModel.getCurrentModelName()})},onPeekEnd:function(){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_END,{scope:this,currentModelName:this._chatModel.getCurrentModelName()})},onPrivateEnd:function(e){throw"You must override this method."},setPrivateEnd:function(e){throw"You must override this method."},getPrivateEndContainer:function(e,t){var a=this.privateEndContainerId;return new Promise(function(o){return Promise.all([n.e(5),n.e(6),n.e(13),n.e(28)]).then(n.bind(null,"c4ae")).then(function(n){var i=n.default;o(new i(a,{isHTML5Version:t,modelData:e,items:{}}))})})},onPrivateEndContentReady:function(){throw"You must override this method"},onPrivateEndClose:function(){if(d.a.isChatPage()){var e={category:o.a.getMeta("category")};window.location.href=o.a.getUrl(o.a.Config.get("listPageRoutes").listPage,e,{},"")}else this._destroyPrivateEndContainer(),this.closeApplet()},onPrivateEndRecommenderClick:function(){this._destroyPrivateEndContainer(),this._chatView.showHTML5Applet()},_destroyPrivateEndContainer:function(){this._chatModel.setIsPrivateEndDisplayed(!1),this._privateEndContainer&&(this._privateEndContainer.destroy(),delete this._privateEndContainer)},onPrivateTeaserLeft:function(e){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_TEASER_LEFT,{scope:this,privateTeaserLeft:e})},onGetCreditsClick:function(e){var t=function(e){return e.name===r.a.ChatModalComponent.NAME};if(null==c.default.getUserType())h.default.navigate("signup",{trigger:!0,preventNavigateBack:!1});else{var n="payment";void 0!==e.selectedPackage&&(n+="?package="+e.selectedPackage),h.default.navigate(n,{trigger:!0,replace:!1,preventNavigateBack:d.a.isChatPage(),keepActiveModal:t,lockActiveModal:t,data:{arrivedFromApplet:!0}})}},onModelChange:function(e){this._destroyPrivateEndContainer(),o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_MODEL_CHANGE,{scope:this,modelData:e.modelData}),o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_LOAD_READY,{scope:this,modelData:e.modelData}),o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_RECOMMENDER_CLICK,{scope:this,modelName:e.modelData.performerId,firstModelName:e.flashVars.performerid,modelData:e.modelData})},onAppletResize:function(){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_APPLET_RESIZE,this)},onHistoryChange:function(e){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_HISTORY_CHANGE,e)},onCloseApplet:function(){this.closeApplet()},onCloseChatModal:function(e){e.scope.name===r.a.ChatModalComponent.NAME&&this.closeChatModal()},openChatModal:function(e){this._chatController.openChatModal(e)},lockChatModal:function(){this._chatController.lockChatModal()},closeChatModal:function(){o.a.Config.set("isChatOpenInOverlay",!1),this._destroyPrivateEndContainer(),this._chatController.closeChatModal()},closeApplet:function(){this._chatController.closeApplet()},getIsOnPrivate:function(){return this._chatModel.getIsOnPrivate()},getIsMinimized:function(){return this._chatModel.getIsMinimized()},onMuteChatApplet:function(){this._chatController.muteChatApplet()},onUnMuteChatApplet:function(){this._chatController.unMuteChatApplet()},onAppletReady:function(){this._chatModel&&this._chatModel.setAppletReady(!0)},onStatusChange:function(){throw"onStatusChange method must be implemented"},bind:function(){L.superclass.bind.call(this),o.a.on([{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_APPLET_READY,handler:this.onAppletReady},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_PRIVATE_START,handler:this.onPrivateStartClick},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_VIDEO_CALL_START,handler:this.onPrivateStartClick},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_PRIVATE_END,handler:this.onPrivateEnd},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_PEEK_END,handler:this.onPeekEnd},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_PRIVATE_TEASER_LEFT,handler:this.onPrivateTeaserLeft},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_APPLET_GET_CREDITS_CLICK,handler:this.onGetCreditsClick},{element:o.a.Broadcaster,event:r.a.FlashExternal.GLOBALEVENT_CLOSE_POPUP,handler:this.onCloseApplet},{element:o.a.Broadcaster,event:r.a.ModalComponent.GLOBALEVENT_MODAL_CLOSED,handler:this.onCloseChatModal},{element:o.a.Broadcaster,event:r.a.PhotoViewerComponent.GLOBALEVENT_VIDEO_PLAY_STARTED,handler:this.onMuteChatApplet},{element:o.a.Broadcaster,event:r.a.GalleryController.GLOBALEVENT_VIDEO_PLAYER_START,handler:this.onMuteChatApplet},{element:o.a.Broadcaster,event:r.a.GalleryController.GLOBALEVENT_VIDEO_PLAYER_STOP,handler:this.onUnMuteChatApplet},{element:o.a.Broadcaster,event:r.a.PhotoViewerComponent.GLOBALEVENT_VIDEO_PLAY_STOPPED,handler:this.onUnMuteChatApplet},{element:T.a.getInstance(),event:r.a.StatusUpdaterComponent.PERFORMER_STATUS_CHANGES_EVENT,handler:this.onStatusChange}],this)}});var f=L,v=n("5aa8"),M=n.n(v),N=function e(t){e.superclass.constructor.call(this,t)};Ext.extend(N,o.a.View,{name:r.a.HTML5ChatPageView.NAME,hideHTML5Applet:function(){M.a.isWin7IE11()?Ext.fly("member_client_container").addClass("minified"):Ext.fly("member_client_container").display("none").addClass("hidden")},showHTML5Applet:function(){M.a.isWin7IE11()?Ext.fly("member_client_container").removeClass("minified"):Ext.fly("member_client_container").display("block").removeClass("hidden")},setAppletSizeType:function(e){o.a.Storage.set(r.a.HTML5ChatPageComponent.APPLET_SIZE_STORAGE_LABEL,e),this.element.data("size-type",e)}});var O=N,g=n("2ce1"),V=n("3032"),S=n.n(V),R=n("f94d"),B=n("dab4"),b=n.n(B),G=function e(t,n){e.superclass.constructor.call(this,t,n)};Ext.extend(G,f,{name:r.a.HTML5ChatPageComponent.NAME,flashObjectId:"chatapplet",freeChatId:"freechat",controllerClassName:_.a,viewClassName:O,init:function(e,t){G.superclass.init.call(this,e,t),this._setModelContentComponent(),S.a.appletSendMessageBind(),R.default.appletReady.then(function(e){this.setEvents(e)}.bind(this))},setEvents:function(e){e.onShowGallery=this.onShowGallery,e.onSetFixSize=this._setChatView().setAppletSizeType.bind(this,r.a.HTML5ChatPageComponent.SIZE_FIX),e.onSetFluidSize=this._setChatView().setAppletSizeType.bind(this,r.a.HTML5ChatPageComponent.SIZE_FLUID),e.onSubscribe=g.a.memberApplet.subscribe},onShowGallery:function(e){h.default.navigate("modelgallery/"+e,{trigger:!0,preventNavigateBack:!1,replace:!1,keepActiveModal:!0,lockActiveModal:!0})},_setChatView:function(){var e=this.viewClassName;return this._chatView instanceof e||(this._chatView=new e({id:"freechat_container",model:this._setChatModel()})),this._chatView},_setChatController:function(){var e=this.controllerClassName;return this._chatController instanceof e||(this._chatController=new e({html5Client:R.default.instance,items:{IndexBroadcaster:{component:o.a.Broadcaster,listeners:o.a.object([[r.a.FlashExternal.GLOBALEVENT_VIDEO_CALL_START,"onPrivateStartClick"],[r.a.FlashExternal.GLOBALEVENT_PRIVATE_START,"onPrivateStartClick"],[r.a.FlashExternal.GLOBALEVENT_PRIVATE_END,"onPrivateEnd"],[r.a.FlashExternal.GLOBALEVENT_PEEK_END,"onPrivateEnd"],[r.a.FlashExternal.GLOBALEVENT_GET_PERFORMER_DETAILS,"onGetPerformerDetails"],[r.a.ModelMessagesConversationController.GLOBALEVENT_PRIVATE_START,"onStartPrivate"],[r.a.ModelMessagesConversationController.GLOBALEVENT_VIDEO_CALL_START,"onStartVideoCall"]])},model:{component:this._setChatModel(),listeners:{}},view:{component:this._setChatView(),listeners:{}}}}),o.a.on([{element:this._chatController,event:r.a.ChatPageControllerAbstract.EVENT_MODEL_CHANGE,handler:this.onModelChange},{element:this._chatController,event:r.a.ChatPageController.HISTORY_CHANGE,handler:this.onHistoryChange}],this),d.a.isHokkaido()&&Ext.fly("breadcrumb")&&this._chatController.addComponent({component:new b.a({id:"breadcrumb"}),listeners:{}},"breadCrumbView")),this._chatController},sendEscPressToApplet:function(){this.getChatModel().getIsOnPrivate()||this._chatController.closeApplet()},onBackToPrivate:function(){this._destroyPrivateEndContainer(),this._chatView.showHTML5Applet(),R.default.instance.applet.backToPrivate()},onCallAgain:function(){this._destroyPrivateEndContainer(),this._chatView.showHTML5Applet(),R.default.instance.applet.startVideoCall()},setPrivateEnd:function(e){e=Ext.apply(o.a.Config.get("HTMLAppletVars"),e),this.getPrivateEndContainer(e,!1).then(o.a.bind(function(e){this._privateEndContainer=e,o.a.on([{element:this._privateEndContainer,event:r.a.PrivateEndContainer.EVENT_CLOSE,handler:this.onPrivateEndClose},{element:this._privateEndContainer,event:r.a.PrivateEndContainer.EVENT_PRIVATE_END_CONTENT_READY,handler:this.onPrivateEndContentReady},{element:this._privateEndContainer,event:r.a.PrivateEndContainer.GLOBALEVENT_PRIVATE_END_RECOMMENDER_CLICK,handler:this.onPrivateEndRecommenderClick},{element:this._privateEndContainer,event:r.a.PrivateEndContainer.EVENT_BACK_TO_PRIVATE,handler:this.onBackToPrivate},{element:this._privateEndContainer,event:r.a.PrivateEndContainer.EVENT_CALL_AGAIN,handler:this.onCallAgain},{element:this._privateEndContainer,event:r.a.PrivateEndContainer.EVENT_PRIVATE_END_DESTROYED,handler:this.onPrivateEndDestroyed}],this)},this))},onPrivateEndContentReady:function(){this._chatView.hideHTML5Applet()},onPrivateEnd:function(e){o.a.fireEvent(r.a.ChatPageComponentAbstract.GLOBALEVENT_PRIVATE_END,{scope:this,currentModelName:this._chatModel.getCurrentModelName()}),this._chatModel.isPrivateEndDisplayed()||(this._chatModel.setIsPrivateEndDisplayed(!0),Promise.resolve().then(o.a.bind(function(){this.setPrivateEnd(e)},this).bind(null,n)).catch(n.oe))},onPrivateEndDestroyed:function(){this._chatView.showHTML5Applet()},onPrivateEndClose:function(){this._chatView.showHTML5Applet(),G.superclass.onPrivateEndClose.call(this)},onStatusChange:function(e){R.default.instance.updateRecommender(e)},onMuteChatApplet:function(){R.default.instance.mute()},onUnMuteChatApplet:function(){R.default.instance.unMute()}});t.default=G},c384:function(e,t,n){var a=n("3414"),o=n("d869"),i=n("e781"),r=n("a9a1").store,s=n("06af").updatePerformerStatusesInHistory,l=function(){if(l._instance)throw new Error("This is a singleton class. Please use .getInstance() method instead of new.");this._bindEvents()};l.getInstance=function(){return l._instance||(l._instance=new l)},e.exports=Ext.extend(l,a.Component,{onStatusChange:function(e){r.dispatch(s(e.header)),this.fireEvent(o.StatusUpdaterComponent.PERFORMER_STATUS_CHANGES_EVENT,e.header)},_bindEvents:function(){this.addEvents(a.keys(o.StatusUpdaterComponent.PERFORMER_STATUS_CHANGES_EVENT)),a.on([{element:i.getClient(),event:o.StatusUpdaterComponent.PERFORMER_STATUS_CHANGES_EVENT_JAWS,handler:a.bind(this.onStatusChange,this)}],this)}})}}]);