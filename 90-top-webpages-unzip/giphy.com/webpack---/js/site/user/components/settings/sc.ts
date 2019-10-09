import { colors, Title, Input, Button } from '@giphy/react-giphy-brand'
import { CTAButton as BrandCTAButton, FormInput } from 'shared/components/form/form-components'
import Fields, { Label, FieldContainer } from 'shared/components/form/fields'
import styled, { css } from 'styled-components'
import { desktop } from 'shared/util/media-query'
import SharedButtonGroup from 'shared/components/form/inputs/button-group'

const labelWidth = 125
const labelMargin = 10
const leftColumn = labelWidth + labelMargin

const desktopLabelCss = css`
    justify-content: flex-start;
    text-align: left;
    flex-shrink: 0;
    margin-right: ${labelMargin}px;
`

export const FormContainer = styled.div`
    background: ${colors.giphyDarkestGrey};
    padding: 35px 90px 35px 55px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${Label} {
        width: ${labelWidth}px;
        height: 40px;
        ${desktop.css(desktopLabelCss)};
    }
`

// the other `input` fields have a global style :/,
// but nothing for textarea, so here it is
export const Textarea = styled(Input)`
    margin: 0;
    height: 100px;
    textarea {
        width: 100%;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        color: #000;
        padding: 10px;
        outline: none;
    }
`

export const FieldSection = styled(Fields)`
    ${FieldContainer}:last-child {
        ${FormInput} {
            margin-bottom: 30px;
        }
    }
`

export const FooterTip = styled.div`
    color: ${colors.giphyLightGrey};
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    margin-top: 8px;
    margin-bottom: 30px;
    margin-left: ${leftColumn}px;
`

export const Header = styled(Title)`
    font-size: 36px;
    margin-bottom: 40px;
    text-align: left;
`

export const CTAButton = styled(BrandCTAButton)`
    width: calc(100% - ${leftColumn}px);
    margin-left: ${leftColumn}px;
`

export const ButtonGroups = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    ${Button} {
        height: 40px;
    }
    /* prettier-ignore */
    ${Button}:nth-child(4) {
        background: ${colors.giphyBlack};
        &:hover {
            background:${colors.giphyGreen}
        }
    }
    ${Label} {
        width: ${labelWidth}px;
        height: 40px;
        ${desktop.css(desktopLabelCss)};
    }
`

export const ButtonGroup = styled(SharedButtonGroup)`
    width: 100%;
`
