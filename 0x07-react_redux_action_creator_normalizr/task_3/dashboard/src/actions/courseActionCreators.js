import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

export function selectCourse (index) {
  return {
    type: SELECT_COURSE,
    payload: { index }
  }
}

export function unselectCourse (index) {
  return {
    type: UNSELECT_COURSE,
    payload: { index }
  }
}
