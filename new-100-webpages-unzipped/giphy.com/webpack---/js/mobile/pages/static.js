import React, {
    useState
} from 'react' // eslint-disable-line no-unused-vars
import Tappable from 'react-tappable'
import Header from 'containers/header'
import Page from './page'
import SearchBar from 'containers/search-bar'
import locationState from 'shared/components/with-location-state'
import {
    margin
} from '../shared/constants.css'
import {
    sample
} from 'lodash'

const goToHref = href => (document.location.href = href)
const errorGifs = ['img/error_pages/text/dang.gif', 'img/error_pages/text/oops.gif', 'img/error_pages/text/woof.gif']
const errorText = sample(errorGifs)
const sorrySrc = window.STATIC_URL + errorText
const explosionSrc = window.STATIC_URL + 'img/mobile/explosion.gif'
const style = {
    marginLeft: parseInt(margin, 10)
}

export const StaticPage = locationState(['content'])(({
    content
}) => ( <
    Page >
    <
    Header / >
    <
    SearchBar / >
    <
    div style = {
        style
    } >
    <
    div dangerouslySetInnerHTML = {
        {
            __html: content
        }
    }
    /> <
    /div> <
    /Page>
))

export const StaticPageNoHeader = locationState(['content'])(({
    content
}) => ( <
    Page >
    <
    div dangerouslySetInnerHTML = {
        {
            __html: content
        }
    }
    style = {
        style
    }
    /> <
    /Page>
))

export const FourTwoThree = () => ( <
    Page >
    <
    Header / >
    <
    div className = "four-five"
    style = {
        style
    } >
    <
    img className = "sorry"
    src = {
        sorrySrc
    }
    /> <
    div className = "message" >
    The owner has set this page to private. <
    Tappable onTap = {
        goToHref('/')
    }
    component = "div"
    className = "link" >
    Check out our homepage
    for the most popular GIFs on the internet. <
    /Tappable> <
    /div> <
    /div> <
    /Page>
)

export const FiveHundred = () => ( <
    Page >
    <
    Header / >
    <
    div className = "four-five" >
    <
    img className = "sorry"
    src = {
        explosionSrc
    }
    /> <
    div className = "message" >
    Dang, something went wrong...
    <
    Tappable onTap = {
        goToHref('/explore/reactions')
    }
    component = "div"
    className = "link" >
    In the meantime, why not browse some reaction GIFs ?
    <
    /Tappable> <
    /div> <
    /div> <
    /Page>
)