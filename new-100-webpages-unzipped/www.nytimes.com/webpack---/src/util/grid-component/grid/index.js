import preact from 'preact';
import styles from './styles.css';

class Grid extends preact.Component {
    mapPropsToCssClasses() {
        const cssClasses = [styles.Grid];

        if (this.props.horizontal) {
            cssClasses.push(styles[`horizontal-${this.props.horizontal}`]);
        }

        if (this.props.vertical) {
            cssClasses.push(styles[`vertical-${this.props.vertical}`]);
        }

        if (this.props.fill) {
            cssClasses.push(styles.fill);
        }

        if (this.props.className) {
            cssClasses.push(this.props.className);
        }

        return cssClasses.join(' ');
    }

    mapPropsToInlineStyle() {
        let inlineStyle = {};

        if (this.props.padding) {
            inlineStyle.padding = `${String(this.props.padding)
        .split(' ')
        .map(padding => `${padding}px`)
        .join(' ')}`;
        }

        if (this.props.style) {
            inlineStyle = {
                ...inlineStyle,
                ...this.props.style
            };
        }

        return inlineStyle;
    }

    //
    // Render
    //

    render() {
        const cssClasses = this.mapPropsToCssClasses();
        const inlineStyle = this.mapPropsToInlineStyle();

        return ( <
            div className = {
                cssClasses
            }
            style = {
                inlineStyle
            } > {
                this.props.children
            } <
            /div>
        );
    }
}

export default Grid;



// WEBPACK FOOTER //
// ./src/util/grid-component/grid/index.js