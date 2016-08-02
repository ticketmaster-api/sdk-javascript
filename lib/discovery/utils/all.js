import getData from './getData';

export default (apikey, type) => (options = {}) => {
  options.apikey = apikey;

  const params = {
    url: ['discovery/v2', type],
    qs: options
  };

  return getData(params);
};
