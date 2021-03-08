import { combineReducers, createStore } from "redux";
import { gameReducer } from "./redux/reducers/BaiTapGameXucXacReducer";

const rootReducer = combineReducers({
  gameReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
