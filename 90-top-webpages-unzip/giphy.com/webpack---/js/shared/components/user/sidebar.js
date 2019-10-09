import styled from 'styled-components'
import Avatar from './avatar'
import Description from './description'
import Social from './social'
import { grid3, gridSpacing } from 'shared/css/grid.css'
import ChannelAnalytics from 'shared/components/channel-analytics/channel-analytics'
import Search from 'shared/components/channel-info/search'
import { relativeUrl } from 'shared/util/url'

const Container = styled.div`
    box-sizing: border-box;
    flex-shrink: 0;
    margin-right: ${gridSpacing};
    padding-right: 40px;
    text-align: left;
    width: ${grid3};
`

const UserSidebar = ({ showDashboardLink, showAnalytics = true, showSearch = true, children = null, user }) => (
    <Container>
        {user && (
            <>
                <Avatar {...user} size={170} href={relativeUrl(user.profile_url)} />
                {showAnalytics && <ChannelAnalytics showDashboardLink={showDashboardLink} userId={user.id} />}
                <Description {...user} />
                <Social {...user} />
                {showSearch && <Search user={user} />}
            </>
        )}

        {children}
    </Container>
)

export default UserSidebar
