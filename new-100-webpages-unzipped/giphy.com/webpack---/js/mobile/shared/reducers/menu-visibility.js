import {
    CATEGORY_MENU_VISIBLE,
    USER_MENU_VISIBLE
} from '../actions'

export default (
    menuVisibility = {
        categoryMenu: false,
        userMenu: false,
    },
    action = {},
) => {
    switch (action.type) {
        case CATEGORY_MENU_VISIBLE:
            {
                return {
                    categoryMenu: action.visible,
                    userMenu: false,
                }
            }
        case USER_MENU_VISIBLE:
            return {
                categoryMenu: false,
                userMenu: action.visible,
            }
        default:
            return menuVisibility
    }
}