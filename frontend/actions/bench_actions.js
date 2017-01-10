import * as APIUtil from '../util/bench_api_util'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const fetchBenches = filters => dispatch => (
  APIUtil.fetchBenches(filters)
    .then(benches => dispatch(receiveBenches(benches)))
);

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});
