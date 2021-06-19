import Api from '../../infrastructure/api';
import types from '../../models/types';

const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await Api.auth.login(email, password);
      console.log('🚀 ~ file: authActions.jsx ~ line 8 ~ return ~ response', response);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: types.LOGIN__ERROR,
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
