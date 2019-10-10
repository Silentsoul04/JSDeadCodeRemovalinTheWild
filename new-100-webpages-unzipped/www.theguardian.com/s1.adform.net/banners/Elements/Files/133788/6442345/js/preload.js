var bb = bb || {};
bb.loaded = 0;
bb.preload = function() {
    //var fontA = new FontFaceObserver('TeleGrotesk Headline');
    var fontB = new FontFaceObserver('TeleGrotesk Headline Ultra');
    //var fontC = new FontFaceObserver('TeleGroteskNor');
    //var fontD = new FontFaceObserver('TeleGroteskFet');
    //defineLanguage();
    //Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load()]).then(function () 
    Promise.all([fontB.load()]).then(function() {
        bb.checkLoaded('fonts');
    });
};
bb.checkLoaded = function(id) {
    //console.log('ID > '+id);
    bb.loaded++;
    if (bb.loaded == 2) {
        TweenMax.delayedCall(.1, bb.main);
    }
};