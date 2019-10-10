import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
import css from './power-glove.css'

const {
    bool,
    func
} = PropTypes

/**
 * PowerGlove: Moves things with the Power Glove
 *
 * @class PowerGlove
 * @param {React Component} [children] The React element the Power Glove should display
 * @param {Boolean} [powerGlove] Whether or not the glove is visible/active
 * @param {Function} [onCancel] Optional custom cancel function to occur on click of
 * the blackout background
 * @param {Function} [togglePowerGlove] The default function called when a user
 * clicks the blackout background - sets powerGlove to false
 *
 * Note: The page you're adding this to must have a div with id power-glove
 * in order for this to work.
 */

export default class PowerGlove extends React.PureComponent {
    static propTypes = {
        powerGlove: bool.isRequired,
        onCancel: func,
    }

    componentDidUpdate() {
        const {
            children,
            powerGlove,
            onCancel,
            togglePowerGlove
        } = this.props
        const container = document.getElementById('power-glove')

        const reactEl = ( <
            div className = {
                powerGlove ? css.container : css.off
            } >
            <
            div className = {
                powerGlove ? css.show : css.hide
            } >
            <
            div className = {
                css.radModalHand
            } >
            <
            div className = {
                css.handInner
            }
            /> <
            /div> <
            div className = {
                css.modalContainer
            } > {
                children
            } < /div> <
            /div> <
            div onClick = {
                onCancel || togglePowerGlove
            }
            className = {
                powerGlove ? css.blackout : css.off
            }
            /> <
            /div>
        )

        ReactDOM.render(reactEl, container)
    }

    render() {
        return <div / >
    }
}