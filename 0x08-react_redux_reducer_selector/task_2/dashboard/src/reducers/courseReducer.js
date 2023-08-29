import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

const instialState = [];

const reducer = (state = instialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const selectoinCourses = action.data.map(course => ({
                ...course,
                isSelected: false,
            }));
            return selectoinCourses
        case SELECT_COURSE:
            return state.map((course, index) => 
                index === action.index ? { ...course, isSelected: true } : course               
            );
        case UNSELECT_COURSE:
            return state.map((course, index) =>
                index === action.index ? { ...course, isSelected: false } : course
            );    
        default: 
            return state;
    }
};

export default reducer;