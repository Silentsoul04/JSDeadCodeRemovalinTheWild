import React from 'react'
import styled, { keyframes } from 'styled-components'
import Arrow from '../../icons/arrow'

const bloop = keyframes`
    0% { transform: translate(-50%, -10px); }
    100% { transform: translate(-50%, 0px); }
`

const ScrollArrow = styled.div`
    animation: ${bloop} 1s ease-in-out 0s infinite alternate;
    bottom: 40px;
    cursor: pointer;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
`

const IntroArrow = () => (
    <ScrollArrow>
        <Arrow />
    </ScrollArrow>
)

export default IntroArrow
