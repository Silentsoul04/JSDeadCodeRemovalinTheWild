import { useRef, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'
import { getDefaultStore } from 'shared/redux/init-store'
import entryPoint from 'shared/components/entry-point-hoc'
import Header from 'modules/header/components/header'
import routes from 'shared/routes'
import ChannelStoriesRoute from './stories/route'
import StoryRoute from './story/components/route'
import TrendingRoute from './trending/route'
import TrendingVideosRoute from './trending-videos/route'
import GDBootstrapper from 'shared/components/gd-bootstrapper'
import HomepageBeta from './homepage-beta/route'
import Homebase from './homebase/route'
import GifDetailRoute from './gif-detail/components/route'
import Join from './user/join'
import Login from './user/login'
import ArtistsRoute from './artists/route'
import AppsLandingRoute from './apps-landing/components/route'
import CurationRoute from './curation-station/route'
import VideoDetail from './video-detail'
import FilmFest from './film-fest/route'
import Apply from './user/apply'
import SiteContainer from './site-container'
import Settings from './user/settings'
import GTALogger from 'shared/components/gta-logger'
import Error404 from './error-pages/404'
import TeamPage from './team/team'
import MarketingLandingPage from 'shared/components/giphy-marketers'

const store = getDefaultStore({})

const App = ({ pageData, user, showSearch, showBrowse, searchTerm }) => {
    const is404 = useRef(pageData.status_code === 404)
    // if we have is404 in the template on first render
    if (is404.current) {
        // then the current pathname is a 404
        routes.ERROR_404.path = location.pathname
    }
    return (
        <Provider store={store}>
            <SiteContainer>
                <Suspense fallback={null}>
                    <BrowserRouter>
                        <GDBootstrapper initData={pageData}>
                            {!pageData.hideHeader && <Header {...{ user, showSearch, showBrowse, searchTerm }} />}
                            <GTALogger isMobile={false} />
                            <Switch>
                                <Route {...routes.ERROR_404} exact component={Error404} />
                                <Route {...routes.APPLY} component={Apply} />
                                <Route {...routes.JOIN} component={Join} />
                                <Route {...routes.MARKETERS} exact component={MarketingLandingPage} />
                                <Route {...routes.LOGIN} component={Login} />
                                <Route {...routes.CHANNEL_STORIES} component={ChannelStoriesRoute} />
                                <Route {...routes.ARTISTS} component={ArtistsRoute} />
                                <Route {...routes.STORY} component={StoryRoute} />
                                <Route {...routes.GIF_DETAIL} component={GifDetailRoute} />
                                <Route {...routes.TRENDING_VIDEOS} component={TrendingVideosRoute} />
                                <Route {...routes.VIDEO_DETAIL} component={VideoDetail} />
                                <Route {...routes.FILM_FEST} component={FilmFest} />
                                <Route {...routes.TRENDING} component={TrendingRoute} />
                                <Route {...routes.APPS} component={AppsLandingRoute} />
                                <Route {...routes.SETTINGS} component={Settings} />
                                <Route {...routes.HOMEBASE} component={Homebase} />
                                <Route {...routes.EDIT_GIFS} component={CurationRoute} />
                                <Route {...routes.TEAM} component={TeamPage} />
                                <Route {...routes.HOME} component={HomepageBeta} />
                                <Route exact component={Error404} />
                            </Switch>
                        </GDBootstrapper>
                    </BrowserRouter>
                </Suspense>
            </SiteContainer>
        </Provider>
    )
}

export default entryPoint(store)(App)
