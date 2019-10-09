import { Helmet } from 'react-helmet'
import { colors } from '@giphy/react-giphy-brand'
import styled from 'styled-components'
import ApplyForm from 'shared/components/form/apply-form'
import { Switch, Route } from 'react-router'
import MoreGifs from 'shared/components/form/apply/need-more-gifs'
import Pending from 'shared/components/form/apply/pending'
import Incomplete from 'shared/components/form/apply/incomplete'
import Rejected from 'shared/components/form/apply/rejected'
import Done from 'shared/components/form/apply/done'
import { ApplyTitle } from 'shared/components/form/copy'

const Container = styled.div`
    background: ${colors.giphyDarkestGrey};
    margin-top: 10px;
    padding: 20px 0;
`
const Apply = () => (
    <Container>
        <Helmet>
            <title>Create an Artist Channel | GIPHY</title>
        </Helmet>
        <Switch>
            <Route path="/apply/more-gifs" component={ApplyTitle} />
            <Route path="/apply" exact component={ApplyTitle} />
        </Switch>
        <Switch>
            <Route path="/apply/more-gifs" component={MoreGifs} />
            <Route path="/apply/pending" component={Pending} />
            <Route path="/apply/incomplete" component={Incomplete} />
            <Route path="/apply/ineligible" component={Rejected} />
            <Route path="/apply/done" component={Done} />
            <Route component={ApplyForm} />
        </Switch>
    </Container>
)

export default Apply
