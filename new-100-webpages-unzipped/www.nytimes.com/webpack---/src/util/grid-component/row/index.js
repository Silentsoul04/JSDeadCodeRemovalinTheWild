import preact from 'preact';
import styles from './styles.css';

class Row extends preact.Component {
    mapPropsToCssClasses() {
        const cssClasses = [styles.Row];

        if (this.props.className) {
            cssClasses.push(this.props.className);
        }

        if (this.props.fill) {
            cssClasses.push(styles.fill);
        }

        return cssClasses.join(' ');
    }

    render(props) {
        return ( <
            div className = {
                this.mapPropsToCssClasses()
            }
            style = {
                this.props.style
            } > {
                props.children
            } <
            /div>
        );
    }
}

export default Row;



// WEBPACK FOOTER //
// ./src/util/grid-component/row/index.js