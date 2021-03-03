import { combineReducers, createStore } from 'redux'
import gioHangReducer from './reducers/gioHangReducer'


const rootReducer = combineReducers({
  gioHangReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store