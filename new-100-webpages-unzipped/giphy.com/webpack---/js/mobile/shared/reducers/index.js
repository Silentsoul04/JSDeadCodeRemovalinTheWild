import {
    combineReducers
} from 'redux'
import user, * as userSelectors from './user'
import settings from './settings'
import categories from './categories'
import autoPlay from 'shared/redux/auto-play'
import gridType, * as gridTypeSelectors from 'shared/redux/grid-type'
import menuVisibility from './menu-visibility'
import message from 'shared/redux/message'
import isPortrait from './is-portrait'
import gifDetail, * as gifDetailSelectors from './gif-detail'
import miscLocalStorage, * as miscLocalStorageSelectors from './misc-local-storage'
import following from './following'
import channel, * as channelSelectors from 'shared/redux/channel'
import appSize from './app-size'
import gifs, * as gifSelectors from 'shared/redux/gifs'
import pagination, * as paginationSelectors from 'shared/redux/pagination'
import newGifs, * as newGifSelectors from 'shared/redux/new-gifs'
import draw, * as drawSelectors from 'shared/redux/draw'
import creationTool, * as creationSelectors from 'shared/redux/creation-tool'
import creationFilters, * as creationFiltersSelectors from 'shared/redux/creation-filters'
import searchType, * as searchTypeSelectors from 'shared/redux/search-type-toggle'
import routes from '../../../shared/routes'
import stories, * as storiesSelectors from 'shared/redux/stories'
import story, * as storySelectors from './story'
import searchBar, * as searchBarSelectors from './search-bar'

export default combineReducers({
    appSize,
    gifs,
    pagination,
    categories,
    user,
    menuVisibility,
    autoPlay,
    channel,
    isPortrait,
    settings,
    following, // should be part of user but user needs refactoring
    message,
    creationTool,
    creationFilters,
    newGifs,
    userGridType: gridType,
    gifDetail,
    searchType,
    gifMaker: combineReducers({
        draw
    }),
    miscLocalStorage,
    searchBar,
    stories,
    story,
})

/**
 * Selectors
 */

export const getAppSize = state => state.appSize
export const getGifs = (state, groupId) => gifSelectors.getGifs(state.gifs, groupId)
export const getGifById = (state, id) => gifSelectors.getGifById(state.gifs, id)
export const getGifIds = (state, groupId) => gifSelectors.getIds(state.gifs, groupId)
export const getGifCountByGroupId = (state, props) => gifSelectors.getGifCountByGroupId(state.gifs, props)
export const getFetching = (state, groupId) => paginationSelectors.getFetching(state.pagination, groupId)
export const getNextUrl = (state, groupId) => paginationSelectors.getNextUrl(state.pagination, groupId)
export const getResponseId = (state, groupId) => paginationSelectors.getResponseId(state.pagination, groupId)
export const getChannel = (state, id) => channelSelectors.getChannel(state.channel, id)
export const getChannelChildren = (state, id) => channelSelectors.getChildren(state.channel, id)
export const getNewGifs = state => newGifSelectors.getNewGifs(state.newGifs)
export const getAddedGifIds = state => newGifSelectors.getAddedGifIds(state.newGifs)
export const getPolling = state => newGifSelectors.getPolling(state.newGifs)
export const getLastPolled = state => newGifSelectors.getLastPolled(state.newGifs)
export const getAutoPlay = state => state.autoPlay
export const getGridType = state => gridTypeSelectors.getGridType(state.userGridType)
export const getGifDetailHasSeenAppPlug = ({
        miscLocalStorage
    }) =>
    miscLocalStorageSelectors.getHasSeenAppPlug(miscLocalStorage)
