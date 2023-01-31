import { combineReducers } from 'redux'

import filtersReduces from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  filters: filtersReduces,
  pizzas: pizzasReducer
})

export default rootReducer