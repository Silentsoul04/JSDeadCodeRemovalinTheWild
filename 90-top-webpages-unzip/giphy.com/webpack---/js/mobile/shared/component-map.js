import { lazy } from 'react'
import routes from '../../shared/routes'

import GifDetailPage from '../pages/gif-detail-manager'
import VideoDetailPage from '../pages/video-detail'
import { StaticPage, StaticPageNoHeader, FourTwoThree, FiveHundred } from '../pages/static'
import AppsPage from '../pages/apps/apps'
import AppDetailPage from '../pages/apps/app-detail'
import StudiosPage from '../pages/studios'
import PostPage from '../pages/post'
import SupportPage from '../pages/support'
import GifMakerPage from '../pages/gif-maker'
import StoryPage from '../pages/story'
import HomePage from '../pages/home'
import ArtistsPage from '../pages/artists'
import GiphyMarketing from 'shared/components/giphy-marketers'
import TrendingVideosPage from '../pages/trending-videos'

// import ChannelStoriesPage from '../pages/channel/channel-stories'
// import FavoritesPage from
// import GifVideoPage from '../pages/gif-video'
// import AboutPage from '../pages/about'
// import SearchResultsPage from '../pages/search-results'
// import ExploreResultsPage from '../pages/explore-results'
// import LoginPage from '../pages/user/login'
// import JoinPage from '../pages/user/join'
// import ApplyPage from '../pages/user/apply'
// import ResetPasswordPage from '../pages/user/reset-password'
// import PasswordChangePage from '../pages/user/password-change'
// import ExploreCategoryPage from '../pages/explore-category'
// import ChannelPage from '../pages/channel/channel-root'
// import ChannelBranchPage from '../pages/channel/channel-branch'
// import ChannelLeafPage from '../pages/channel/channel-leaf'
// import ChannelListPage from '../pages/channel/channel-list'
// import ChannelSearchPage from '../pages/channel/channel-search'
// import TeamPage from '../pages/team'
// import DashboardPage from '../pages/user/dashboard'

const ChannelStoriesPage = lazy(() =>
    import(/* webpackChunkName: "channelStoriesPage" */ '../pages/channel/channel-stories'),
)
const FavoritesPage = lazy(() => import(/* webpackChunkName: "mobileFavoritesPage" */ '../pages/user/favorites'))
const GifVideoPage = lazy(() => import(/* webpackChunkName: "mobileGifVideoPage" */ '../pages/gif-video'))
const AboutPage = lazy(() => import(/* webpackChunkName: "mobileAboutPage" */ '../pages/about'))
const TrendingPage = lazy(() => import(/* webpackChunkName: "mobileTrendingPage" */ '../pages/trending'))
const SearchResultsPage = lazy(() =>
    import(/* webpackChunkName: "mobileSearchResultsPage" */ '../pages/search-results'),
)
const ExploreResultsPage = lazy(() =>
    import(/* webpackChunkName: "mobileExploreResultsPage" */ '../pages/explore-results'),
)
const ExploreCategoryPage = lazy(() =>
    import(/* webpackChunkName: "mobileExploreCategoryPage" */ '../pages/explore-category'),
)
const LoginPage = lazy(() => import(/* webpackChunkName: "mobileLoginPage" */ '../pages/user/login'))
const JoinPage = lazy(() => import(/* webpackChunkName: "mobileJoinPage" */ '../pages/user/join'))
const ApplyPage = lazy(() => import(/* webpackChunkName: "mobileApplyPage" */ '../pages/user/apply'))
const ResetPasswordPage = lazy(() =>
    import(/* webpackChunkName: "mobileResetPasswordPage" */ '../pages/user/reset-password'),
)
const PasswordChangePage = lazy(() =>
    import(/* webpackChunkName: "mobileChangePasswordPage" */ '../pages/user/password-change'),
)
const ChannelPage = lazy(() => import(/* webpackChunkName: "mobileChannelPage" */ '../pages/channel/channel-root'))
const ChannelBranchPage = lazy(() =>
    import(/* webpackChunkName: "mobileChannelBranchPage" */ '../pages/channel/channel-branch'),
)
const ChannelLeafPage = lazy(() =>
    import(/* webpackChunkName: "mobileChannelLeafPage" */ '../pages/channel/channel-leaf'),
)
const ChannelListPage = lazy(() =>
    import(/* webpackChunkName: "mobileChannelListPage" */ '../pages/channel/channel-list'),
)
const ChannelSearchPage = lazy(() =>
    import(/* webpackChunkName: "mobileChannelSearchPage" */ '../pages/channel/channel-search'),
)
const TeamPage = lazy(() => import(/* webpackChunkName: "mobileTeamPage" */ '../pages/team'))
const DashboardPage = lazy(() => import(/* webpackChunkName: "mobileDashboard" */ '../pages/user/dashboard'))
const FilmFestPage = lazy(() => import(/* webpackChunkName: "mobileFilmFest" */ '../pages/film-fest'))
const FourZeroFourPage = lazy(() => import(/* webpackChunkName: "mobile404" */ '../pages/404'))

// use a Map so we can use objects as keys
const map = new Map([
    ['about', AboutPage],
    ['appdetail', AppDetailPage],
    [routes.APPLY, ApplyPage],
    ['apps', AppsPage],
    ['appterms', StaticPageNoHeader],
    ['app_privacy', StaticPageNoHeader],
    ['branch_channel', ChannelBranchPage],
    [routes.CATEGORIES, ExploreCategoryPage],
    ['categories_category', ExploreCategoryPage],
    [routes.DASHBOARD, DashboardPage],
    ['dmca', StaticPage],
    ['community_guidelines', StaticPage],
    [routes.EXPLORE, ExploreResultsPage],
    [routes.FAVORITES, FavoritesPage],
    ['faq', StaticPage],
    [routes.GIF_DETAIL, GifDetailPage],
    [routes.VIDEO_DETAIL, VideoDetailPage],
    ['gif_maker', GifMakerPage],
    [routes.GIF_VIDEO, GifVideoPage],
    [routes.HOME, HomePage],
    [routes.JOIN, JoinPage],
    ['leaf_channel', ChannelLeafPage],
    [routes.CHANNEL_STORIES, ChannelStoriesPage],
    ['list_channel', ChannelListPage],
    [routes.LOGIN, LoginPage],
    [routes.PASSWORD_CHANGE, PasswordChangePage],
    [routes.PASSWORD_RESET, ResetPasswordPage],
    ['post', PostPage],
    [routes.SEARCH, SearchResultsPage],
    [routes.STUDIOS, StudiosPage],
    ['support', SupportPage],
    ['fourzerofour', FourZeroFourPage],
    ['fourtwothree', FourTwoThree],
    ['fivehundred', FiveHundred],
    ['privacy', StaticPage],
    ['terms', StaticPage],
    ['root_channel', ChannelPage],
    ['search_channel', ChannelSearchPage],
    ['tagged_channel', ChannelSearchPage],
    ['team', TeamPage],
    [routes.STORY, StoryPage],
    [routes.TRENDING, TrendingPage],
    [routes.ARTISTS, ArtistsPage],
    [routes.FILM_FEST, FilmFestPage],
    [routes.MARKETERS, GiphyMarketing],
    [routes.TRENDING_VIDEOS, TrendingVideosPage],
])

export default map
