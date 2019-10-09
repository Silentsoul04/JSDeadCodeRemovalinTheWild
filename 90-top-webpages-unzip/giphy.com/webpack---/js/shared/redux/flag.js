import { flag } from '../api/index'

export default function flagGif(gifId, user, body) {
    const loginUrl = `/login?next=${location.pathname}&ref=flag`

    if (!user.loggedIn) {
        location.href = loginUrl
        return Promise.resolve()
    }

    return flag(gifId, body).then(res => res.meta.status === 200)
}
