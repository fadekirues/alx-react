import { Map } from 'immutable';
import {
    DISPLAY_NOTIFACTION_DRAWER,
    HIDE_NOTIFACTION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/uiActionTypes'

const inState  = Map({
    isNotificationDrawerVisible : false,
    isUserLoggedIn: false,
    user: Map(),
})

const uiReducer = (state = inState, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFACTION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFACTION_DRAWER: 
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true)
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false)
        case LOGOUT:
            return state.set('isUserLoggedIn', false)
        default:
            return state;  
    }
};

export default uiReducer;