import types from '../../models/types';

const initialState = {
  loading: false,
  msgError: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
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

export default uiReducer;
