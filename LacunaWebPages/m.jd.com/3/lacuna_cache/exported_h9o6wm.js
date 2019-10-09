
    if(window._unsearch && window.JD){
        JD.sendJs('//wq.360buyimg.com/js/common/dest/wq.unitySearchbar.9d6653230c.js');
        if(JD.device.scene == "qq"){
        		//由于手Q页面基本都是在公共头之后定义的window._unsearch,并且自己加载了unitySearchbar，headsearchbar放到unitySearchbar加载的地方
        		//已处理的公共页面片如下，其他场景需要单独处理（如新版手Q首页）
        		//1,sq公用模板：wxsq_static/res/sinclude/htmli/sq/portal_core.shtml
        		//2,mpm公用模板：wxsq_static/res/sinclude/common/mpm_searchbar_sq2.shtml
        	 	//JD.sendJs('//wq.360buyimg.com/js/common/dest/wq.sq.headsearchbar.290ff5b1ea.js');
        }
        
        if(JD.device.scene == "weixin" || JD.device.scene == "wxwork"){
        		//JD.sendJs('//wq.360buyimg.com/js/common/dest/wq.wx.headsearchbar.2afa5ed3cb.js');
        }
    }
