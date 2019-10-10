import appendQuery from 'append-query'
import cookie from 'cookie'

const getPostHeaders = () => {
    const {
        csrftoken
    } = cookie.parse(document.cookie)
    return {
        Accept: 'application/json',
        Authorization: 'ApiKey giphy-website:e0771ed7b244ec9c942bea646ad08e6bf514f51a',
        'X-CSRFToken': csrftoken,
        'X-Requested-With': 'XMLHttpRequest',
    }
}

const toDataString = json => appendQuery('', json).substr(1)

export const GET = {
    method: 'get',
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: 'same-origin',
}

export const POST = (body, isJSON) => {
    const headers = getPostHeaders()
    if (isJSON) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    }
    return {
        method: 'post',
        body: isJSON ? toDataString(body) : body,
        headers,
        credentials: 'same-origin',
    }
}
export const PATCH = (body, isJSON) => {
    const headers = getPostHeaders()
    if (isJSON) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    }
    return {
        method: 'PATCH',
        body: isJSON ? toDataString(body) : body,
        headers,
        credentials: 'same-origin',
    }
}
export const DELETE = (body, isJSON) => {
    const headers = getPostHeaders()
    if (isJSON) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    }
    return {
        method: 'delete',
        body: isJSON ? toDataString(body) : body,
        headers,
        credentials: 'same-origin',
    }
}