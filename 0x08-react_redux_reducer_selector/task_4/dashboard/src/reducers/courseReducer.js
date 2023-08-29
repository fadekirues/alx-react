import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses'; // Import the normalization function

const initialState = Map({
    entities: Map(),
    result: [],
  });  

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data); 
            return state.mergeIn(['entities'], fromJS(normalizedData.entities.courses))
                        .set('result', fromJS(normalizedData.result));
          case SELECT_COURSE:
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);
          case UNSELECT_COURSE:
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);
          default:
            return state;
        }
};

export default reducer;