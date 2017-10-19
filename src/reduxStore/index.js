import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './config/';
import { replaceNotes } from './config/notes';
import { updateWhiteboards } from './config/whiteboards';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

store.dispatch(replaceNotes());
store.dispatch(updateWhiteboards());

console.log('Redux index');

export default store;
