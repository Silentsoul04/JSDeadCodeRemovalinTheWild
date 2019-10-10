import React from 'react'
import PropTypes from 'prop-types'
import {
    autobind
} from 'core-decorators'
import css from './channel-box.css'
import VerifiedBadge from 'shared/components/users/verified-badge'

export default class ChannelBox extends React.Component {
    static propTypes = {
        currentSelectedChannel: PropTypes.string,
        currentSelectedChannelImage: PropTypes.string,
        backspaceOnChannelBox: PropTypes.bool,
        device: PropTypes.string,
    }

    @autobind
    click() {
        location.href = `/${this.props.currentSelectedChannel.slice(1)}`
    }

    render() {
        const {
            currentSelectedChannel,
            device,
            currentSelectedChannelImage,
            backspaceOnChannelBox
        } = this.props
        return ( <
            div onClick = {
                this.click
            }
            className = {
                css[`${device}ChannelBoxContainer`]
            } >
            <
            div className = {
                backspaceOnChannelBox ? css[`${device}BackspacedBoxContainer`] : css[`${device}ChannelBox`]
            } >
            {
                currentSelectedChannelImage ? ( <
                    div className = {
                        css[`${device}ChannelTagImage`]
                    }
                    style = {
                        {
                            backgroundImage: `url(${currentSelectedChannelImage})`
                        }
                    }
                    />
                ) : ( <
                    span className = {
                        css.noImage
                    }
                    />
                )
            } {
                device === 'desktop' && ( <
                    div className = {
                        css.channelContainer
                    } >
                    <
                    span className = {
                        css.channelName
                    } > {
                        currentSelectedChannel
                    } < /span> <
                    VerifiedBadge is_verified = {
                        true
                    }
                    tooltip = {
                        false
                    }
                    className = {
                        css.verifiedBadge
                    }
                    /> <
                    /div>
                )
            } <
            /div> <
            /div>
        )
    }
}