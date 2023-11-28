import { legacy_createStore, combineReducers } from "redux";
// import reducer from "./reducer.ts"
import ArrReducer from "./ArrState/reducer"
import NumReducer from "./NumState/reducer"

const reducers = combineReducers({
  ArrReducer,
  NumReducer
})

const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
