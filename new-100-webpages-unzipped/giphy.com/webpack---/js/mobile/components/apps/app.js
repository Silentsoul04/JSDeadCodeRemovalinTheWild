import PropTypes from 'prop-types'
import css from './app.css'
import Links from './content/links'
import Screenshot from './content/screenshot'
import Features from './content/features'
import Video from './content/video'

const App = ({
        background_color,
        accent_color,
        name,
        subheading,
        description,
        icon_url,
        screenshot_url,
        ios_url,
        android_url,
        vive_url,
        oculus_url,
        info_items,
        video_embed,
        is_desktop,
        index,
        is_landing,
        url,
    }) => ( <
        div className = {
            css.appsPage
        } >
        <
        div className = {
            css.app
        }
        style = {
            {
                backgroundColor: accent_color
            }
        } >
        <
        div className = {
            index % 2 !== 0 && is_landing ? css.appBackgroundLeftOdd : css.appBackgroundLeft
        }
        style = {
            {
                backgroundColor: background_color
            }
        }
        /> <
        div className = {
            css.appBackgroundRight
        }
        style = {
            {
                backgroundColor: background_color
            }
        }
        /> <
        div className = {
            css.appDescription
        } >
        <
        div className = {
            css.appIcon
        }
        style = {
            {
                backgroundImage: 'url(' + icon_url + ')'
            }
        }
        /> <
        div className = {
            css.appTitle
        } >
        <
        h1 > {
            name
        } < /h1> {
            subheading ? < h2 > {
                    subheading
                } < /h2> : ''} <
                /div> <
                p > {
                    description
                } < /p> {
                    is_landing ? ( <
                        p className = {
                            css.learnMore
                        } >
                        <
                        a href = {
                            url
                        } > CHECK IT OUT < /a> <
                        i className = {
                            css.carrot
                        }
                        /> <
                        /p>
                    ) : (
                        ''
                    )
                } <
                /div> {
                    ios_url || android_url || vive_url || oculus_url ? ( <
                        Links ios = {
                            ios_url
                        }
                        android = {
                            android_url
                        }
                        vive = {
                            vive_url
                        }
                        oculus = {
                            oculus_url
                        }
                        />
                    ) : (
                        ''
                    )
                } {
                    screenshot_url ? ( <
                        Screenshot url = {
                            screenshot_url
                        }
                        isDesktop = {
                            is_desktop
                        }
                        index = {
                            index
                        }
                        is_landing = {
                            is_landing
                        }
                        />
                    ) : (
                        ''
                    )
                } {
                    info_items ? < Features html = {
                        info_items
                    }
                    /> : ''} {
                        video_embed ? < Video embed = {
                            video_embed
                        }
                        /> : ''} <
                        /div> <
                        /div>
                    )

                    App.propTypes = {
                        background_color: PropTypes.string.isRequired,
                        accent_color: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        subheading: PropTypes.string,
                        description: PropTypes.string.isRequired,
                        icon_url: PropTypes.string.isRequired,
                        screenshot_url: PropTypes.string.isRequired,
                        ios_url: PropTypes.string,
                        android_url: PropTypes.string,
                        info_items: PropTypes.string,
                        video_embed: PropTypes.string,
                        is_desktop: PropTypes.bool.isRequired,
                        index: PropTypes.number,
                        is_landing: PropTypes.bool,
                        url: PropTypes.string.isRequired,
                    }

                    export default App