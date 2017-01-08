export const fetchBenches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/benches'
  })
);

export const createBench = (benchData) => (
  $.ajax({
    method: 'POST',
    url: '/api/benches',
    data: benchData
  })
);
