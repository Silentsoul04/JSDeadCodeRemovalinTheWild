import styled from 'styled-components'
import { colors, Button } from '@giphy/react-giphy-brand'
import FacebookIcon from 'shared/components/icons/facebook'

const Facebook = styled(Button)`
    background: ${colors.giphyDarkGrey};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.div`
    padding-left: 10px;
`

const FacebookButton = ({ className, onClick, label }) => (
    <Facebook className={className} onClick={onClick} type="button">
        <FacebookIcon />
        <ButtonText>{label}</ButtonText>
    </Facebook>
)

export default FacebookButton
