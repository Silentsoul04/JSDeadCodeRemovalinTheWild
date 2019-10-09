(function(g){var window=this;var j5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",X:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},L:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",N:{transform:"translate(-1.000000, -3.000000)"},L:[{D:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{D:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.P(a.O().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",X:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},L:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},L:[{D:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.T.call(this,{D:"button",X:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},L:[d]});this.w=a;this.ha("click",this.A,this);this.updateValue("title",g.tM(a,e,"i"));g.Di(this,g.PM(b.Ya(),this.element))},k5=function(a){g.Gu.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.J=!1;this.H=this.C=this.w=void 0;this.M(a,"minimized",this.uF);this.M(a,"onStateChange",this.mM)},l5=function(a){g.mP.call(this,a);
this.o=new k5(this.player);this.o.hide();g.KK(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(j5,g.T);j5.prototype.A=function(){this.w.la("onExpandMiniplayer")};g.r(k5,g.Gu);g.h=k5.prototype;
g.h.show=function(){this.w=new g.$m(this.tF,null,this);this.w.start();if(!this.J){this.F=new g.GQ(this.player,this);g.H(this,this.F);g.KK(this.player,this.F.element,4);this.F.C=.6;this.T=new g.GP(this.player);g.H(this,this.T);this.A=new g.T({D:"div",I:"ytp-miniplayer-scrim"});g.H(this,this.A);this.A.o(this.element);this.M(this.A.element,"click",this.Gy);var a=new g.T({D:"button",X:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"Close"},L:[g.KL()]});g.H(this,a);a.o(this.A.element);this.M(a.element,
"click",this.ax);a=new j5(this.player,this);g.H(this,a);a.o(this.A.element);this.B=new g.T({D:"div",I:"ytp-miniplayer-controls"});g.H(this,this.B);this.B.o(this.A.element);this.M(this.B.element,"click",this.Gy);var b=new g.T({D:"div",I:"ytp-miniplayer-button-container"});g.H(this,b);b.o(this.B.element);a=new g.T({D:"div",I:"ytp-miniplayer-play-button-container"});g.H(this,a);a.o(this.B.element);var c=new g.T({D:"div",I:"ytp-miniplayer-button-container"});g.H(this,c);c.o(this.B.element);this.P=new g.vN(this.player,
this,!1);g.H(this,this.P);this.P.o(b.element);b=new g.sN(this.player,this);g.H(this,b);b.o(a.element);this.K=new g.vN(this.player,this,!0);g.H(this,this.K);this.K.o(c.element);this.H=new g.TO(this.player,this);g.H(this,this.H);this.H.o(this.A.element);this.C=new g.EN(this.player,this);g.H(this,this.C);g.KK(this.player,this.C.element,4);this.G=new g.T({D:"div",I:"ytp-miniplayer-buttons"});g.H(this,this.G);g.KK(this.player,this.G.element,4);a=new g.T({D:"button",X:["ytp-miniplayer-close-button","ytp-button"],
N:{"aria-label":"Close"},L:[g.KL()]});g.H(this,a);a.o(this.G.element);this.M(a.element,"click",this.ax);a=new g.T({D:"button",X:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"Close"},L:[g.YL()]});g.H(this,a);a.o(this.G.element);this.M(a.element,"click",this.gK);this.M(this.player,"presentingplayerstatechange",this.vF);this.M(this.player,"appresize",this.Ra);this.M(this.player,"fullscreentoggled",this.Ra);this.Ra();this.J=!0}0!=this.player.getPlayerState()&&g.Gu.prototype.show.call(this);
this.C.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.w&&(this.w.dispose(),this.w=void 0);g.Gu.prototype.hide.call(this);this.player.app.H.o||(this.J&&this.C.hide(),this.player.loadModule("annotations_module"))};
g.h.Y=function(){this.w&&(this.w.dispose(),this.w=void 0);g.Gu.prototype.Y.call(this)};
g.h.ax=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.gK=function(){this.player.playVideo()};
g.h.Gy=function(a){if(a.target==this.A.element||a.target==this.B.element)g.P(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.Nt(g.rK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.la("onExpandMiniplayer")};
g.h.uF=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.app.H.o)};
g.h.tF=function(){g.GN(this.C);this.H.w();this.w&&this.w.start()};
g.h.vF=function(a){g.R(a.state,32)&&this.F.hide()};
g.h.Ra=function(){var a=this.C,b=g.sK(this.player).getPlayerSize().width;a.Ba=0;a.C=b;a.G=!1;g.IN(a)};
g.h.mM=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Ya=function(){return this.F};
g.h.fc=function(){return!1};
g.h.ug=function(){return!1};
g.h.si=function(){return!1};
g.h.ls=function(){};
g.h.Zg=function(){};
g.h.yj=function(){};
g.h.pk=function(){return null};
g.h.Uq=function(){return new g.bg(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Ki=function(a,b,c,d,e){var f=0,k=d=0,l=g.xg(a);if(b){c=g.kn(b,"ytp-prev-button")||g.kn(b,"ytp-next-button");var m=g.kn(b,"ytp-play-button"),n=g.kn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.ug(b,this.element),k=b.x,f=b.y-12):n&&(k=g.kn(b,"ytp-miniplayer-button-top-left"),f=g.ug(b,this.element),b=g.xg(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.sK(this.player).getPlayerSize().width;e=f+(e||0);l=g.pd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Vq=function(){};
g.h.Xh=function(){};g.r(l5,g.mP);l5.prototype.create=function(){};
l5.prototype.ff=function(){return!1};
l5.prototype.load=function(){this.player.hideControls();this.o.show()};
l5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.BP.miniplayer=l5;})(_yt_player);
