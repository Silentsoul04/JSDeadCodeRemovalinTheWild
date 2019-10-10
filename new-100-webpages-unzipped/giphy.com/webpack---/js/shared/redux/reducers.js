import {
    combineReducers
} from 'redux'
import {
    isEmpty
} from 'lodash'
import gifs, * as gifSelectors from './gifs'
import autoPlay, * as autoPlaySelectors from './auto-play'
import searchType, * as searchTypeSelectors from './search-type-toggle'
import editMode, * as editModeSelectors from './edit-mode'
import pagination, * as paginationSelectors from './pagination'
import powerGlove, * as powerGloveSelectors from './power-glove'
import user, * as userSelectors from './user'
import gridType, * as gridTypeSelectors from './grid-type'
import featuredChannels, * as featuredChannelsSelectors from './featured-channels'
import trendingTags, * as trendingTagsSelectors from './trending-tags'
import userPermissions, * as userPermissionsSelectors from 'shared/redux/permissions'
import editModeChannels, * as editModeChannelsSelectors from 'shared/redux/edit-mode-channels'
import * as creationSelectors from './creation-tool'
import isBulkEditMode, * as bulkEditModeSelectors from './bulk-edit-mode'
import message, * as messsageSelectors from './message'
import isStoryEditMode, * as storyEditModeSelectors from './story-edit-mode'
import stories, * as storiesSelectors from 'shared/redux/stories'
import channel, * as channelSelectors from 'shared/redux/channel'
import channelSelectorItems from 'shared/redux/channel-selector'
import typeahead, * as typeaheadSelectors from 'shared/redux/typeahead'
import newGifs, * as newGifSelectors from 'shared/redux/new-gifs'
import siteContainerStyle, * as siteContainerSelectors from './site-container-style'

const reducers = {
    autoPlay,
    searchType,
    editMode,
    gifs,
    pagination,
    powerGlove,
    user,
    featuredChannels,
    trendingTags,
    userGridType: gridType,
    userPermissions,
    editModeChannels,
    isBulkEditMode,
    message,
    isStoryEditMode,
    stories,
    channel,
    channelSelectorItems,
    typeahead,
    newGifs,
    siteContainerStyle,
}
export default combineReducers(reducers)

export const addReducers = addedReducers => combineReducers({ ...reducers,
    ...addedReducers
})

/**
 * Selectors
 */
export const getGifs = (state, groupId, excludeGifIds) =>
    gifSelectors.getGifs(state.gifs, groupId, state.editMode, excludeGifIds)
export const getGifsByUrl = (state, url) => gifSelectors.getGifsByUrl(state.gifs, url)
export const getGifIdsByUrl = (state, url) => gifSelectors.getIdsByURL(state.gifs, url)
export const getGifById = (state, gifId) => gifSelectors.getGifById(state.gifs, gifId)
export const getGifsById = (state, gifIds) => gifSelectors.getGifsById(state.gifs, gifIds)
export const getGifIds = (state, groupId) => gifSelectors.getIds(state.gifs, groupId)
export const getGifCountByGroupId = (state, props) => gifSelectors.getGifCountByGroupId(state.gifs, props)
export const getGifErrorByGroupId = (state, props) => gifSelectors.getGifErrorByGroupId(state.gifs, props)
export const getRemovedGifs = state => gifSelectors.getRemovedGifs(state.gifs)
export const hasEnoughGifsForTV = (state, props) => gifSelectors.hasEnoughGifsForTV(state.gifs, props)
export const getNextGif = (state, ...rest) => gifSelectors.getNextGif(state.gifs, ...rest)
export const getPrevGif = (state, ...rest) => gifSelectors.getPrevGif(state.gifs, ...rest)
export const getFetching = (state, groupId) => paginationSelectors.getFetching(state.pagination, groupId)
export const getFetchingByUrl = (state, url) => paginationSelectors.getFetchingByUrl(state.pagination, url)
export const getCurrentUrlByGroupId = (state, groupId) =>
    paginationSelectors.getCurrentUrlByGroupId(state.pagination, groupId)
