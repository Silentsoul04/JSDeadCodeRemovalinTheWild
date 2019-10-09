
    var img = document.querySelector('#recFloor .floor-title img.ll_fadeIn')
    img.src=window.m_recommend[0].titImg
    img.onerror=__reloadResource(this)
    img.onload=function(){
        img.style.opacity=1
    }

    
