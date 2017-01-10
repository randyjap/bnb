export const fetchBenches = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    data
  });
};

export const createBench = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/benches',
    data
  });
};
