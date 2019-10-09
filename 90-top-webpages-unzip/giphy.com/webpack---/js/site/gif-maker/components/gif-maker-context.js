import { createContext } from 'react'
export const GifMakerContext = createContext({})

export const withGifMakerContext = WrappedComponent => props => (
    <GifMakerContext.Consumer>{context => <WrappedComponent {...context} {...props} />}</GifMakerContext.Consumer>
)