export const getGifDetailIsInstagramVisible = state => gifDetailSelectors.getIsInstagramVisible(state.gifDetail)
export const getIsSearchVisible = state => searchBarSelectors.getIsSearchVisbile(state.searchBar)
export const getGifDetailIsMetaVisible = (state, id) => gifDetailSelectors.getIsMetaVisible(state.gifDetail, id)
export const getCreationFile = state => creationSelectors.getFile(state.creationTool)
export const getCreationEditedFile = state => creationSelectors.getEditedFile(state.creationTool)
export const getCreationStatus = state => creationSelectors.getStatus(state.creationTool)
export const getCreationTags = state => creationSelectors.getTags(state.creationTool)
export const getCreationRating = state => creationSelectors.getRating(state.creationTool)
export const getCreationUsername = state => creationSelectors.getUsername(state.creationTool)
export const getCreationSourceUrl = state => creationSelectors.getSourceUrl(state.creationTool)
export const getCreationTermsAgreed = state => creationSelectors.getTermsAgreed(state.creationTool)
export const getCreationIsPrivate = state => creationSelectors.getIsPrivate(state.creationTool)
export const getCreationIsUploading = state => creationSelectors.getIsUploading(state.creationTool)
export const getCreationHasEdits = state => creationSelectors.getHasEdits(state.creationTool)

export const getUserId = state => userSelectors.getUserId(state.user)
export const getUserIsLoggedIn = state => userSelectors.getLoggedIn(state.user)
export const getUserIsStaff = state => userSelectors.getIsStaff(state.user)
export const getUserIsArtist = state => userSelectors.getIsArtist(state.user)
export const getUserEmail = state => userSelectors.getEmail(state.user)
export const getUserIsPartner = state => userSelectors.getIsPartner(state.user)
export const getSearchType = state => searchTypeSelectors.getSearchType(state.searchType)
export const getDrawLineStyle = ({
    gifMaker: {
        draw
    }
}) => drawSelectors.getLineStyle(draw)
export const getDrawColor = ({
    gifMaker: {
        draw
    }
}) => drawSelectors.getColor(draw)
export const getDrawSticker = ({
    gifMaker: {
        draw
    }
}) => drawSelectors.getSticker(draw)
export const getDrawLineStep = ({
    gifMaker: {
        draw
    }
}) => drawSelectors.getLineStep(draw)
export const getDrawLineWidth = ({
    gifMaker: {
        draw
    }
}) => drawSelectors.getLineWidth(draw)
export const getCreationCurrentFilter = ({
        creationFilters
    }) =>
    creationFiltersSelectors.getCurrentFilter(creationFilters)
export const getCreationFilters = ({
    creationFilters
}) => creationFiltersSelectors.getFilters(creationFilters)
export const getCreationHasFilters = ({
    creationFilters
}) => creationFiltersSelectors.hasFilter(creationFilters)
export const getFavorites = state => getGifs(state, routes.FAVORITES.path)
export const isFavorite = (state, gifId) => getGifIds(state, routes.FAVORITES.path).indexOf(gifId) !== -1

export const getStoriesByUsername = (state, username, watched) =>
    storiesSelectors.getStoriesByUsername(state.stories, username, watched)
export const getAllStoriesByLoadOrder = state => storiesSelectors.getAllStoriesByLoadOrder(state.stories)
export const getStoryBySlug = (state, slug) => storiesSelectors.getStoryBySlug(state.stories, slug)
export const getStoryById = (state, id) => storiesSelectors.getStoryById(state.stories, id)
export const getMoreStoriesBySlug = (state, slug, watched) =>
    storiesSelectors.getMoreStoriesBySlug(state.stories, slug, watched)

export const getNextStory = state => storySelectors.getNextStory(state.story)
export const getPreviousStory = state => storySelectors.getPreviousStory(state.story)
export const getStoryCurrentCardIndex = state => storySelectors.getCurrentCardIndex(state.story)
export const getStoryCurrentCard = state => storySelectors.getCurrentCard(state.story)
export const getStoryProgress = state => storySelectors.getProgress(state.story)
export const getStoryCards = state => storySelectors.getCards(state.story)
export const getStoryInfo = state => storySelectors.getInfo(state.story)
export const getStoryIsFocused = state => storySelectors.getIsFocused(state.story)
export const getStoryIsOverlayOpen = state => storySelectors.getIsOverlayOpen(state.story)
export const getStoryIsShareOpen = state => storySelectors.getIsShareOpen(state.story)
export const getStoryIsGifMenuOpen = state => storySelectors.getIsGifMenuOpen(state.story)
export const getStoryGifs = state =>
    storySelectors.getCards(state.story).map(({
        gifId
    }) => gifSelectors.getGifById(state.gifs, gifId))