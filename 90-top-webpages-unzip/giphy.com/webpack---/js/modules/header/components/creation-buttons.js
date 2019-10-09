import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { Component } from 'react'
import css from './creation-buttons.css'

export default class CreationButtons extends Component {
    state = {
        startingMousePosition: 0,
        backgroundPosition: 0,
    }
    render() {
        const { backgroundPosition, startingMousePosition } = this.state

        return (
            <div
                className={css.creationButtons}
                style={{ backgroundPositionX: `${backgroundPosition}px` }}
                onMouseEnter={e => {
                    this.setState({
                        startingMousePosition: e.pageX,
                    })
                }}
                onMouseMove={e => {
                    const mousePositionDiff = e.pageX - startingMousePosition
                    const percent = (mousePositionDiff * 100) / 150

                    this.setState({
                        backgroundPosition: percent,
                    })
                }}
            >
                <a className={css.uploadButton} rel="nofollow" href="/upload">
                    <span className={css.buttonText}>Upload</span>
                </a>
                <a className={css.createButton} rel="nofollow" href="/create/gifmaker">
                    <span className={css.buttonText}>Create</span>
                </a>
            </div>
        )
    }
}
