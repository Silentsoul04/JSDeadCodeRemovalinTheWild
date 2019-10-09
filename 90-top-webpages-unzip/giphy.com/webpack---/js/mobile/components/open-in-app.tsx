import React from 'react'
import styled from 'styled-components'
import { colors } from '@giphy/react-giphy-brand'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import { modalZIndex } from 'shared/css/z-indexes'
import getAppDeepLink from 'shared/util/app-deep-link'

const PEEKER_URL = 'https://media.giphy.com/media/l41K1gfrUz1HDohvG/100.gif'

export const OpenInAppContainer = styled.div`
    position: fixed;
    align-self: center;
    bottom: 25px;
`

const Button = styled.a`
    background: ${colors.primaryCTA};
    border-radius: 20px;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.33);
    color: ${colors.giphyWhite};
    display: block;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 170px;
    z-index: ${modalZIndex - 1};

    &:before {
        background: no-repeat url(${PEEKER_URL}) center center;
        background-size: contain;
        content: '';
        height: 40px;
        left: 0;
        position: absolute;
        top: -8px;
        width: 40px;
    }
`

type Props = {
    category?: 'Home' | 'GIF Detail' | 'Search' | 'Gif Maker' | 'Explore' | 'Channel'
    url?: string
    text?: string
}

// default to Home and the home deep link
// taken from https://giphypedia.atlassian.net/wiki/spaces/PE/pages/908591144/Deep+Linking+Product+Brief
const OpenInAppCTA = ({ category = 'Home', text = '' }: Props) => {
    const formattedUrl = getAppDeepLink()

    return (
        <Button
            href={formattedUrl}
            target="_blank"
            onClick={() => {
                googleAnalyticsEvent({
                    category,
                    action: `App Download Click`,
                    label: '',
                })
            }}
        >
            {text || 'Use Our App'}
        </Button>
    )
}

export default OpenInAppCTA
