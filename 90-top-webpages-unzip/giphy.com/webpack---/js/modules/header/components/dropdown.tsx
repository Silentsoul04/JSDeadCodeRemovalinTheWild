import React from 'react'
import styled, { Keyframes } from 'styled-components'
import { giphyBlack, giphyPink, giphyPurple, giphyWhite } from '@giphy/js-brand'

const gridSpacing = 16
const dropDownWidth = 1040

const MenuDropDown = styled.div<{ fadeIn: Keyframes }>`
    display: flex;
    animation: ${({ fadeIn }) => fadeIn} 0.5s ease;
    border-bottom: 8px solid ${giphyBlack};
    border-top: 8px solid ${giphyBlack};
    width: ${dropDownWidth}px;
    position: absolute;
    top: 36px;
    left: 100%;
    margin-left: -675px;
    flex-direction: column;
    cursor: default;
    background: linear-gradient(135deg, ${giphyPink} 0%, ${giphyPurple} 100%);

    li {
        line-height: 32px;
    }
`

const Columns = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

const SmallColumn = styled.div`
    flex: 1;

    h2,
    ul {
        margin-left: 0px;
    }
`

const LargeColumn = styled.div`
    flex: 2;

    ul {
        columns: 2;
    }

    h2,
    ul {
        margin-left: 0px;
        margin-right: 60px;
    }
`

const MenuCategories = styled.div`
    flex: 2;

    ul {
        columns: 2;
    }

    h2,
    ul {
        margin-left: 60px;
    }
`

const DropDownLinks = styled.ul`
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding-top: ${gridSpacing}px;
    margin: 10px 36px;

    a {
        font-family: 'interface', Helvetica Neue, helvetica, sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: ${giphyWhite};
        cursor: pointer;
        opacity: 1;
        -webkit-font-smoothing: antialiased;

        &:hover {
            opacity: 0.8;
            transition: opacity 0.25s;
        }
    }
`

const MenuHeader = styled.h2`
    font-size: 26px;
    font-family: 'nexablack', sans-serif;
    text-align: left;
    margin: 32px 0px 0px 60px;
    display: flex;
    flex: 1;
    -webkit-font-smoothing: antialiased;

    a {
        color: ${giphyWhite};
        opacity: 1;
        text-transform: capitalize;

        &:hover {
            opacity: 0.8;
            transition: opacity 0.25s;
        }
    }
`

const Footer = styled.div`
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    font-size: 14px;
    height: 60px;
    line-height: 20px;
    padding: 20px 60px;
    width: 100%;

    a {
        margin-right: 30px;
    }
`

const Copyright = styled.div`
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    font-family: 'nexablack', sans-serif;
    margin-right: 30px;
    padding-right: 30px;
`

const ColumnChildren = ({ title, items }) => (
    <>
        <MenuHeader>
            <a href={`/${title}`}>{title}</a>
        </MenuHeader>
        <DropDownLinks>
            {items.map(({ label, path }, i) => (
                <li key={i}>
                    <a href={path}>{label}</a>
                </li>
            ))}
        </DropDownLinks>
    </>
)

type DropdownProps = {
    fadeIn: Keyframes
}
const Dropdown = ({ fadeIn }: DropdownProps) => (
    <MenuDropDown fadeIn={fadeIn}>
        <Columns>
            <MenuCategories>
                <ColumnChildren
                    title="categories"
                    items={[
                        { label: `GIPHY Studios`, path: `/giphystudios` },
                        { label: `Animals`, path: `/categories/animals` },
                        { label: `Holidays`, path: `/categories/holiday` },
                        { label: `Food & Drink`, path: `/categories/food-drink` },
                        { label: `Memes`, path: `/categories/memes` },
                        { label: `Actions`, path: `/categories/actions` },
                        { label: `Emotions`, path: `/categories/emotions` },
                        { label: `Anime`, path: `/categories/anime` },
                        { label: `Gaming`, path: `/categories/gaming` },
                        { label: `Cartoons`, path: `/categories/cartoons-comics` },
                    ]}
                />
            </MenuCategories>
            <SmallColumn>
                <ColumnChildren
                    title="stickers"
                    items={[
                        { label: `Originals`, path: `/originals/stickers/studiosoriginalstickers` },
                        { label: `Trending`, path: `/stickers/trending` },
                        { label: `Reactions`, path: `/stickers/reactions` },
                        { label: `Packs`, path: `/stickers/packs` },
                    ]}
                />
            </SmallColumn>
            <SmallColumn>
                <ColumnChildren
                    title="apps"
                    items={[
                        { label: `GIPHY`, path: `/apps/giphy` },
                        { label: `GIPHY World`, path: `/apps/giphyworld` },
                        { label: `GIPHY Cam`, path: `/apps/giphycam` },
                        { label: `GIPHY Capture`, path: `/apps/giphycapture` },
                    ]}
                />
            </SmallColumn>
            <LargeColumn>
                <ColumnChildren
                    title="about"
                    items={[
                        { label: `Team`, path: `/team` },
                        { label: `Engineering Blog`, path: `https://engineering.giphy.com/blog/` },
                        { label: `GIPHY Arts`, path: `https://arts.giphy.com/` },
                        { label: `Studios`, path: `/studios` },
                        { label: `Marketers`, path: `/marketers` },
                        { label: `Developers`, path: `https://developers.giphy.com/` },
                        { label: `Labs`, path: `/labs` },
                        { label: `FAQ`, path: `/faq` },
                        { label: `Support`, path: `/support` },
                        { label: `Jobs`, path: `https://jobs.giphy.com` },
                        { label: `DMCA`, path: `/dmca` },
                        { label: `Guidelines`, path: `/community-guidelines` },
                    ]}
                />
            </LargeColumn>
        </Columns>
        <Footer>
            <Copyright>&copy; {new Date().getFullYear()} GIPHY, Inc.</Copyright>
            <div>
                <a href="/terms" target="_blank">
                    Terms of Service
                </a>
                <a href="/community-guidelines" target="_blank">
                    Community Guidelines
                </a>
                <a href="/privacy" target="_blank">
                    Privacy Policy
                </a>
                <a href="/dmca" target="_blank">
                    Copyright
                </a>
            </div>
        </Footer>
    </MenuDropDown>
)

export default Dropdown
