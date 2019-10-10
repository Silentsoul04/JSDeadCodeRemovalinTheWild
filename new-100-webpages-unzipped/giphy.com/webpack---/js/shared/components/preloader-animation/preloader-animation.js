import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import React, {
    Children
} from 'react'
import css from './preloader-animation.css'

export const Loader = ({
    isFetching = true,
    style = {}
}) => ( <
    li key = "loader"
    data - gif className = {
        isFetching ? css.loader : css.loaderHidden
    }
    style = {
        style
    }
    />
)

/**
 * iiHOC to render hijack and append a loader element if the prop `isFetching` is true
 */
export default () => superclass =>
    class PreloaderAnimationWrapper extends superclass {
        static propTypes = {
            isFetching: PropTypes.bool,
        }
        shouldComponentUpdate(nextProps, nextState) {
            if (this.props.isFetching !== nextProps.isFetching) {
                return true
            }
            return super.shouldComponentUpdate ? super.shouldComponentUpdate(nextProps, nextState) : false
        }
        render() {
            const {
                isFetching
            } = this.props,
                elementsTree = super.render(),
                children = [
                    ...Children.toArray(elementsTree.props.children), <
                    Loader key = {
                        `loader`
                    }
                    isFetching = {
                        isFetching
                    }
                    />,
                ]
            return React.cloneElement(elementsTree, { ...elementsTree.props
            }, children)
        }
    }