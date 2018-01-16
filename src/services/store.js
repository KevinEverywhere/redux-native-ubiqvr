import {
  applyMiddleware,
  createStore,
} from 'redux';

// import thunk from 'redux-thunk';
// import reducer from './reducers';
// import { loadState, saveState } from './localStorage';
//
// const persistedState = loadState();

function configureStore(initialState = {}) {
  const theStore = createStore(
    () => {},
    initialState,
    // applyMiddleware(thunk),
    // persistedState,
  );
  theStore.subscribe(() => {
    // saveState(theStore);
  });
  return theStore;
}

const store = configureStore();

export default store;
