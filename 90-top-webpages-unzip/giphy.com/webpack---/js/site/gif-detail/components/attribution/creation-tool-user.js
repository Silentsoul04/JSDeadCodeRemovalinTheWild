import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import gifProps from 'shared/prop-types/gif'
import { sample } from 'lodash'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import CreationToolIcon from 'shared/components/icons/creation-tools'
import css from './index.css'
import { IS_MAC } from 'shared/util/env'
const giphygifmaker = {
    description: 'Create animated GIFs from video files and YouTube links',
    path: '/create/gifmaker',
    name: 'GIF-Maker',
}
let CREATION_TOOLS = {
    giphygifmaker,
    giphygifcaption: giphygifmaker,
    giphyslideshow: giphygifmaker,
    giphygifeditor: giphygifmaker,
    giphyupload: {
        description:
            'Upload your GIF collection to share on Facebook, Twitter, Instagram, text message, email and everywhere else',
        path: '/upload',
        name: 'GIF-Upload',
    },
}
const giphycapture = {
    description:
        'GIPHY CAPTURE is the best way to create GIFs on your Mac. Simple, powerful, free and easy enough for pretty much everyone and even a few small mammals',
    path: '/apps/giphycapture',
    name: 'GIPHY-Capture',
}
if (IS_MAC) {
    CREATION_TOOLS = { ...CREATION_TOOLS, giphycapture, giphygifgrabber: giphycapture }
}
const CREATION_TOOL_TAGS = IS_MAC
    ? /giphygifmaker|giphyupload|giphycapture|giphygifgrabber|giphyslideshow|giphygifcaption|giphygifeditor/
    : /giphygifmaker|giphyupload|giphyslideshow|giphygifcaption|giphygifeditor/

const trackEvent = creationTool => {
    googleAnalyticsEvent({
        category: 'GIF Detail Sidebar',
        action: 'Click',
        label: `Creation Tool: ${creationTool}`,
    })
}

/**
 * CreationToolUser: Controls the left rail attribution content
 * when there is no user & a gif was made with creation tools
 *
 * GIF uploaded by anonymous user or user with private user page:
 * DO NOT show user attribution + show creation tool used if present +
 * show source if present (Note that we only have tags to differentiate
 * creation tools: giphyupload, giphygifmaker, giphycapture, etc)
 *
 * @class CreationToolUser
 */

const CreationToolUser = ({ gif: { tags_string = '' } }) => {
    const [matchedTool] = tags_string.match(CREATION_TOOL_TAGS) || []
    // choose tool if it's in the tag string, otherwise random
    const creationTool = CREATION_TOOLS[matchedTool] || sample(CREATION_TOOLS)
    const { name, description, path: channel } = creationTool
    const userName = name.split('-').join(' ')
    return (
        <div className={css.container} onClick={() => trackEvent(creationTool)}>
            <h4 className={css.subTitle}>Create A Gif</h4>
            <div className={css.creationHeader}>
                <a className={creationTool === giphygifmaker ? css.gifMakerIcon : css.icon} href={channel}>
                    <CreationToolIcon tool={name} />
                </a>
                <h2 className={css.username}>
                    <a href={channel}>{userName}</a>
                </h2>
            </div>
            <p className={css.descriptionCreation}>{description}</p>
            <a className={css.gifMaker} href={channel}>
                Create your own
            </a>
        </div>
    )
}

CreationToolUser.propTypes = {
    gif: gifProps.isRequired,
}

export default CreationToolUser
