import Logdown from 'logdown';

class Logger extends Logdown {
    constructor(...args) {
        super(...args);

        // If no explicit debug value is set, we enable warns and erros for VHS
        try {
            if (
                typeof localStorage === 'undefined' ||
                !localStorage ||
                !localStorage.debug
            ) {
                this.state.isEnabled = true;
                this.log = () => {};
            }
        } catch (e) {
            this.state.isEnabled = true;
            this.log = () => {};
        }
    }
}

export default Logger;



// WEBPACK FOOTER //
// ./src/util/logger.js