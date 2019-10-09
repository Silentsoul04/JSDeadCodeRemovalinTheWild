
    if (window.ytcsi) {window.ytcsi.tick("ac", null, '');}
    var onPolymerReady = function(e) {
      window.removeEventListener('script-load-dpj', onPolymerReady);
      if (window.ytcsi) {window.ytcsi.tick("apr", null, '');}
        var url = null;
          url = "\/";
        var blankSwfConfig = null;
        window['chp_opr'](
            "browse", blankSwfConfig, url);
    }

    if (window.Polymer && Polymer.RenderStatus) {
      onPolymerReady();
    } else {
      window.addEventListener('script-load-dpj', onPolymerReady);
    }

  