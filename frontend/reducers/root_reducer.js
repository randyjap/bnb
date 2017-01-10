import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  benches: benchesReducer,
  filters: filterReducer
});

export default rootReducer;
