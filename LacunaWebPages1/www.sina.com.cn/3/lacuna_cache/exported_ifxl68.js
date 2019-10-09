
 jsLoader({
     name : 'shm',
     callback : function() {
         var focusScroll = new ScrollPic();
         focusScroll.scrollContId = "current-video"; //内容容器ID
         focusScroll.dotListId = "SI_Guess_Dotss";//点列表ID
         focusScroll.dotClassName = "";//点className
         focusScroll.dotOnClassName = "currentItem";//当前点className
         focusScroll.listType = "";//列表类型(number:数字，其它为空)
         focusScroll.listEvent = "onmouseover"; //切换事件
         focusScroll.frameWidth = 1011;//显示框宽度
         focusScroll.pageWidth = 1011; //翻页宽度
         focusScroll.upright = false; //垂直滚动
         focusScroll.speed = 10; //移动速度(单位毫秒，越小越快)
         focusScroll.space = 40; //每次移动像素(单位px，越大越快)
         focusScroll.autoPlay = true; //自动播放
         focusScroll.autoPlayTime = 5; //自动播放间隔时间(秒)
         focusScroll.circularly = true;
         focusScroll.initialize(); //初始化

         function $(id){
           return document.getElementById(id) || null;
         }

         function attachEvent(obj, evt, func, eObj) {
             eObj = !eObj ? obj : eObj;
             if(obj.addEventListener) {
                 obj.addEventListener(evt , func, false);
             } else if(eObj.attachEvent) {
                 obj.attachEvent('on' + evt, func);
             }
         }

         function getRandom(obj) {
              var max = obj.pageLength - 1;
              var min = 0;
              var randomNum = Math.round(Math.random()*(max - min) + min);
              obj.pageTo(randomNum);
         }

         $('SI_Guess_Prevs').onmousedown = function(){
             focusScroll.pre();
             return false;
         }

         $('SI_Guess_Nexts').onmousedown = function(){
             focusScroll.next();
             return false;
         }

         SHM.dom.byClass('slide_pre')[0].onmousedown = function(){
             focusScroll.pre();
             return false;
         }

         SHM.dom.byClass('slide_nxt')[0].onmousedown = function(){
             focusScroll.next();
             return false;
         }
         attachEvent(SHM.dom.byClass('Live_slide')[0],'mouseenter',function(event) {
             /* Act on the event */
             SHM.dom.byClass('slide_pre')[0].style.display = 'block';
             SHM.dom.byClass('slide_nxt')[0].style.display = 'block';
          }
         )
         attachEvent(SHM.dom.byClass('Live_slide')[0],'mouseleave',function(event) {
             /* Act on the event */
             SHM.dom.byClass('slide_pre')[0].style.display = 'none';
             SHM.dom.byClass('slide_nxt')[0].style.display = 'none';
          }
         )
         attachEvent($('SI_Guess_Dotss'),'mouseover',function(event){
           var tar = event.target || event.srcElement;
           if(tar.tagName == 'SPAN'){
             try{
               _S_uaTrack("index_new_pic", "i_love_pic_change_red_point");
             }catch(e){

             }
           }
         });
     }
 });
