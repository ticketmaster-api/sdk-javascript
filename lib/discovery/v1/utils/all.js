import getData from '../../../helpers/result_helper';

export default (apikey, type) => (options = {}) => {
  options.apikey = apikey;

  return getData({
    url: ['discovery/v1', type],
    qs: options
  });
};
