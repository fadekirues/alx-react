import {
    DISPLAY_NOTIFACTION_DRAWER,
    HIDE_NOTIFACTION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/uiActionTypes'

const inState  = {
    isNotificationDrawerVisible : false,
    isUserLoggedIn: false,
    user: {}
}

const uiReducer = (state = inState, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFACTION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true,
            };
        case HIDE_NOTIFACTION_DRAWER: 
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false
            }
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        default:
            return state;  
    }
};

export default uiReducer;