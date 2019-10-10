import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    PureComponent
} from 'react'
import ReactDOM from 'react-dom'
import {
    modalZIndex
} from 'shared/css/z-indexes.css'

const Container = styled.div `
    z-index: ${modalZIndex};
    position: ${props => (props.noCenter ? 'absolute' : 'fixed')};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.8);
    display: ${props => (props.noCenter ? 'inline' : 'flex')};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
const defaultElementId = 'react-target'
const prev = e => e.preventDefault()
/**
 * @class Modal
 * @param {React Component} [children] The React element the Modal should display
 *
 * Note: The page you're adding this to must have a div with an id
 * matching the prop `elementId` for this to work.
 *
 * Note: remove the modal like you'd remove any other react component
 * Note: This pattern is called a `portal` and will be part of React 16 api
 * as `React.createPortal`
 */
export default class Modal extends PureComponent {
    static propTypes = {
        elementId: PropTypes.string,
        noCenter: PropTypes.bool,
        scrollToTop: PropTypes.bool,
    }
    static defaultProps = {
        elementId: defaultElementId,
    }
    componentWillMount() {
        const {
            elementId,
            scrollToTop
        } = this.props
        this.modalElement = document.getElementById(elementId)
        if (!this.modalElement) {
            console.error(`modal: element id ${elementId} not found `)
            return
        }
        if (scrollToTop) {
            this.currentOverflow = document.body.style.overflow
            window.scrollTo(0, 0)
            document.body.scrollTop = 0
            document.body.style.overflow = 'hidden'
            // required for iOS
            document.body.addEventListener('touchmove', prev, false)
        }
    }
    componentWillUnmount() {
        const {
            scrollToTop
        } = this.props
        if (scrollToTop) {
            document.body.style.overflow = this.currentOverflow
            document.body.removeEventListener('touchmove', prev, false)
        }
    }
    render() {
        const {
            children,
            noCenter,
            className
        } = this.props
        const reactEl = ( <
            Container noCenter = {
                noCenter
            }
            className = {
                className
            } > {
                children
            } <
            /Container>
        )
        return ReactDOM.createPortal(reactEl, this.modalElement)
    }
}

export const makeModal = (Component, elementId = defaultElementId) => props => ( <
    Modal elementId = {
        elementId
    } >
    <
    Component { ...props
    }
    /> <
    /Modal>
)