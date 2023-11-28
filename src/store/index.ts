import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
// import reducer from "./reducer.ts"
import ArrReducer from "./ArrState/reducer"
import NumReducer from "./NumState/reducer"

const reducers = combineReducers({
  ArrReducer,
  NumReducer
})

// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 扩展增强 利用redux-thunk关联store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))
export default store
