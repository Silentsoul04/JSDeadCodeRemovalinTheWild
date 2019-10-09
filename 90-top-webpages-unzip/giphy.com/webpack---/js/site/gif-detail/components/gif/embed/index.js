import { Component } from 'react'
import { isEmpty } from 'lodash'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'
import gifProps from 'shared/prop-types/gif'
import { getEmbedCode } from 'shared/util/gif-embed'
import Inputs from './inputs'
import Options from './options'
import css from './index.css'

/**
 * GIF Detail - Embed: Controls the embed
 * section of the GIF Detail page. This includes
 * configuring embed options.
 *
 * @class GifEmbed
 */
@onlyUpdateForKeys(['gif', 'isJavascript', 'html5', 'playOnHover', 'hideSocial'])
export default class extends Component {
    static propTypes = {
        gif: gifProps.isRequired,
    }
    state = {
        video: 1,
        isResponsive: false,
    }
    onOptionsChange({ isResponsiveOn, isVideoEmbedOn }) {
        this.setState({
            isResponsive: isResponsiveOn,
            video: isVideoEmbedOn ? 1 : 0,
        })
    }
    render() {
        const { gif } = this.props
        const { isResponsive, video } = this.state
        const embedCode = getEmbedCode(gif, { video }, isResponsive)
        return (
            <div>
                <p>
                    Need to embed this GIF on your website or blog? Just drop in the iFrame embed code below and
                    you&apos;re done! The GIPHY Embed Player autoplays on all browsers and devices.
                </p>
                <Options
                    hasVideo={!isEmpty(gif.external_media)}
                    onOptionChange={options => this.onOptionsChange(options)}
                />
                <Inputs className={css.inputs} code={embedCode} />
            </div>
        )
    }
}
