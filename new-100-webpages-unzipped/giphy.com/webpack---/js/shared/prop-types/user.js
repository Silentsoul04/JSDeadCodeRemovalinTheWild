import PropTypes from 'prop-types'

export default PropTypes.shape({
    attribution_display_name: PropTypes.string,
    avatar_url: PropTypes.string,
    banner_url: PropTypes.string,
    display_name: PropTypes.string,
    is_public: PropTypes.bool,
    name: PropTypes.string,
    profile_url: PropTypes.string,
    profile_path: PropTypes.string,
    suppress_chrome: PropTypes.bool,
    username: PropTypes.string,
    twitter: PropTypes.string,
    facebook_url: PropTypes.string,
    twitter_url: PropTypes.string,
    tumblr_url: PropTypes.string,
    instagram_url: PropTypes.string,
})