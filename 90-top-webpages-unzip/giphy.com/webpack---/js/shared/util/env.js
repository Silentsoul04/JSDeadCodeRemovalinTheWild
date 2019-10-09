export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const IS_MAC = navigator.platform.toUpperCase().indexOf('MAC') >= 0
