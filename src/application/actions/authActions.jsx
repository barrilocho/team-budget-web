import Api from '../../infrastructure/api';
import types from '../../models/types';

const startLoginEmailPassword = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await Api.auth.login(username, password);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: error,
      });
    }
  };
};

const SignUpWithEmailPasswordRequest = () => {
  return () => {
    /// mandar el api
  };
};

export { startLoginEmailPassword, SignUpWithEmailPasswordRequest };
