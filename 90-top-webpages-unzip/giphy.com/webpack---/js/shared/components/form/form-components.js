import styled from 'styled-components'
import { Button, Input as BrandInput } from '@giphy/react-giphy-brand'

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: 330px;
    ${Button} {
        width: 100%;
    }
`

export const FormInput = styled(BrandInput)`
    margin-top: 0;
`

export const CTAButton = styled(Button)`
    margin-bottom: 7px;
    &:disabled {
        cursor: default;
        opacity: 1;
    }
`

// can make theme-able if needed
const sectionMargin = 17

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${sectionMargin}px;
`

export const OptionalText = styled.div`
    font-size: 12px;
`
