import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import React from 'react'
import css from './menu.css'

const {
    array,
    func,
    string
} = PropTypes

export default class Menu extends React.Component {
    static propTypes = {
        color: string.isRequired,
        items: array.isRequired,
        itemClick: func.isRequired,
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.items !== this.props.items
    }
    render() {
        const {
            items,
            itemClick,
            color
        } = this.props
        return ( <
            div className = {
                css.container
            } >
            <
            div className = {
                css.niblet
            }
            style = {
                {
                    color,
                    right: 75
                }
            }
            /> <
            div className = {
                css.backgroundWrapper
            } >
            <
            div className = {
                css.background
            }
            style = {
                {
                    backgroundColor: color
                }
            }
            /> <
            /div> <
            div className = {
                css.wrapper
            } > {
                items.map(({
                    path,
                    label
                }, index) => ( <
                    div className = {
                        css.userMenuItem
                    }
                    key = {
                        index
                    }
                    onClick = {
                        () => itemClick(path)
                    } > {
                        label
                    } <
                    /div>
                ))
            } <
            /div> <
            /div>
        )
    }
}