import {
  applyMiddleware,
  createStore,
} from 'redux';
//
// // import thunk from 'redux-thunk';
// import reducer from './reducers';
// import { loadState } from './localStorage';
//
// // const persistedState = loadState();
//
// function configureStore(initialState = {}) {
//   const theStore = createStore(
//     () => {},
//     // initialState,
//     reducer,
//     // applyMiddleware(thunk),
//     // persistedState,
//   );
//   // theStore.subscribe(() => {
//   // saveState(theStore);
//   // });
//   return theStore;
// }
//
const initialState={};
const store = createStore(() =>{
  return initialState;
});
  // configureStore();

export default store;
