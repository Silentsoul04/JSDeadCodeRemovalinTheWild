//@flow
import style from '../styles/style.scss';
import {
    h
} from 'preact';
import {
    ErrorOverlay
} from '../components/error-overlay';

/**
 * Error ui
 *
 * @export
 * @param {*} props component props
 * @returns {React$Element} player ui tree
 */
export function errorUI(props: any): React$Element < any > {
    return ( <
        div className = {
            style.playbackGuiWWrapper
        } >
        <
        ErrorOverlay player = {
            props.player
        }
        /> <
        /div>
    );
}



// WEBPACK FOOTER //
// ./ui-presets/error.js


// WEBPACK FOOTER //
// ui/ui-presets/error.js