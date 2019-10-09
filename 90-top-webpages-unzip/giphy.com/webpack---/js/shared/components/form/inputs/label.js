import { Tooltip as BrandTooltip, colors } from '@giphy/react-giphy-brand'
import styled, { css } from 'styled-components'
import { desktop, mobile } from 'shared/util/media-query'
import Media from 'react-media'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${desktop.css`
        justify-content: flex-end;
    `};
`
const Label = styled.div`
    color: ${colors.giphyLightestGrey};
    display: flex;
    align-items: center;
    ${desktop.css`
        flex-direction: column;
        align-items: flex-end;
    `};
`

const Optional = styled.div`
    font-weight: normal;
`

const Tooltip = styled(BrandTooltip)`
    font-size: 11px;
    padding: 5px;
    margin-top: 3px;
    ${props =>
        props.optional &&
        css`
            display: flex;
            align-self: flex-start;
            margin-top: 2px;
        `};
`
const FormLabel = ({ label, tooltip = '', optional = false, className = '', info = '', tooltipWidth = 200 }) => {
    const OptionalComponent = () => (optional || info ? <Optional>{info || 'Optional'}</Optional> : null)
    const TooltipComponent = () =>
        tooltip ? (
            <Tooltip label={tooltip} maxWidth={tooltipWidth} optional={optional}>
                <div className="ss-help" />
            </Tooltip>
        ) : null
    return (
        <Container className={className}>
            <Label>
                <div>{label}</div>
                <Media query={desktop.query}>
                    {matches => (matches ? <OptionalComponent /> : <TooltipComponent />)}
                </Media>
            </Label>
            <Media query={mobile.query}>{matches => (matches ? <OptionalComponent /> : <TooltipComponent />)}</Media>
        </Container>
    )
}

export default FormLabel
