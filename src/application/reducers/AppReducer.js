import types from '../../models/types';

const initialState = {
  loading: false,
  user: {},
  token: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    default:
      return { ...state };
  }
};

export default AppReducer;
