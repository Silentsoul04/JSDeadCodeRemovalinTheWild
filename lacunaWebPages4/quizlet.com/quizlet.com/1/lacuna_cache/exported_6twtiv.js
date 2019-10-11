
        var _originForRollbar = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        _rollbarConfig.enabled = _rollbarConfig.enabled && _originForRollbar === "https:\/\/quizlet.com";
    