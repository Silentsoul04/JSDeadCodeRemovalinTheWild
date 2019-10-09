import PropTypes from 'prop-types'
import MenuFooter from './menu-footer'
import css from './menu.css'

const Menu = ({ items, color }) => (
    <div className={css.container}>
        <div className={css.niblet} style={{ color }} />
        <div className={css.backgroundWrapper}>
            <div className={css.background} style={{ backgroundColor: color }} />
        </div>
        <div className={css.wrapper}>
            {items.map(({ header, items }, index) => (
                <div className={css.item} key={index}>
                    {header.link ? (
                        <a className={css.title} href={header.link}>
                            {header.title} <i className={css.itemNiblet} />
                        </a>
                    ) : (
                        <span className={css.title}>{header.title}</span>
                    )}
                    <ul className={css.section}>
                        {items.map(({ title, link }, index) => (
                            <li key={index}>
                                <a href={link}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <MenuFooter />
    </div>
)

Menu.propTypes = {
    color: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default Menu
