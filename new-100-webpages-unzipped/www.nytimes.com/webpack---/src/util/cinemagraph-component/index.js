/* eslint-disable jsx-a11y/media-has-caption */

import preact from 'preact';
import styles from './styles.css';

function supportsVideoOnImg(videoSrc) {
    return new Promise(resolve => {
        const img = document.createElement('img');
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = videoSrc;
    });
}

class Cinemagraph extends preact.Component {
    constructor(props) {
        super();

        this.state = {
            supportsVideoOnImg: null
        };

        supportsVideoOnImg(props.src).then(support => {
            this.setState({
                supportsVideoOnImg: support
            });
        });
    }

    render() {
        if (this.state.supportsVideoOnImg === null) return null;

        if (this.state.supportsVideoOnImg) {
            return ( <
                img src = {
                    this.props.src
                }
                className = {
                    styles.container
                }
                alt = "Cinemagraph" /
                >
            );
        }

        return ( <
            video loop muted autoPlay src = {
                this.props.src
            }
            className = {
                styles.container
            }
            />
        );
    }
}

export default Cinemagraph;



// WEBPACK FOOTER //
// ./src/util/cinemagraph-component/index.js