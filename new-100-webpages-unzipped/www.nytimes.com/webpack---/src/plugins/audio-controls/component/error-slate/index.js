import preact from 'preact'; // eslint-disable-line no-unused-vars
import {
    bind
} from 'monocle-decorators';

import Fatal from '../fatal';
import Retry from '../retry';
import styles from '../styles.css';

class ErrorSlate extends preact.Component {
    constructor() {
        super();
        this.state = {
            cachedError: null
        };
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    @bind
    retry() {
        this.setState(
            () => ({
                cachedError: this.props.error
            }),
            () => {
                this.props.retry();
                this.timeout = setTimeout(() => {
                    clearTimeout(this.timeout);
                    this.timeout = null;
                    this.setState(() => ({
                        cachedError: null
                    }));
                }, 500);
            }
        );
    }

    render() {
        const error = this.props.error || this.state.cachedError;

        return ( <
            div className = {
                `${styles.error} ${styles.container}`
            }
            style = {
                {
                    padding: this.props.padding
                }
            } >
            {
                error &&
                error.retry && ( <
                    button onClick = {
                        this.retry
                    }
                    className = {
                        `${styles.retry} ${styles.chunk}`
                    }
                    title = "Retry Playback"
                    aria - label = "Retry Playback"
                    onMouseDown = {
                        this.props.onMouseDown
                    }
                    onFocus = {
                        this.props.onFocus
                    }
                    onBlur = {
                        this.props.onBlur
                    } >
                    <
                    div className = {
                        styles.center
                    } >
                    <
                    Retry / >
                    <
                    /div> <
                    /button>
                )
            } {
                error &&
                    !error.retry && ( <
                        div className = {
                            `${styles.fatal} ${styles.chunk}`
                        } >
                        <
                        Fatal / >
                        <
                        /div>
                    )
            } <
            div className = {
                `${styles.error__message} ${styles.chunk}`
            } >
            <
            span > {
                error && error.message
            } < /span> <
            /div> <
            /div>
        );
    }
}

export default ErrorSlate;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/error-slate/index.js