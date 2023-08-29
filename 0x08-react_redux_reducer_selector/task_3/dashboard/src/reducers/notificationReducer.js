import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes'

const initialState = {
    notification: [],
    filter: "DEFAULT"
};

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            
            const notificationStatus =  action.data.map((notification) => ({
               ...notification,
                isRead: false
            }));
            return {
                ...state,
                notificationStatus
            };
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notification.map((notification, index) => 
                    index === action.index ? { ...notification, isRead: true } : notification
                ),
            };
        case SET_TYPE_FILTER: 
        if (action.filter === 'DEFAULT' || action.filter === 'URGENT') {
            return {
                ...state,
                filter: action.filter,
            };
        }
        return state;
        default:
            state;
    }
};

export default notificationReducer;
