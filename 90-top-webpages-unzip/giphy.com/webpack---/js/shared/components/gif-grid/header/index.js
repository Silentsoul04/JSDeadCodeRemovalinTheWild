import React from 'react' // eslint-disable-line no-unused-vars
import css from './header.css'
import AutoPlay from 'shared/containers/auto-play'
/**
 * Header for grids
 */
export default ({ title }) => (
    <div className={css.header}>
        <span className={css.label}>{title}</span>
        <div className={css.autoplay}>
            <span className={css.autoplayLabel}>Auto Play</span>
            <AutoPlay />
        </div>
    </div>
)
