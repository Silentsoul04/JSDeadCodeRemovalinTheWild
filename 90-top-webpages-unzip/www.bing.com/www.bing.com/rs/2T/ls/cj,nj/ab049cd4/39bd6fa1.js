var HomepageImgViewer;(function(){function ir(){var n=_ge("sh_rdiv");n&&(sj_be(n,wi,function(){hp_addclass(n,ti)}),sj_be(n,ut,function(){hp_removeclass(n,ti)}))}function ri(n,t,i){var f=sj_gx(),o="hp",s=_H.vert?o:"js",u=hp_pushparams(["format="+s,"idx="+n,"n="+t,"nc="+sb_gt(),"pid=hp"]),e,h,c;_w.g_vidOn&&u.push("video=1");(_H.quiz||_H.hp5)&&u.push("quiz=1");_H.favs&&u.push("fav=1");(_H.shdlg||_H.hp5)&&u.push("og=1");_H.uhd&&_H.uhdm&&_w.matchMedia&&matchMedia(_H.uhdm).matches&&u.push("uhd=1");_H.uhdProg&&devicePixelRatio>=_H.uhdDpr&&(u.push("uhd=1"),_H.uhdDynamic&&(e=DynamicResolutionUHD.getDimensions(),u.push("uhdwidth="+e.width),u.push("uhdheight="+e.height)));_H.archiveIID&&_w._G&&_G.IG&&_G.P&&(u.push("IG="+_G.IG),h=_H.archiveIID+n,u.push("IID="+_G.P+"."+h));_H.feature&&u.push("feature="+_H.feature);c="/HPImageArchive.aspx?"+u.join("&");f.open("GET",c,!0);sj_be(f,"readystatechange",function(){var h,t,e,c,u;if(f.readyState==4&&f.status==200){if(h=void 0,t=void 0,s==o){if(e=sj_ce("div"),e.innerHTML=f.responseText,e.children.length<1)return;c=e.getElementsByClassName("json")[0];h=c.textContent;t=e.getElementsByClassName("html")[0]}else h=f.responseText;if(r=rr(h),t&&t.children&&r&&r.images)for(u=0;u<t.children.length&&u<r.images.length;u++)r.images[u].html=t.children[u];w=Math.min(et,n+(r&&r.images&&r.images.length)||0);i(!!r)}});f.send(null)}function rr(n){if(typeof n!="string"||!n)return null;if(_w.JSON&&_w.JSON.parse)try{return _w.JSON.parse(n)}catch(t){}try{return new Function("return "+n)()}catch(t){return null}}function ur(){for(var n=0,t=r.images.length;n<t;n++)lt(n,n)}function lt(n,i){if(t[n]=r.images[i]||null,gi){var u=Math.max(screen.height,screen.width),f=Math.min(screen.height,screen.width),e="//"+window.location.host+"/iod/";t[n].url=e+u+"/"+f+"/"+t[n].fullstartdate;t[n].portraiturl=e+f+"/"+u+"/"+t[n].fullstartdate}r.quiz&&(t[n].quiz=r.quiz);r.fav&&(t[n].fav=r.fav)}function ui(i){var r=n+1;b[r]||r>=et?it():t[r]?fi(r):ri(r,1,function(n){n?(lt(r,0),fi(r)):it();typeof i=="function"&&i(n)})}function fr(){var n=_w.g_pf;n&&(n.Im&&er(n.Im),n.Vid&&or(n.Vid))}function er(n){var t=new Image;t.onload=function(){var t=sj_cook.get("_SS","bIm");t=t&&t.length>=3?t.substring(t.length-3)+n.hash:n.hash;sj_cook.set("_SS","bIm",t,!1,"/")};t.src=n[k]}function or(n){var t=sj_ce("video","prefVid"),i,u,r;try{t.setAttribute("preload","auto")}catch(f){}for(t.width=956,t.height=512,i=0,u=n.length;i<u;i++)r=sj_ce("source"),r.src=n[i][2],r.type=n[i][1],t.appendChild(r);t.style.display="none";sj_b.appendChild(t);sj_be(t,"canplaythrough",function(){var n=_ge("prefVid");n&&sj_b.removeChild(n)})}function fi(n){if(!b[n]){it();var i=t[n],r=new Image;r.onload=function(){sj_evt.fire("onHPIVImg"+n,n);b[n]=1};r.src=_w.g_vidOn&&i.vid?i.vid.image:i[k]}}function sr(){var i=_ge("audioElm"),n,t;i&&i.pause();n=_ge("audioMain");n&&(n.style.display=ft);t=_ge("hp_audio_info");t&&(t.style.display=ft)}function at(t){n==0||a||(n--,st=1,ei(),hi(1,n));t&&sj_pd(t)}function vt(t){if(n<w-1&&!a&&!ot){var i=n+1;st=1;ot=1;b[i]||ar();sj_evt.bind("onHPIVImg"+i,lr,1);hi(-1,i)}t&&sj_pd(t)}function hr(n){var t=_d.activeElement,i,r;!cr()&&sj_we(t,tr)||sj_we(t,_ge(di))||(i=37,r=39,n.key=="ArrowLeft"||n.keyCode==i?(li(n),_w.Log&&Log.Log&&Log.Log("Show","HP","ArrowLeftImg",!1)):(n.key=="ArrowRight"||n.keyCode==r)&&(ai(n),_w.Log&&Log.Log&&Log.Log("Show","HP","ArrowRightImg",!1)))}function cr(){var n=_ge("sb_form_q");return!(n&&n.value&&n.value!=="")}function lr(t){t[1]==n+1&&(n++,ot=0,ei())}function it(){var f=t[n],r=f[ni]=="1"?d:g,o,s,h,c;f.vid&&!_H.hp5&&(o=f.vid.dark,_ge("sh_pl").parentNode.className=o?"sh_pll":"sh_pld",_ge("sh_ps").parentNode.className=o?"sh_psl":"sh_psd",r=o?d:g);s=r+"dis";e&&(e.className=r,h=e.href===nt?wt:pt,e.style.cursor=h);n===w-1?(i.firstChild.className=s,_w.hp_disable(i)):(i.firstChild.className=r,_w.hp_enable(i));n==0?(u.firstChild.className=s,_w.hp_disable(u)):(u.firstChild.className=r,_w.hp_enable(u));i.title=y.previous;u.title=y.next;c=st?"nav":"";sj_evt.fire("updateHpImg",f,c)}function ar(){i.title=y.loading}function ei(){a=1;ui(null);l&&l.disable();var t=_ge("vid");_w.g_vidOn&&(VM.InFoc=0,t&&t.style.opacity!="0"&&(t.onended=null,VM.hideControls()));_ge("sh_iga")&&sr();gt[n]?a=0:ht.down(vr)}function vr(){var o;s.style.display=ft;var i=t[n],r=_ge("vid"),f=_ge("sc_mktb"),e=t[n].fullstartdate,h=e.substr(0,8)+"_"+e.substr(8,4),u;if(r&&_w.g_vidOn&&VM&&(r.pause&&!r.paused&&r.pause(),r.style.display="none",sj_so(r,0),VM.Loaded=!1,_w.g_vid=null,i.vid)){if(oi(i.vid.caption,i.copyrightlink),u="url('"+i.vid.image+"')",s.style.backgroundImage=u,s.style.display=dt,i.vid.loop){r.onended=VM.play;try{r.setAttribute("loop","true")}catch(c){}}else{r.onended=VM.end;try{r.removeAttribute("loop")}catch(c){}}_w.g_vid=i.vid.sources;VM.InFoc=1;VM.sa_vid_ld(yr);ht.up(si)}i.vid||(oi(i.copyright,i.copyrightlink),u=i[k],u="url('"+u+"')",s.style.backgroundImage=u,s.style.filter=_w.sb_i8l?"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+i[k]+"', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity=0);":"",s.style.display=dt,ht.up(si));sj_evt.fire("onHPImgViewerNavigation",h);sj_evt.fire("CurImageIdx",n);f&&(o=_ge("hp_husb"),f.style.display=!!o||i.vid?"none":"block")}function oi(n,t){var i=typeof t==c||t==""||t==nt,r=_ge("musCard");e&&(r?e.href=nt:(e.title=n,e.href=i?nt:t,e.style.cursor=i?wt:pt))}function yr(){var n=_ge("vid");n&&VM&&VM.InFoc&&(VM._autoPlay===!1?VM.pause():VM.play(),VM.Loaded=!0,n.style.display="block",sj_so(n,100))}function si(){var s,e;if(a=0,s=t[n],_w.g_hot){e=s.hs;for(var i=0,h=void 0,r=void 0,v=void 0,o=void 0,y=e.length;i<y;i++){if(i>=e.length){typeof _w.g_triggerElems!==c&&(_w.g_triggerElems[i].isHotSpotDisabled=!0);continue}else typeof _w.g_triggerElems!==c&&(_w.g_triggerElems[i].isHotSpotDisabled=!1);h=i+1;r=e[i];v=_ge("sc_hst"+h);v.style.left=r.locx+"%";v.style.top=r.locy+"%";o=_ge("sc_hs"+h);o.href=r.link;o.firstChild.innerHTML=r.desc;o.firstChild.nextSibling.innerHTML=r.query}l&&l.intro(1)}var b=_ge("hp_pgNav"),k=b?2:0,p=_ge("hp_pgbar");if(p)for(var w=p.getElementsByTagName("h3"),d=w.length,g=s.msg,i=0,f=void 0,u=void 0,y=d;i<y;i++){if(f=g[i],!f)break;if(u=w[i+k],!u)break;u.parentNode.id!==pi&&(u.innerHTML=f.title,u.nextSibling.innerHTML=f.text,u.nextSibling.href=f.link)}}function hi(n){if(typeof _w.hpl!==c){if(_w.hpl&&(o=_w.hpl),o&&o.ssd){var t=o.ssd,i=new Date(parseInt(t.substr(0,4),10),t.substr(4,2)-1,parseInt(t.substr(6,2),10)+n);o.ssd=i.getFullYear().toString()+ci(i.getMonth()+1)+ci(i.getDate())+"_"+t.substr(9,4)}o&&(_w.hpl=o)}}function ci(n){return(n<10?"0":"")+n}function pr(){yt(h)}function yt(n){sj_evt&&sj_evt.fire(bi,n)}function li(i){sj_pd(i);n==0&&t&&t.length==1?f(sj_wf(vt,i)):vt(i)}function ai(i){sj_pd(i);n==0&&t&&t.length==1?f(sj_wf(at,i)):at(i)}function f(n){sb_st(sj_wf(ui,n),1);sj_ue(i,p,f);sj_ue(u,p,f);sj_ue(i,h,f);sj_ue(u,h,f)}function vi(){ri(0,ct,function(e){var o,c,l,s;if(e){if(n=0,tt!=null)for(ur(),o=0;o<w;o++)t[o].fullstartdate==tt&&(n=o);else lt(0,0);y=y||r.tooltips;sj_be(i,rt,vt);sj_be(u,rt,at);i.firstChild.style.visibility=bt;u.firstChild.style.visibility=bt;_H.hpaimg&&sj_be(_d,ut,hr);c=_ge("sh_pl");l=_ge("sh_ps");it();i.firstChild.className=t[n][ni]=="1"?d:g;_w.hp_enable(i);t[n].vid&&!_H.hp5&&(s=t[n].vid.dark,c.parentNode.className=s?"sh_pll":"sh_pld",l.parentNode.className=s?"sh_psl":"sh_psd",i.firstChild.className=s?d:g);nr&&(sj_be(i,kt,li),sj_be(u,kt,ai));sj_be(i,p,f);sj_be(u,p,f);sj_be(i,h,f);sj_be(u,h,f)}})}function wr(){var n,o,t,f,e,r;if(i&&u&&(ir(),!_w.g_IMVL)){if(typeof _w.g_IMVL!==c&&(_w.g_IMVL=1),sj_evt.bind("onHPHS",function(n){l=n[1]},1),n=_ge("vid"),n&&!_H.forceAudio&&(n.muted=!0,n.volume=0),v&&(sj_be(v,h,pr),sj_be(v,ut,yt),ii&&sj_be(ii,rt,yt)),o=new RegExp("[\\?&]ssd=([^&#]*)"),t=o.exec(_w.location.href),t!=null&&t[1]!=null&&(tt=t[1].replace("_",""),ct=et),f=!0,_w.QuickSettings)for(e=_w.QuickSettings.getActiveSettings(),r=0;r<e.length;++r)e[r].name==="DisableIOTD"&&(f=!1);f?(vi(),sj_evt.bind("onRBComplete",function(){var n=_w.sched;_w.g_hptse&&n&&n.schedule({ns:"H",task:function(){n.complete("H")}});fr()},1)):_H.initIV=vi}}var pt="pointer",wt="default",c="undefined",bt="visible",pi="hp_pgps",h="focus",rt="click",ut="keydown",wi="mousedown",p="mouseover",kt="touchstart",bi="hpsbact",ki="div",dt="block",ft="none",et=8,w=0,n=0,ot=0,o=null,st=0,t=[],b=[],gt=[],l,k="url",ni="bot",di="fbpgdg",s=_ge("bgDiv"),gi=_ge("bgDivPortrait"),i=_ge("sh_igl"),u=_ge("sh_igr"),a=0,e=_ge("sh_cp"),d="sc_light",g="sc_dark",ti="no_outline",nt="javascript:void(0)",r=null,nr="ontouchstart"in _w,tr=_ge("sbox"),v=_ge("sb_form_q"),ii=v&&v.parentNode,y,ht=_anim.fadeE(s,500),ct,tt,yi;_w.hp_overrideImg=function(n,t){gt[n]=t};ct=1;tt=null;yi=_w._H&&_H.hpicIID?"onPostICLoaded":"onBgSet";sj_evt.bind(yi,wr,1)})(HomepageImgViewer||(HomepageImgViewer={}))