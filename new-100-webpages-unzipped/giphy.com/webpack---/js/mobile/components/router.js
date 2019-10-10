import {
    PureComponent,
    Fragment
} from 'react'
import PropTypes from 'prop-types'
import {
    withContext
} from 'recompose'
import {
    Route,
    withRouter,
    matchPath
} from 'react-router'
import {
    find,
    groupBy,
    uniq
} from 'lodash'
import log from 'shared/util/log'
import reporting from '../shared/reporting'
import routes from '../../shared/routes'
import componentMap from '../shared/component-map'
import GTALogger from 'shared/components/gta-logger'

// window IDs to routes
const dynamicRoutes = {
    root_channel: routes.CHANNEL,
    // these could have their own dynamic route
    leaf_channel: routes.CHANNEL,
    branch_channel: routes.CHANNEL,
}
// provide isOffScreen to any child component without having to pass
// it through the entire component tree
const MobileRoute = withContext({
        isOffScreen: PropTypes.bool
    }, ({
        isOffScreen
    }) => ({
        isOffScreen,
    }))(({
            location,
            route
        }) => < Route location = {
            location
        } { ...route
        }
        />)

        export const getRouteFromPathname = pathname => find(routes, location => matchPath(pathname, location))
        const getComponentInfo = location => {
            const {
                state = {}
            } = location
            let route
            const component = state.id && componentMap.get(state.id)
            if (component) {
                // the route's component will be basd on the window id
                log.info(`Router, create route from window id: ${state.id}`)
                route = {
                    // we're mounting our router, and have the initial pathname
                    // use this pathname to create a route
                    path: location.pathname,
                    component,
                    isId: true,
                }
                const dynamicRoute = dynamicRoutes[state.id]
                if (dynamicRoute) {
                    // update routes.CHANNEL.path
                    // feels like this should be encapsulated, may refactor
                    dynamicRoute.path = location.pathname
                    dynamicRoute.exact = true // Thinking these should always be exact...
                    route.isId = false
                }
            } else {
                route = getRouteFromPathname(location.pathname)
                if (route) {
                    route.component = componentMap.get(route)
                }
            }
            return {
                location,
                route,
            }
        }

        @withRouter class PagesFromRoutes extends PureComponent {
            state = {
                componentInfo: []
            }

            componentWillMount() {
                const {
                    location
                } = this.props
                this.setState({
                    componentInfo: [getComponentInfo(location)]
                })
            }

            componentWillReceiveProps({
                location
            }) {
                if (this.props.location.pathname !== location.pathname) {
                    const {
                        ids = [], routed = []
                    } = groupBy(this.state.componentInfo, ({
                            route: {
                                isId
                            }
                        }) =>
                        isId ? 'ids' : 'routed',
                    )
                    // remove a route if it matches a current location
                    const componentInfoRouted = routed.filter(({
                        route
                    }) => !matchPath(location.pathname, route))
                    // remove a route if it matches a current id
                    const componentById = uniq(ids, ({
                        location: {
                            state
                        }
                    }) => state.id).filter(
                        ({
                            location: {
                                state
                            }
                        }) => state.id !== location.state.id,
                    )
                    this.setState({
                        // append the route
                        componentInfo: [...componentInfoRouted, ...componentById, getComponentInfo(location)],
                    })
                }
                setTimeout(() => {
                    reporting(location.pathname)
                })
            }

            render() {
                const {
                    componentInfo
                } = this.state
                const {
                    location: {
                        pathname
                    },
                } = this.props
                log.debug(`Router: render components:`, componentInfo)
                return ( <
                    Fragment >
                    <
                    GTALogger / > {
                        componentInfo.map(({
                            location,
                            route
                        }) => {
                            if (!route) {
                                log.warn(`No route found for ${pathname}`)
                                return null
                            }
                            return ( <
                                MobileRoute key = {
                                    route.path
                                }
                                route = {
                                    route
                                }
                                location = {
                                    location
                                }
                                isOffScreen = {
                                    pathname !== location.pathname
                                }
                                />
                            )
                        })
                    } <
                    /Fragment>
                )
            }
        }

        export default PagesFromRoutes