import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Grid from 'shared/components/search/grid'
import { FOUR_O_FOUR_API_KEY, API_URL } from 'shared/api'
import { processTrendingAPIGifs } from 'shared/util/gif-process'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import appendQuery from 'append-query'
import { fetchGifsFromUrl } from 'shared/redux/fetch-gifs'
import { connect } from 'react-redux'
import { colors } from '@giphy/react-giphy-brand'
import { sample } from 'lodash'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 50px;
`

const Message = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    align-items: center;
    line-height: 15px;
    text-align: center;
    width: 400px;
    margin: 50px 0 15px;
`

const Footer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    bottom: 0;
    width: 100vw;
    height: 30vh;
    pointer-events: none;
`

const Button = styled.a`
    background: ${colors.primaryCTA};
    width: 300px;
    color: white;
    line-height: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 60px;
    pointer-events: auto;
`

const Arrow = styled.div`
    color: white;
    margin-bottom: 15px;
`
const errorGifs = ['img/error_pages/text/dang.gif', 'img/error_pages/text/oops.gif', 'img/error_pages/text/woof.gif']

const errorBgs = [
    'img/error_pages/bg/bg_blocks.gif',
    'img/error_pages/bg/bg_cupcakes_small.gif',
    'img/error_pages/bg/bg_pizza.gif',
    'img/error_pages/bg/bg_shine_small.gif',
    'img/error_pages/bg/bg_tacos.gif',
]
const errorText = sample(errorGifs)
const errorBG = sample(errorBgs)

const GlobalStyle = createGlobalStyle`
  body {
    background-color: transparent;
  }

  html {
    background-image: url('${(window as any).STATIC_URL + errorBG}');
    background-size: 100%;
  }
`

type Error404Props = {
    fetchGifsFromUrl: (url: string, options: object) => void
}

const Error404 = ({ fetchGifsFromUrl }: Error404Props) => {
    const groupId = 'trending'
    const fetchOptions = {
        groupId,
        processor: processTrendingAPIGifs,
        report: false,
        apiKey: FOUR_O_FOUR_API_KEY,
    }

    useAsyncEffect(async () => {
        const url = appendQuery(`${API_URL}gifs/trending`, {
            api_key: fetchOptions.apiKey,
            limit: 25,
        })
        try {
            fetchGifsFromUrl(url, fetchOptions)
        } catch (e) {
            console.warn(e)
        }
    }, [])

    return (
        <Fragment>
            <GlobalStyle />
            <Container>
                <img src={(window as any).STATIC_URL + errorText} />
                <Message>
                    <p>Oops! There’s nothing here. Looking for GIFs</p>
                    <p>that DO exist? Here are our GIFs trending today!</p>
                </Message>
                <Arrow className="ss-icon ss-navigatedown" />
                <Grid
                    showTV={false}
                    showBulkEditor={false}
                    category="trending"
                    groupId={groupId}
                    processor={processTrendingAPIGifs}
                    apiKey={fetchOptions.apiKey}
                    onLoadMore={() => {}} // only load the first page
                    showLoader={false} // hide loader
                />
                <Footer>
                    <Button href="/">Continue to Our Homepage</Button>
                </Footer>
            </Container>
        </Fragment>
    )
}

export default connect(
    undefined,
    { fetchGifsFromUrl }
)(Error404)
