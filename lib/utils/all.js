import getData from './getData';

export default (api, apikey, type) => (qs = {}) => {
  qs.apikey = apikey;

  const params = {
    path: [api, type],
    qs: qs
  };

  return getData(params);
};
