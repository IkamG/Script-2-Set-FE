import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/ElementFilters'
const visibilityFilter = (state = SHOW_ALL, action: { type: any; filter: any }) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter