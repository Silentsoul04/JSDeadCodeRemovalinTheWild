import styled, { css } from 'styled-components'
import { FormInput } from 'shared/components/form/form-components'

export const fontCss = css`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    ${FormInput} {
        font-weight: normal;
    }
`
const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ${fontCss};
`
export default Container
