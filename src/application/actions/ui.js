import types from '../../models/types';

const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

const removeError = () => ({
  type: types.uiRemoveError,
});

export { setError, removeError };
