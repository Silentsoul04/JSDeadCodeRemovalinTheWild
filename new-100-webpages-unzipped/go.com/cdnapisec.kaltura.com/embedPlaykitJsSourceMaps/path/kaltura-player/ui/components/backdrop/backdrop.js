//@flow
import style from '../../styles/style.scss';
import {
    h
} from 'preact';
import {
    Component
} from 'preact';
import {
    connect
} from 'preact-redux';

/**
 * mapping state to props
 * @param {*} state - redux store state
 * @returns {Object} - mapped state to this component
 */
const mapStateToProps = state => ({
    show: state.backdrop.show
});

@connect(
    mapStateToProps,
    null
)
/**
 * Backdrop component
 *
 * @class Backdrop
 * @example <Backdrop/>
 * @extends {Component}
 */
class Backdrop extends Component {
    /**
     * render component
     *
     * @param {*} props - component props
     * @returns {?React$Element} - component element
     * @memberof Backdrop
     */
    render(props: any): ? React$Element < any > {
        if (!props.show) return undefined;
        return <div className = {
            style.backdrop
        }
        />;
    }
}

export {
    Backdrop
};



// WEBPACK FOOTER //
// ./components/backdrop/backdrop.js


// WEBPACK FOOTER //
// ui/components/backdrop/backdrop.js