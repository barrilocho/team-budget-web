import types from '../../models/types';
/*
  {
    id: 'sdafsdadfdasf',
    name: 'Alejandro',
    token: 'asdfasdf'
  }
*/
// const initialState = {
//   id: '1234',
//   name: 'Alex',
//   token: 'asdfasdf',
// };

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        id: action.payload.id,
        name: action.payload.name,
      };
    case types.LOGIN_SUCCESS:
      return {
        response: action.payload,
      };
    case types.LOGIN__ERROR:
      return {
        error: action.payload,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};

export default authReducer;
