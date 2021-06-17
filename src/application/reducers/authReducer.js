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
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.name,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};

export default authReducer;
