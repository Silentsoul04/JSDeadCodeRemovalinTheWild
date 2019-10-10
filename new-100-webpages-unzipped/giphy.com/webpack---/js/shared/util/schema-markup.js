import {
    getTitle
} from 'shared/util/gif-text'

export function resetDetailSchemaMarkup(gif) {
    const {
        user,
        url,
        images: {
            original
        },
        import_datetime,
        update_datetime,
    } = gif

    let markup = {
        '@context': 'http://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        headline: getTitle(gif),
        image: {
            '@type': 'ImageObject',
            url: original.url,
            height: original.height,
            width: original.width,
        },
        datePublished: import_datetime,
        dateModified: update_datetime,
        publisher: {
            '@type': 'Organization',
            name: 'GIPHY',
            logo: {
                '@type': 'ImageObject',
                url: 'https://giphy.com/static/img/giphy_logo_square_social.png',
                width: '300',
                height: '300',
            },
        },
    }

    if (user) {
        markup.author = {
            '@type': 'Person',
            name: user.display_name,
        }
    }

    injectSchemaScript(markup)
}

export function resetDefaultSchemaMarkup() {
    injectSchemaScript({
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: 'https://giphy.com/',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://giphy.com/search/{search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    })
}

export function injectSchemaScript(markup) {
    const oldSchemaScript = document.getElementsByName('giphy-schema')[0]
    oldSchemaScript && oldSchemaScript.remove()

    const newSchemaScript = document.createElement('script')
    newSchemaScript.setAttribute('type', 'application/ld+json')
    newSchemaScript.setAttribute('name', 'giphy-schema')

    newSchemaScript.text = JSON.stringify(markup)
    document.querySelector('head').appendChild(newSchemaScript)
}

export default {
    resetDefaultSchemaMarkup,
    resetDetailSchemaMarkup,
}