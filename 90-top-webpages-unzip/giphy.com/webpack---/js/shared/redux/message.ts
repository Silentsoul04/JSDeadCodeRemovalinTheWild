import { omitBy as _omitBy } from 'lodash'

export const MESSAGE = 'MESSAGE'
export const MESSAGE_RESET = 'MESSAGE_RESET'

export type SendMessageAction = (
    text: string,
    status?: string,
    statusKey?: string,
    delay?: number,
    closeCallback?: () => void,
    align?: string
) => MessageAction

type MessageAction = {
    type: string
    text?: string
    status?: string
    statusKey?: string
    delay?: number
    closeCallback?: () => void
    align?: string
}

export const message: SendMessageAction = (
    text: string,
    status: string,
    statusKey: string,
    delay: number,
    closeCallback: () => void,
    align: string
): MessageAction => ({
    type: MESSAGE,
    text,
    status,
    statusKey,
    delay,
    closeCallback,
    align,
})
export const messageReset = () => ({ type: MESSAGE_RESET })

export const getMessage = (state: any) => state

const filterAction = (obj: MessageAction) => _omitBy(obj, (val, prop) => prop === 'type' || val === undefined)

const defaults: MessageAction = {
    type: '',
    status: '',
    statusKey: '',
    text: '',
    delay: 5000,
}

export default (message = { ...defaults }, action: MessageAction = { type: '' }) => {
    switch (action.type) {
        case MESSAGE:
            return { ...message, ...filterAction(action) }
        case MESSAGE_RESET:
            return defaults
        default:
            return message
    }
}
