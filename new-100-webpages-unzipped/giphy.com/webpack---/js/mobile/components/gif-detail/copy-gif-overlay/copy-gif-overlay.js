import css from './copy-gif-overlay.css'

const CopyGifOverlay = ({
    isCopying
}) => {
    const container = isCopying ? css.containerActive : css.container
    return ( <
        div className = {
            container
        } >
        <
        div className = {
            css.fill
        }
        /> <
        div className = {
            css.icon
        }
        /> <
        /div>
    )
}
export default CopyGifOverlay