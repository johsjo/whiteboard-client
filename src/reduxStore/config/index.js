import { combineReducers } from 'redux';
// import notes from './notes';
// import whiteboards from './whiteboards';

import reducerNotes from './notes';
import reducerWhiteboards from './whiteboards';

const reducer = combineReducers({
  reducerNotes,
  reducerWhiteboards,
});

export default reducer;
