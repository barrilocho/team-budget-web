import types from '../../models/types';

const login = (id, name) => ({
  type: types.login,
  payload: {
    id,
    name,
  },
});

const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(email, password));
    }, 3500);
  };
};

const SignUpWithEmailPasswordRequest = (name, email, password) => {
  return (dispatch) => {
    /// mandar el api
  };
};

export { startLoginEmailPassword, login, SignUpWithEmailPasswordRequest };
