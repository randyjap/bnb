import { fetchBenches } from './bench_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = filter => (dispatch, getState) => {
  dispatch(changeFilter(filter));
  return fetchBenches(getState().filters)(dispatch);
};

export const changeFilter = filter => ({
  type: UPDATE_FILTER,
  filter
});
