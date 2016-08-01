import getData from '../../../helpers/result_helper';

export default (apikey, type) => (options = {}) => {
  options.apikey = apikey;

  const params = {
    url: ['commerce/v2', type],
    qs: options
  };

  return getData(params);
};
