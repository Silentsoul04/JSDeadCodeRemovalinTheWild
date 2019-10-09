import css from './edit-button.css'

const EditButton = ({ gif, user, toggleEditMode, updateEditMode }) => {
    if (!user.isStaff) return null

    return (
        <div
            className={css.edit}
            onClick={() => {
                updateEditMode(gif)
                toggleEditMode(true)
            }}
        />
    )
}

export default EditButton
