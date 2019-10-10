import {
    SIGN_UP_VAR_CLASS,
    DATA_VAR_NAME,
    DATA_VAR_VALUE,
    FORM_ELEMENT
} from '../constants';

export default {
    getVars() {
        const vars = {};
        const elements = document.getElementsByClassName(SIGN_UP_VAR_CLASS);

        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];

            const name = element.getAttribute(DATA_VAR_NAME);
            const attribute = element.getAttribute(DATA_VAR_VALUE);
            let value = attribute != null ? element[attribute] : null;

            if (element.nodeName === FORM_ELEMENT) {
                value = this.getCheckedValue(name);
            }

            if (name != null && value != null) {
                vars[name] = value;
            }
        }

        return vars;
    },

    getCheckedValue(groupName) {
        const radios = document.getElementsByName(groupName);
        for (let i = 0; i < radios.length; i += 1) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return null;
    },
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/overlays/overlayFormElements.js