import getData from '../../../helpers/result_helper';

export default (apikey, type) => (...path) => {
  const params = {
    url: ['discovery/v1', type, ...path],
    qs: {apikey}
  };

  return getData(params);
};
