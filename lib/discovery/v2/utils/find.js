import getData from '../../../helpers/result_helper';

export default (apiKey, type) => (...path) => {
  const params = {
    url: ['discovery/v2', type, ...path],
    qs: {apikey: apiKey}
  };

  return getData(params);
};