export const getNextUrl = (state, groupId) => paginationSelectors.getNextUrl(state.pagination, groupId)
export const getNextUrlByUrl = (state, url) => paginationSelectors.getNextUrlByUrl(state.pagination, url)
export const getResponseId = (state, groupId) => paginationSelectors.getResponseId(state.pagination, groupId)
export const getAutoPlay = state => autoPlaySelectors.getAutoPlay(state.autoPlay)
export const getSearchType = state => searchTypeSelectors.getSearchType(state.searchType)
export const getEditMode = (state, gifId) => editModeSelectors.getEditMode(state.editMode, gifId)
export const getEditModeErrors = state => editModeSelectors.getEditModeErrors(state.editMode)
export const getEditModeSuccess = state => editModeSelectors.getEditModeSuccess(state.editMode)
export const getEditModeProgress = state => editModeSelectors.getSaveProgress(state.editMode)
export const getEditModeIsSaving = state => editModeSelectors.getIsSaving(state.editMode)
export const getEditModeIsEditing = state => editModeSelectors.getIsEditing(state.editMode)
export const getEditGifIds = state => editModeSelectors.getEditGifIds(state.editMode)
export const getPowerGlove = state => powerGloveSelectors.getPowerGlove(state.powerGlove)
export const getUser = state => userSelectors.getUser(state.user)
export const getUserLoggedIn = state => userSelectors.getUserLoggedIn(state.user)
export const getFeaturedChannels = state => featuredChannelsSelectors.getFeaturedChannels(state.featuredChannels)
export const getTrendingTags = state => trendingTagsSelectors.getTrendingTags(state.trendingTags)
export const getUserPermissions = state => userPermissionsSelectors.getUserPermissions(state.userPermissions)
export const getEditModeChannels = state => editModeChannelsSelectors.getEditModeChannels(state.editModeChannels)
export const getCreationFile = state => creationSelectors.getFile(state.creationTool)
export const getCreationEditedFile = state => creationSelectors.getEditedFile(state.creationTool)
export const getCreationStatus = state => creationSelectors.getStatus(state.creationTool)
export const getCreationTags = state => creationSelectors.getTags(state.creationTool)
export const getCreationRating = state => creationSelectors.getRating(state.creationTool)
export const getCreationUsername = state => creationSelectors.getUsername(state.creationTool)
export const getCreationSourceUrl = state => creationSelectors.getSourceUrl(state.creationTool)
export const getCreationApiKey = state => creationSelectors.getAPIKey(state.creationTool)
export const getCreationTermsAgreed = state => creationSelectors.getTermsAgreed(state.creationTool)
export const getCreationIsPrivate = state => creationSelectors.getIsPrivate(state.creationTool)
export const getCreationIsUploading = state => creationSelectors.getIsUploading(state.creationTool)
export const getCreationHasEdits = state => creationSelectors.getHasEdits(state.creationTool)
export const getCreationInfoFields = state => creationSelectors.getInfoFields(state.creationTool)
export const getCreationChannelId = state => creationSelectors.getChannelId(state.creationTool)
export const getCreationDimensionsByFrame = state => creationSelectors.getDimensionsByFrame(state.creationTool)
export const getIsBulkEditMode = state => bulkEditModeSelectors.getIsBulkEditMode(state.isBulkEditMode)
export const getMessage = state => messsageSelectors.getMessage(state.message)
export const getIsStoryEditMode = state => storyEditModeSelectors.getIsStoryEditMode(state.isStoryEditMode)
export const getTypeahead = state => typeaheadSelectors.getTypeahead(state.typeahead)
export const getTypeaheadQuery = state => typeaheadSelectors.getTypeaheadQuery(state.typeahead)
export const getTypeaheadTerms = state => typeaheadSelectors.getTypeaheadTerms(state.typeahead)
export const getTypeaheadChannels = state => typeaheadSelectors.getTypeaheadChannels(state.typeahead)
export const hasTypeahead = state => typeaheadSelectors.hasTypeahead(state.typeahead)
export const getSiteContainerStyle = state => siteContainerSelectors.getSiteContainerStyle(state.siteContainerStyle)

export const getStories = (state, watched) => storiesSelectors.getAllStories(state.stories, watched)
export const getStoriesByUsername = (state, username, watched) =>
    storiesSelectors.getStoriesByUsername(state.stories, username, watched)
export const getStoriesGroupedByDate = (state, username, isReverse) =>
    storiesSelectors.getUserStoriesGroupedByDate(state.stories, username, isReverse)
export const getStoryBySlug = (state, slug) => storiesSelectors.getStoryBySlug(state.stories, slug)
export const getStoryById = (state, id) => storiesSelectors.getStoryById(state.stories, id)
export const getMoreStoriesBySlug = (state, slug, watched) =>
    storiesSelectors.getMoreStoriesBySlug(state.stories, slug, watched)
export const getStoryPaginationUrl = (state, username) => storiesSelectors.getPagination(state.stories, username)
export const getStoryFetchingByUrl = (state, url) => storiesSelectors.getIsFetchingStories(state.stories, url)
export const getAllStoriesByLoadOrder = state => storiesSelectors.getAllStoriesByLoadOrder(state.stories)

export const getChannel = (state, id) => channelSelectors.getChannel(state.channel, id)
export const getChannelChildren = (state, id) => channelSelectors.getChildren(state.channel, id)

export const getHasMore = (state, groupId) => paginationSelectors.getHasMore(state.pagination, groupId)
export const getNewGifs = state => newGifSelectors.getNewGifs(state.newGifs)
export const getAddedGifIds = state => newGifSelectors.getAddedGifIds(state.newGifs)
export const getPolling = state => newGifSelectors.getPolling(state.newGifs)
export const getLastPolled = state => newGifSelectors.getLastPolled(state.newGifs)
export const getGridType = state => gridTypeSelectors.getGridType(state.userGridType)

export const getGridNavInHeader = (state, channelType) => {
    const gifs = getGifs(state)

    if (isEmpty(gifs) && channelType === 'branch_channel') {
        return true
    }

    if (channelType === 'leaf_channel') {
        return true
    }

    return false
}