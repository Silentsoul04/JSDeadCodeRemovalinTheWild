const body = document.body,
    html = document.documentElement

export const getScrollEl = () => {
    let isBody = false
    body.scrollTop += 1
    isBody = body.scrollTop > 0
    body.scrollTop -= 1
    return isBody ? body : html
}

export const isAtBottom = (distance = 0, el) => Math.abs(el.scrollHeight - el.scrollTop - el.offsetHeight) < distance
export const scrollTo = (el, toVal, duration = 0) => {
    el = el || getScrollEl()

    // if no duration, set scroll top immediately...
    if (duration <= 0) {
        el.scrollTop = toVal || 0
        return Promise.resolve()
    }

    // ...otherwise, animate it
    return new Promise(resolve => {
        toVal = Math.floor(toVal || 0)

        const diff = toVal - el.scrollTop
        const increment = Math.floor(diff / duration) * 10
        const isUp = increment < 0
        const updateScroll = () => {
            const scroll = Math.floor(el.scrollTop + increment)

            if (isUp) {
                el.scrollTop = Math.max(scroll, toVal)
            } else {
                el.scrollTop = Math.min(scroll, toVal)
            }

            if (el.scrollTop !== toVal) {
                window.requestAnimationFrame(updateScroll)
            } else {
                resolve()
            }
        }
        updateScroll()
    })
}

export const getDocumentHeight = () =>
    Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

export const getScrollTop = () =>
    window.pageYOffset !== undefined ?
    window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop
export const getScrollLeft = () =>
    window.pageXOffset !== undefined ?
    window.pageXOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollLeft

export const isWindowAtBottom = distance => getScrollTop() + innerHeight > getDocumentHeight() - distance