import React from 'react' // eslint-disable-line no-unused-vars
import css from './privacy.css'

/**
 * Shared - Privacy: Displays a privacy message to users
 * viewing their own private gifs or channels
 */

const Privacy = ({
    title = 'Your page is private.',
    subTitle = 'To make this GIF shareable, click the pencil icon to edit its privacy settings.',
    editPath,
}) => (
    <div className={css.container}>
        <i className={css.lockIcon} />
        <div className={css.textContainer}>
            <h4 className={css.title}>{title}</h4>
            <div className={css.subTitle}>
                <p>{subTitle}</p>
                {editPath && (
                    <a className={css.editContainer} href={`/${editPath}`}>
                        <p>Edit your privacy</p>
                        <i className={css.editIcon} />
                    </a>
                )}
            </div>
        </div>
    </div>
)

export default Privacy
