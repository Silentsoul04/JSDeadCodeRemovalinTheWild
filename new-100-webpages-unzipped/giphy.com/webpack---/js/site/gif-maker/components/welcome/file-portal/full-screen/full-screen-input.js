import PropTypes from 'prop-types'
import {
    PureComponent
} from 'react'
import {
    autobind
} from 'core-decorators'
import InputWrapper from 'shared/components/inputs/file-input'
import FileAccept from 'shared/components/file-portal/file-accept'
import {
    trackEvent,
    trackFileList
} from 'shared/util/gif-maker-ga-events'
import css from './full-screen-input.css'

@FileAccept
class FullscreenInput extends PureComponent {
    static propTypes = {
        onDrag: PropTypes.func.isRequired,
        onDragStop: PropTypes.func.isRequired,
        acceptMultiple: PropTypes.bool,
    }

    static defaultProps = {
        acceptMultiple: true,
    }

    state = {
        isDragOver: false,
    }

    @autobind
    dragover({
        pageX,
        pageY
    }) {
        clearTimeout(this.leaveTimout)
        this.isDragOver = true
        this.setState({
            isDragOver: this.isDragOver
        })
        this.props.onDrag(pageX, pageY)
    }
    @autobind
    dragleave() {
        clearTimeout(this.leaveTimout)
        this.isDragOver = false
        this.leaveTimout = setTimeout(() => {
            this.setState({
                isDragOver: this.isDragOver
            })
            this.props.onDragStop()
        }, 250)
    }
    componentWillMount() {
        document.addEventListener('dragover', this.dragover)
        document.addEventListener('dragenter', this.dragover)
        document.addEventListener('dragleave', this.dragleave)
        document.addEventListener('dragend', this.dragleave)
        document.addEventListener('drop', this.dragleave)
    }
    componentWillUnmount() {
        clearTimeout(this.leaveTimout)
        document.removeEventListener('dragover', this.dragover)
        document.removeEventListener('dragenter', this.dragover)
        document.removeEventListener('dragleave', this.dragleave)
        document.removeEventListener('dragend', this.dragleave)
        document.removeEventListener('drop', this.dragleave)
    }
    render() {
        const {
            isDragOver
        } = this.state
        const {
            onFileAccepted,
            acceptMultiple
        } = this.props
        return ( <
            div >
            <
            InputWrapper { ...this.props
            }
            dropOnly = {
                true
            }
            onFileAccepted = {
                (...args) => {
                    trackEvent('Input', 'Drag and Drop')
                    trackFileList(...args)
                    onFileAccepted(...args)
                }
            }
            acceptMultiple = {
                acceptMultiple
            }
            className = {
                isDragOver ? css.fileButton : css.fileButtonDisabled
            } >
            <
            div style = {
                {
                    pointerEvents: isDragOver ? 'none' : 'auto'
                }
            } > {
                this.props.children
            } < /div> <
            /InputWrapper> {
                isDragOver && ( <
                    div className = {
                        css.fullscreenActive
                    } >
                    <
                    div className = {
                        css.dropContent
                    } > drop files here < /div> <
                    /div>
                )
            } <
            /div>
        )
    }
}

export default FullscreenInput