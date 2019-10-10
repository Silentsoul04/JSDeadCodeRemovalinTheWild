import UrlInput from 'shared/components/inputs/url-input'
import css from './url-input.css'

const Input = ({
    fileTypes,
    onError,
    onFileAccepted,
    urlAccepted,
    needsCORS
}) => ( <
    UrlInput placeholder = {
        `Copy and paste video, GIF, or image URL`
    }
    fileTypes = {
        fileTypes
    }
    onError = {
        onError
    }
    onFileAccepted = {
        onFileAccepted
    }
    disabled = {
        urlAccepted
    }
    needsCORS = {
        needsCORS
    }
    className = {
        urlAccepted ? css.inputFieldAccepted : css.inputField
    }
    />
)

const Check = () => ( <
    div className = {
        css.icons
    } >
    <
    div className = {
        css.check
    }
    /> <
    /div>
)

const UrlInputWrapper = ({
    fileTypes,
    onError,
    onFileAccepted,
    urlAccepted = false
}) => ( <
    div className = {
        css.container
    } >
    <
    div className = {
        css.title
    } > Add Any URL < /div> <
    div className = {
        css.description
    } > We support YouTube, Vimeo, and GIPHY links! < /div> <
    div className = {
        css.ctaWrapper
    } >
    <
    div className = {
        css.inputFieldContainer
    } >
    <
    Input { ...{
            fileTypes,
            onError,
            onFileAccepted,
            urlAccepted
        }
    }
    /> {
        urlAccepted ? ( <
            Check / >
        ) : ( <
            div className = {
                css.icons
            } >
            <
            div className = {
                css.giphy
            }
            /> <
            div className = {
                css.youtube
            }
            /> <
            div className = {
                css.vimeo
            }
            /> <
            /div>
        )
    } <
    /div> <
    /div> <
    /div>
)

export const UrlInputWrapperUpload = ({
    fileTypes,
    onError,
    onFileAccepted,
    urlAccepted = false,
    children
}) => ( <
    div className = {
        css.container
    } >
    <
    div className = {
        css.title
    } > COPY AND PASTE ANY GIF URL < /div> <
    div className = {
        css.ctaWrapper
    } >
    <
    div className = {
        css.inputFieldContainer
    } >
    <
    Input { ...{
            fileTypes,
            onError,
            onFileAccepted,
            urlAccepted,
            needsCORS: false
        }
    }
    /> {
        urlAccepted && < Check / >
    } <
    /div> { /* This can be explicitly named if we need to configure this more */ } {
        children
    } <
    /div> <
    /div>
)

export default UrlInputWrapper