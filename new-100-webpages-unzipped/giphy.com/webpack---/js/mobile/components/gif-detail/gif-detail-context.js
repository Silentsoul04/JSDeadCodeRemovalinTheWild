import produce from 'immer'
import {
    createContext,
    PureComponent
} from 'react'

export const GifDetailContext = createContext({})

export const withGifDetailContext = WrappedComponent => props => ( <
        GifDetailContext.Consumer > {
            context => < WrappedComponent { ...context
            } { ...props
            }
            />}</GifDetailContext.Consumer >
        )

        const spread = produce(Object.assign)

        export const Modals = {
            SHARE: 'share',
            INFO: 'info',
        }

        export const withGifDetailContextManager = WrappedComponent =>
            class GifDetailContextManager extends PureComponent {
                state = {
                    modal: '',
                }
                value = {}
                // show modals
                setModal = modal => this.setState({
                    modal
                })
                toggleFavorite = () => {
                    const {
                        toggleFavorite,
                        gif
                    } = this.props
                    toggleFavorite(gif.id)
                }
                api = {
                    setModal: this.setModal,
                    toggleFavorite: this.toggleFavorite
                }
                render() {
                    const {
                        gif
                    } = this.props
                    // value === this.value, if nothing changes
                    const value = spread(this.value, { ...this.state,
                        ...this.api,
                        gif
                    })
                    this.value = value
                    return ( <
                        GifDetailContext.Provider value = {
                            value
                        } >
                        <
                        WrappedComponent { ...this.props
                        }
                        /> <
                        /GifDetailContext.Provider>
                    )
                }
            }