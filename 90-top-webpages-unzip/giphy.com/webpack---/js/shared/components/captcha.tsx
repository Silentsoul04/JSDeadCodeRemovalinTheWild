import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ReCAPTCHALoader, { ReCAPTCHAProps } from 'react-google-recaptcha'
import { GOOGLE_RECAPTCHA_KEY } from 'shared/variables'
import { message, SendMessageAction } from 'shared/redux/message'
import Loader from 'shared/components/loaders/dots'

const ReCAPTCHAContainer = styled(ReCAPTCHALoader)<{ asyncScriptOnLoad: () => void }>`
    height: 78px;
    display: table;
    margin: 0 auto;
`

type Props = {
    onLoad?: () => void
} & ReCAPTCHAProps

type ReduxProps = {
    message: SendMessageAction
}

function Captcha({ theme = 'dark', size = 'normal', sitekey = GOOGLE_RECAPTCHA_KEY, ...props }: Props & ReduxProps) {
    const { message, onLoad, onErrored, ...captchaProps } = props
    const [hasLoaded, setHasLoaded] = useState(false)

    const onCaptchaLoad = () => {
        setHasLoaded(true)
        if (onLoad) onLoad()
    }

    const onCaptchaError = () => {
        message('Something went wrong with the CAPTCHA.  Please try again!', 'error')
        if (onErrored) onErrored()
    }

    return (
        <ReCAPTCHAContainer
            /* Extended callback functions */
            asyncScriptOnLoad={onCaptchaLoad}
            onErrored={onCaptchaError}
            /* ReCAPTCHA props with defaults */
            theme={theme}
            size={size}
            sitekey={sitekey}
            /* Everything else */
            {...captchaProps}
        >
            {!hasLoaded && <Loader isAbsolute={false} />}
        </ReCAPTCHAContainer>
    )
}

export default connect(
    undefined,
    { message },
)(Captcha)
