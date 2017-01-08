import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const fetchBenches = signupInfo => dispatch => {
  return BenchAPIUtil.fetchBenches()
  .then(benches => dispatch(receiveBenches(benches)));
};

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

window.fetchBenches = fetchBenches;
