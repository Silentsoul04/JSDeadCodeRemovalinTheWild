import {
    h,
    Component
} from 'preact';
import styles from './styles.scss';
import {
    I18n
} from '../context';
import {
    trackNavClick,
    trackNavImpression
} from '../tracking/google';

export class SkipNav extends Component {
    constructor() {
        super();
        this.impressionTracked = false; // only track one impression per instance
    }

    clickHandler() {
        return () => {
            trackNavClick({
                location: 'skipNav'
            });
        };
    }

    focusHandler() {
        return () => {
            if (!this.impressionTracked) {
                trackNavImpression({
                    location: 'skipNav'
                });
            }
            this.impressionTracked = true;
        };
    }

    render() {
        return ( <
            I18n.Consumer > {
                i18n => < a href = "#buzz-content"
                className = {
                    styles.skipNav
                }
                onClick = {
                    this.clickHandler()
                }
                onFocus = {
                    this.focusHandler()
                } > {
                    i18n.skip_to_content
                } < /a>} <
                /I18n.Consumer>
            );
        }
    }