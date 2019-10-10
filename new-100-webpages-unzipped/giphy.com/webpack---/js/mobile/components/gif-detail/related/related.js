import {
    PureComponent
} from 'react'
import {
    withRouter
} from 'react-router'
import {
    debounce,
    isEmpty
} from 'lodash'
import {
    connect
} from 'react-redux'
import styled from 'styled-components'
import {
    SectionHeader,
    colors
} from '@giphy/react-giphy-brand'
import Grid from 'shared/components/search/grid'
import {
    removeGifs
} from 'shared/redux/gifs'
import * as selectors from 'shared/redux/reducers'
import {
    fetchGifsFromUrl,
    fetchChannelGifsFromUrl
} from 'shared/redux/fetch-gifs'
import {
    getRouteFromPathname
} from '../../router'
import routes from '../../../../shared/routes'
import {
    trackEvent,
    Actions
} from 'shared/util/gif-detail-ga-events'
import {
    setGTADataLayer
} from 'shared/util/analytics'
import REACTIONS from './reactions-list'
import Reactions from './reactions'

const REACTIONS_ENABLED = true // added this here to make it easy to turn off the reactions feature if need be

const Options = styled.div `
    box-sizing: border-box;
    line-height: 1;
    padding: 8px;
    text-align: left;
    width: 100%;
`

const Option = styled(SectionHeader)
`
    color: ${props => (props.active ? colors.giphyWhite : colors.giphyLightCharcoal)};
    display: inline-block;
    margin-right: 12px;
`

const getReactionFetchUrl = ({
        search
    }) =>
    `/api/v1/channels/681/search/?q=${encodeURIComponent(search)}&tagged=true&is=1&json=true`

@withRouter
class RelatedGifs extends PureComponent {
    state = {
        reaction: REACTIONS[0],
        reactionGroupId: getReactionFetchUrl(REACTIONS[0]),
        isReactions: false,
        isFetching: false,
    }
    constructor(props) {
        super(props)

        const {
            nextUrl,
            gif: {
                is_sticker
            },
        } = props

        // the nextUrl indicates which route we're on (hopefully)
        // perhaps the root.js componentWillMount should set an initialRoute in redux
        const route = getRouteFromPathname(nextUrl)
        const type = is_sticker ? 'Stickers' : 'GIFs'
        switch (route) {
            case routes.HOME:
                this.subtitle = `Trending ${type}`
                break
            default:
                this.subtitle = `Related ${type}`
                break
        }
    }
    componentDidMount() {
        const {
            gifs
        } = this.props

        const ref = document.referrer
        const isFacebook = ref.indexOf('facebook.com') > -1
        const inTest = window.hasOwnProperty('optimizeReactionsVariant') ? window.optimizeReactionsVariant : null

        // default to reactions if facebook is open
        if (REACTIONS_ENABLED && isFacebook && inTest) {
            this.setState({
                isReactions: true
            })
            this.getReactionGifs(this.state.reaction, false)
        } else if (isEmpty(gifs)) {
            this.getRelatedGifs()
        }

        setGTADataLayer({
            dimension: 'MobileGifDetailRetentionRelated',
            value: `${isFacebook ? '' : 'No '}Reactions`
        })
    }
    componentDidUpdate({
        gif: {
            id: prevId
        }
    }) {
        const {
            gif: {
                id
            },
            gifs,
        } = this.props
        if (isEmpty(gifs) && id !== prevId) {
            this.getRelatedGifs()
        }
    }
    getRelatedGifs = debounce(() => {
        const {
            gif: {
                id
            },
            relatedGroupId,
            fetchGifsFromUrl,
        } = this.props
        fetchGifsFromUrl(`/gifs/${id}/related/1`, {
            groupId: relatedGroupId,
            report: false
        })
    }, 1000)
    getReactionGifs = async (reaction, report = true) => {
        const {
            fetchChannelGifsFromUrl
        } = this.props
        const {
            isFetching
        } = this.state
        if (isFetching) return
        this.setState({
            reaction,
            isFetching: true
        })
        const url = getReactionFetchUrl(reaction)
        await fetchChannelGifsFromUrl({
            url,
            report,
            groupId: url,
            prepend: false,
        })
        this.setState({
            reactionGroupId: url,
            isFetching: false
        })
    }
    onRelatedClick = () => {
        this.setState({
            isReactions: false
        })
    }
    onReactionsClick = () => {
        this.setState({
            isReactions: true
        })
        this.getReactionGifs(this.state.reaction, false)
    }
    onReactionsChange = reaction => {
        trackEvent(Actions.reactionChange, reaction.search)
        this.getReactionGifs(reaction)
    }

    render() {
        const {
            gif: {
                id,
                user
            },
            isPrivate,
            getGif,
            history,
            removeGifs,
            relatedGroupId,
        } = this.props
        const {
            reaction,
            reactionGroupId,
            isReactions
        } = this.state
        // share buttons have built in margins,
        // adjusting for those
        const marginTop = user ? 17 : 15
        return ( <
            div style = {
                {
                    marginTop
                }
            } >
            <
            Options >
            <
            Option active = {
                REACTIONS_ENABLED && !isReactions
            }
            onClick = {
                this.onRelatedClick
            } >
            Related <
            /Option> {
                REACTIONS_ENABLED && ( <
                    Option active = {
                        isReactions
                    }
                    onClick = {
                        this.onReactionsClick
                    } >
                    Reactions <
                    /Option>
                )
            } <
            /Options> {
                isReactions && < Reactions reaction = {
                    reaction
                }
                onClick = {
                    this.onReactionsChange
                }
                />} <
                Grid
                excludeGifIds = {
                    [id]
                }
                groupId = {
                    isReactions ? reactionGroupId : relatedGroupId
                }
                onGifClick = {
                    gifId => {
                        if (isPrivate) {
                            // remove the gif if we're navigating away from
                            // a private gif detail page
                            removeGifs({
                                gifIds: [id]
                            })
                            // replace the state so the user can't go back
                            history.replace(getGif(gifId).path)
                        }
                        trackEvent(Actions[isReactions ? 'reactionClick' : 'relatedClick'], id)
                    }
                }
                /> <
                /div>
            )
        }
    }

    export default connect(
        (state, {
            gif: {
                id
            }
        }) => {
            const relatedGroupId = `${id}-related`
            return {
                relatedGroupId,
                nextUrl: selectors.getNextUrl(state, relatedGroupId),
                gifs: selectors.getGifs(state, relatedGroupId, [id]),
                getGif: id => selectors.getGifById(state, id),
            }
        }, {
            fetchGifsFromUrl,
            removeGifs,
            fetchChannelGifsFromUrl
        },
    )(RelatedGifs)