import { useMemo } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/authReducer';

let rootStore;
const reducers = combineReducers({
  auth: authReducer,
});

function initStore(initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = (preloadedState) => {
  let store = rootStore ?? initStore(preloadedState);

  if (preloadedState && rootStore) {
    store = initStore({
      ...rootStore.getState(),
      ...preloadedState,
    });

    rootStore = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return store;
  // Create the store once in the client
  if (!store) rootStore = store;
  return store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
