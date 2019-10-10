import preact from 'preact';
import styles from './styles.css';

class Cell extends preact.Component {
    getCssClasses() {
        const classes = [styles.Cell];
        classes.push(styles[`-${this.props.size}`]);

        if (this.props.vertical) {
            classes.push(styles[this.props.vertical]);
        }

        if (this.props.horizontal) {
            classes.push(styles[this.props.horizontal]);
        }

        if (this.props.className) {
            classes.push(this.props.className);
        }

        return classes.join(' ');
    }

    render(props) {
        return ( <
            div className = {
                this.getCssClasses()
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

export default Cell;



// WEBPACK FOOTER //
// ./src/util/grid-component/cell/index.js