import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

let _defaultState = {
  bounds: {}
};

const filterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
