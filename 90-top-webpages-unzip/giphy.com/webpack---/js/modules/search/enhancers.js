import { withProps } from 'recompose'

export const AddIsUsernameSearchAsProp = withProps(props => {
    const user = props.search && props.search.user
    return {
        ...props,
        isUsernameSearch: Boolean(user && user.username),
    }
})
export const AddIsGifSearchAsProp = withProps(props => ({
    ...props,
    isGifSearch: props.searchType === 'gif',
}))
