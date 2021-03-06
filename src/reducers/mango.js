import { INDEX_FILES_BY_DATE_SUCCESS } from '../constants/actionTypes'

// indexing using cozy-stack mango
export const mangoIndexByDate = (state = null, action) => {
  switch (action.type) {
    case INDEX_FILES_BY_DATE_SUCCESS:
      return action.mangoIndexByDate
    default:
      return state
  }
}
