import { withProps } from 'recompose'

const addUserChannelPageAsProp = withProps(props => ({ channelPageUrl: `/channel/${props.username}`, ...props }))

export default addUserChannelPageAsProp
