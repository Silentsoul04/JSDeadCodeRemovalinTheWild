import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { capitalize } from 'lodash'
import Dropdown from './dropdown'
import { giphyBlue, giphyPurple, giphyPink, giphyGreen, giphyWhite, giphyBlack } from '@giphy/js-brand'

const MenuContainer = styled.div`
    float: left;
    margin: 10px 0 0 14px;
    width: 496px;
`

const MenuList = styled.ul`
    margin: 0;
    background: linear-gradient(
        to right,
        ${giphyBlue},
        ${giphyPurple} 31%,
        ${giphyPink} 52%,
        #fff9aa 77%,
        ${giphyGreen},
        ${giphyBlue}
    );
    background-size: 200% 50%;
    background-position: 0% 50%;
    display: flex;
    justify-content: space-around;
    transform: translateZ(0);
`

const MenuItem = styled.li`
    cursor: pointer;
    float: left;
    height: 36px;
    border-right: 4px solid ${giphyBlack};
    position: relative;
    display: flex;
    flex-grow: 1;
    align-items: center;

    &:before {
        content: '';
        position: absolute;
        background-color: ${giphyBlack};
        opacity: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 4px;
        z-index: 1;
        transition: opacity 0.35s;
        left: -1px;
        right: -1px;
    }

    &:hover {
        background-color: transparent;
        transition: background-color 0.25s;

        &:before {
            opacity: 0.3;
        }

        a {
            color: ${giphyWhite};
        }
    }
`

const MenuLink = styled.a`
    font-family: 'interface';
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: ${giphyWhite};
    height: 100%;
    display: block;
    position: relative;
    z-index: 2;
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
`

const fadeIn = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`

const Ellipsis = styled(MenuItem)<{ showDropdown?: boolean }>`
    border-right: 0;
    width: 4px;

    ${({ showDropdown }) =>
        showDropdown &&
        css`
            &:after {
                cursor: pointer;
                opacity: 1;
                height: 33px;
                border-bottom: 3px solid ${giphyWhite};
                background-color: ${giphyPink};
                bottom: 0;
            }
        `}
`
const EllipsisIcon = styled.i`
    content: '…';
    display: block;
    height: 15px;
    transform: translateZ(0) rotate(90deg);
`

type MenuProps = {
    items: any
}

const Menu = ({ items }: MenuProps) => {
    const [startingMousePosition, setStartingMousePosition] = useState(0)
    const [backgroundPosition, setBackgroundPosition] = useState(0)
    const [showDropdown, setShowDropdown] = useState(false)

    const onEllipsesMouseEnter = () => {
        setShowDropdown(true)
    }

    const onEllipsesMouseLeave = () => {
        setShowDropdown(false)
    }

    return (
        <MenuContainer>
            <MenuList
                style={{ backgroundPositionX: `${backgroundPosition}px` }}
                onMouseEnter={e => {
                    setStartingMousePosition(e.pageX)
                }}
            >
                {items.map((item, i) => (
                    <MenuItem
                        key={i}
                        onMouseMove={e => {
                            setBackgroundPosition(e.pageX - startingMousePosition)
                        }}
                    >
                        <MenuLink href={`/${item}`}>{capitalize(item)}</MenuLink>
                    </MenuItem>
                ))}
                <Ellipsis onMouseEnter={onEllipsesMouseEnter} onMouseLeave={onEllipsesMouseLeave}>
                    <MenuLink as="div">
                        <EllipsisIcon className="ss-ellipsis" />
                    </MenuLink>
                    {showDropdown && <Dropdown fadeIn={fadeIn} />}
                </Ellipsis>
            </MenuList>
        </MenuContainer>
    )
}

export default Menu
