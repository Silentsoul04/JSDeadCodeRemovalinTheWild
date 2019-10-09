import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import React from 'react'
import css from './grid-type.css'

const { func, string } = PropTypes

const onViewTypeClick = (e, nextGridType, onGridTypeClick) => {
    window.history.replaceState({}, nextGridType, `?view=${nextGridType}`)

    e.preventDefault()
    e.stopPropagation()
    onGridTypeClick(nextGridType)
}

export default class GridType extends React.Component {
    static propTypes = {
        gridType: string,
        onGridTypeClick: func,
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.gridType !== this.props.gridType
    }
    render() {
        const { gridType, onGridTypeClick } = this.props
        return (
            <div className={css.iconContainer}>
                <a
                    className={`${css.grid} ${css[gridType === 'grid' ? 'iconActive' : 'iconInactive']}`}
                    href="?view=grid"
                    onClick={e => onViewTypeClick(e, 'grid', onGridTypeClick)}
                />
                <a
                    className={`${css.feed} ${css[gridType === 'feed' ? 'iconActive' : 'iconInactive']}`}
                    href="?view=feed"
                    onClick={e => onViewTypeClick(e, 'feed', onGridTypeClick)}
                />
            </div>
        )
    }
}
