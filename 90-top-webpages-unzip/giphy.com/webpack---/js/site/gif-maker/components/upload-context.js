import { createContext } from 'react'
export const UploadContext = createContext({})

export const withUploadContext = WrappedComponent => props => (
    <UploadContext.Consumer>{context => <WrappedComponent {...context} {...props} />}</UploadContext.Consumer>
)
