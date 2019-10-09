import React, { lazy } from 'react'
import styled from 'styled-components'
import withLocationState from 'shared/components/with-location-state'
const Team = lazy(() => import('shared/components/team'))

const Banner = styled.div`
    background: url(static/img/tilepattern.gif) center center;
    margin: 10px 0 15px 0;
    padding: 20px;
    font-family: 'nexablack', sans-serif;
    font-size: 40px;
    text-align: center;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
`
const TeamPage = ({ staff }) => (
    <>
        <Banner>ALL THE GIPHY</Banner>
        <Team staff={staff} width={1040} columns={4} />
    </>
)

export default withLocationState(['staff'])(TeamPage)
