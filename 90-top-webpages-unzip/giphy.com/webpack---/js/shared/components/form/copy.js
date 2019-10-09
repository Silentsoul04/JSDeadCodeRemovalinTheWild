import styled, { css } from 'styled-components'
import { colors, Title as BrandTitle } from '@giphy/react-giphy-brand'
import routes from 'shared/routes'
import { Link } from 'react-router-dom'
import { mobile } from 'shared/util/media-query'
import appendNext from 'shared/components/form/get-next-url'

export const Copy = styled.div`
    font-size: 14px;
    color: white;
    ${props =>
        props.regular &&
        css`
            font-weight: normal;
        `};
    a {
        color: ${colors.giphyBlue};
        :hover {
            color: ${colors.giphyWhite};
        }
    }
`

const Terms = styled(Copy)`
    ${mobile.css`
        font-size: 12px;
    `};
    margin: 10px 0;
`

const Centered = styled(Copy)`
    text-align: center;
    margin: 20px 0;
`

export const DesktopTitle = styled(BrandTitle)`
    font-size: 38px;
    text-align: center;
    ${mobile.css`
        display: none;
    `};
`

export const ApplyTitle = () => (
    <DesktopTitle>
        We are always looking to <br /> feature new artists and brands!
    </DesktopTitle>
)

export const TermsOfService = ({ className }) => (
    <Terms className={className}>
        By signing up you agree to GIPHY&apos;s <a href="/terms">Terms of Service</a>
    </Terms>
)
export const TermsOfServiceApply = ({ className }) => (
    <Terms className={className}>
        By submitting you agree to GIPHY&apos;s <a href="/terms">Terms of Service</a>
    </Terms>
)
export const TermsOfServiceLogin = () => (
    <Terms>
        By logging in you agree to GIPHY&apos;s <a href="/terms">Terms of Service</a>
    </Terms>
)

export const Login = () => (
    <Copy>
        Already have an account? <Link to={appendNext(routes.LOGIN.path)}>Log in</Link>
    </Copy>
)

export const LearnMore = ({ className }) => (
    <Centered className={className}>
        <a
            href="https://support.giphy.com/hc/en-us/sections/360003006231-GIPHY-For-Brands-and-Artists-"
            target="_blank"
        >
            Read more about Brands on GIPHY and Artists on GIPHY to see if you qualify.
        </a>
    </Centered>
)

export const ArtistOrBrand = ({ className }) => (
    <div className={className}>
        <Copy style={{ marginBottom: 5 }}>Are you applying as a brand or artist?</Copy>
        <Copy regular style={{ marginBottom: 15 }}>
            Learn more about{' '}
            <a
                href="https://support.giphy.com/hc/en-us/articles/360019977992-Apply-for-a-Brand-Channel"
                target="_blank"
            >
                Brands
            </a>{' '}
            and{' '}
            <Link to="/artists" target="_blank">
                Artists
            </Link>{' '}
            on GIPHY.
        </Copy>
    </div>
)

export const NeedHelp = () => (
    <Copy>
        <Link to="/support" target="_blank">
            Need Help?
        </Link>
    </Copy>
)

export const ApplicationSubmitWarning = () => (
    <Copy regular>Please note: the information provided above will update your profile upon submission.</Copy>
)

export const Join = () => (
    <Copy>
        Don&apos;t Have An Account? <Link to={appendNext(`/join`)}>Join GIPHY!</Link>
    </Copy>
)

export const ForgotPassword = () => (
    <Copy>
        <a href="/password/reset">Forgot Your Password?</a>
    </Copy>
)
