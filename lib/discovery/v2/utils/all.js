import getData from '../../../helpers/result_helper';

export default (apiKey, type) => (options = {}) => {
  options.apikey = apiKey;
  const params = {
    url: ['discovery/v2', type],
    qs: options
  };

  return getData(params);
};
