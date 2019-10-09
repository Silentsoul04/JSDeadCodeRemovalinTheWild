import qs from 'query-string'
import appendQuery from 'append-query'

const appendNextUrl = url => {
    const { next = window.LOGIN_NEXT } = qs.parse(location.search)
    return appendQuery(url, { next })
}

export default appendNextUrl
