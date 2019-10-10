import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import {
    connect
} from 'react-redux'
import MenuComponent from '../components/menu/menu'
import UserMenu from '../components/menu/user-menu'
import {
    map,
    memoize,
    isObject
} from 'lodash'
import {
    giphyPink,
    giphyBlue
} from 'shared/css/colors.css'

const Menu = ({
    visible,
    userMenu,
    ...props
}) => {
    if (!visible) {
        return null
    }
    return userMenu ? ( <
        UserMenu { ...props
        }
        itemClick = {
            path => (location.href = path)
        }
        />
    ) : ( <
        MenuComponent { ...props
        }
        itemClick = {
            path => (location.href = path)
        }
        />
    )
}

const userMenuItems = ({
    channel,
    permissions
}) => {
    const items = [{
            path: channel,
            label: 'Channel',
        },
        {
            path: '/favorites',
            label: 'Favorites',
        },
        {
            path: '/logout',
            label: 'Log Out',
        },
    ]

    const gatedItems = [{
        path: '/dashboard',
        label: 'Dashboard',
        permission: 'dashboard_link',
    }, ]

    return [...gatedItems.filter(item => permissions[item.permission]), ...items]
}

const getItem = (prefix, joiner) => title =>
    isObject(title) ?
    title :
    {
        title,
        link: `${prefix}${encodeURIComponent(title.replace(' ', joiner || ''))}`.toLowerCase(),
    }

const mainMenuItems = memoize(() => [{
        header: {
            title: 'Categories',
            link: '/categories'
        },
        items: map(['Artists', 'Reactions', 'Entertainment', 'Sports', 'GIPHY Studios'], getItem('/')).concat(
            map(['Holiday', 'Animals', 'Emotions'], getItem('/categories/')),
        ),
    },
    {
        header: {
            title: 'Stickers',
            link: '/stickers'
        },
        items: map(
            [{
                    title: 'Originals',
                    link: '/originals/stickers/studiosoriginalstickers',
                },
                'Trending',
                'Reactions',
                'Packs',
            ],
            getItem('/stickers/', '-'),
        ),
    },
    {
        header: {
            title: 'Apps',
            link: '/apps'
        },
        items: map(['GIPHY', 'GIPHY World', 'GIPHY Cam', 'GIPHY Keys'], getItem('/apps/')),
    },
    {
        header: {
            title: 'About',
            link: '/about'
        },
        items: map(
            [
                'DMCA',
                'FAQ',
                {
                    title: 'Jobs',
                    link: 'https://jobs.giphy.com',
                },
                {
                    title: 'Engineering Blog',
                    link: 'https://engineering.giphy.com/blog/',
                },
                {
                    title: 'GIPHY Arts',
                    link: 'https://arts.giphy.com/',
                },
                {
                    title: 'Community Guidelines',
                    link: '/community-guidelines',
                },
            ],
            getItem('/'),
        ),
    },
])

const mapStateToProps = ({
    menuVisibility,
    user
}) => ({
    color: menuVisibility.userMenu ? giphyBlue : giphyPink,
    items: menuVisibility.categoryMenu ? mainMenuItems() : userMenuItems(user),
    visible: menuVisibility.categoryMenu || menuVisibility.userMenu,
    userMenu: menuVisibility.userMenu,
})

export default connect(mapStateToProps)(Menu)