import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import appReducer from './appReducer';

const reducer = combineReducers({
  // app: appReducer,
  routing: routerReducer,
});

export default reducer;
