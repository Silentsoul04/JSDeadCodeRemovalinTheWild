import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import EditButton from 'shared/components/edit-button/edit-button'
import {
    connect
} from 'react-redux'
import * as selectors from 'shared/redux/reducers'
import {
    setEditModeChannels
} from 'shared/redux/edit-mode-channels'
import {
    updateEditMode,
    toggleEditMode
} from 'shared/redux/edit-mode'

export default connect(
    state => ({
        editMode: selectors.getEditMode(state),
        user: selectors.getUser(state),
    }), {
        setEditModeChannels,
        updateEditMode,
        toggleEditMode
    },
)(EditButton)