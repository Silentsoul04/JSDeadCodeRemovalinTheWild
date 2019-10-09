import styled from 'styled-components'
import Nav from '../../containers/nav'
import Menus from '../../containers/menu'
import Logo from './logo'
import GIPHY from './giphy'
import { headerIndex, bodyContentMargin, margin } from '../../shared/constants.css'
import DynamicHeader from './dynamic-header'
import { withHeaderInfoContext } from '../trending-stories/day/context'
import { giphyBlack } from 'shared/css/colors.css'

const containerPadding = `${bodyContentMargin} 0 ${margin} ${margin};`

const Container = styled.div`
    position: relative;
    z-index: ${headerIndex};
    padding: ${containerPadding};
    background: ${giphyBlack};
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`
const GiphyContainer = styled.div`
    display: flex;
    width: 100%;
`

const Header = ({ headerInfo, useDynamicHeader = true }) => (
    <Container>
        <HeaderContainer>
            <GiphyContainer>
                <Logo onClick={() => (location.href = '/')} />
                {headerInfo && useDynamicHeader ? <DynamicHeader /> : <GIPHY />}
            </GiphyContainer>
            <Nav />
        </HeaderContainer>
        <Menus />
    </Container>
)

export default withHeaderInfoContext()(Header)
