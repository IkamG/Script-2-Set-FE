import { combineReducers } from 'redux'
import elements from './elements'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  elements,
  visibilityFilter
})

export default rootReducer
