//@flow
import style from '../../styles/style.scss';
import {
    h,
    Component
} from 'preact';

/**
 * Tooltip component
 *
 * @class Tooltip
 * @example <Tooltip>...</Tooltip>
 * @extends {Component}
 */
class Tooltip extends Component {
    /**
     * render component
     *
     * @param {*} props - component props
     * @returns {React$Element} - component element
     * @memberof Tooltip
     */
    render(props: any): React$Element < any > {
        let className = [style.tooltip];
        if (props.out) className.push(style.out);

        return ( <
            div className = {
                className.join(' ')
            }
            style = {
                props.left ? {
                    left: props.left
                } : ''
            } > {
                props.children
            } <
            /div>
        );
    }
}

export {
    Tooltip
};



// WEBPACK FOOTER //
// ./components/tooltip/tooltip.js


// WEBPACK FOOTER //
// ui/components/tooltip/tooltip.js