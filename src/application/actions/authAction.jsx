import types from '../../models/types';

const login = (id, name) => ({
  type: types.login,
  payload: {
    id,
    name,
  },
});

export default login;
