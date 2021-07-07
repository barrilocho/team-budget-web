import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UiReducer from './UiReducer';
import AppReducer from './AppReducer';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  rootReducer,
  AuthReducer,
  AppReducer,
  UiReducer,
});
