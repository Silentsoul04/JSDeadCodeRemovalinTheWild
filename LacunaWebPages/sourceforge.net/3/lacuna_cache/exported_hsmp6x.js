
/*global googletag */
if (!SF.initial_breakpoints_visible.leaderboard) {
(function(){
    
    var el = document.getElementById('SF_Mobile_Multi_B_wrapped');
    var newNode = document.createElement('div');
    newNode.id = 'div-gpt-ad-1512154653435-0';
    el.appendChild(newNode);
}());

gptadRenderers['SF_Mobile_Multi_B'] = function(){  // jshint ignore:line
    
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-1512154653435-0');
    });
};
gptadRenderers['SF_Mobile_Multi_B']();  // jshint ignore:line
}
