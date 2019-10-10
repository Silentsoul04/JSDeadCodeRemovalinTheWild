
        window._goch_ = {};
        window.addEventListener('click', function(event) {
            'use strict';
            for (var elm = event.target; elm; elm = elm.parentElement) {
                if (elm.id &&
                    window._goch_.hasOwnProperty(elm.id) &&
                    window._goch_[elm.id].call(elm, event) === false) {
                    event.preventDefault();
                }
            }
        }, true);
        window._csp_external_script_nonce = "C/ZOgu0hW9iME2RPUmU3"
    