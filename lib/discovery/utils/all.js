import getData from './getData';

export default (apikey, type) => (qs = {}) => {
  qs.apikey = apikey;

  const params = {
    path: ['discovery/v2', type],
    qs: qs
  };

  return getData(params);
};
