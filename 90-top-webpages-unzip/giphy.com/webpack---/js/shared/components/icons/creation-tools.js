import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import css from './creation-tools.css'

const Upload = ({ width = '50%', height = 'auto', fill = '#FFFFFF' }) => (
    <svg {...{ width, height }} viewBox="0 -1 400 513" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="GIF_Upload" transform="translate(0, 1)" fill={fill}>
            <path
                d="M286,279.5 L194.5,187.6 C193.2,186.2 191,186.2 189.6,187.6 L98.1,279.5 C95.9,281.7 97.5,285.4 100.5,285.4 L154.3,285.4 L154.3,382.7 C154.3,384.4 155.6,385.7 157.3,385.7 L227.3,385.7 C229,385.7 230.3,384.4 230.3,382.7 L230.3,285.4 L283.5,285.4 C286.6,285.4 288.1,281.7 286,279.5 Z"
                id="Shape"
            />
            <path
                d="M336,96 L336,48 L288,48 L288,0 L47.6,0 L31.6,0 L0,0 L0,464 L0,512 L47.6,512 L384,512 L384,480 L384,464 L384,96 L336,96 Z M336,464 L48,464 L48,48 L240,48 L240,96 L240,144 L287.6,144 L336,144 L336,464 Z"
                id="Shape"
            />
        </g>
    </svg>
)

const GifMaker = ({ width = '50%', height = 'auto', fill = '#FFFFFF' }) => (
    <svg {...{ width, height }} viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg">
        <g id="Designs" fill="none" fillRule="evenodd">
            <g id="02---squareGIF-Copy" transform="translate(-88 -769)" fill={fill}>
                <g id="video_icon-copy" transform="translate(88 769)">
                    <path
                        d="M24,28 L24,11 L26,11 L26,28.5 L26,30 L0,30 L0,29 L0,0 L1,0 L16,0 L16,2 L2,2 L2,28 L24,28 Z M18,7.5 L18,6 L18,0 L20,0 L20,4 L23,4 L23,7 L26,7 L26,9 L18,9 L18,7.5 Z"
                        id="Combined-Shape"
                    />
                    <g id="addicon" transform="translate(9 12)">
                        <rect id="Rectangle" x="3" width="2" height="8" />
                        <rect id="Rectangle-Copy" transform="rotate(90 4 4)" x="3" width="2" height="8" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)

const GifUpload = ({ width = '50%', height = 'auto', fill = '#FFFFFF' }) => (
    <svg {...{ width, height }} viewBox="0 -1 420 513" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="GIF_Upload" transform="translate(0, 1)" fill={fill}>
            <path
                d="M286,279.5 L194.5,187.6 C193.2,186.2 191,186.2 189.6,187.6 L98.1,279.5 C95.9,281.7 97.5,285.4 100.5,285.4 L154.3,285.4 L154.3,382.7 C154.3,384.4 155.6,385.7 157.3,385.7 L227.3,385.7 C229,385.7 230.3,384.4 230.3,382.7 L230.3,285.4 L283.5,285.4 C286.6,285.4 288.1,281.7 286,279.5 Z"
                id="Shape"
            />
            <path
                d="M336,96 L336,48 L288,48 L288,0 L47.6,0 L31.6,0 L0,0 L0,464 L0,512 L47.6,512 L384,512 L384,480 L384,464 L384,96 L336,96 Z M336,464 L48,464 L48,48 L240,48 L240,96 L240,144 L287.6,144 L336,144 L336,464 Z"
                id="Shape"
            />
        </g>
    </svg>
)

const Capture = ({ width = '100%', height = '100%' }) => (
    <img {...{ width, height }} src="/static/img/attribution_avatars/giphy-capture.png" />
)

const CreationToolIcon = ({ tool, width, height, fill }) => (
    <div className={css.container}>
        {tool === 'Upload' && <Upload {...{ width, height, fill }} />}
        {tool === 'GIF-Maker' && <GifMaker {...{ width, height, fill }} />}
        {tool === 'GIF-Upload' && <GifUpload {...{ width, height, fill }} />}
        {tool === 'GIPHY-Capture' && <Capture {...{ width, height }} />}
    </div>
)

export default CreationToolIcon
