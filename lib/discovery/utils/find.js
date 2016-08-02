import getData from './getData';

export default (apikey, type) => (...path) => {
  const params = {
    url: ['discovery/v2', type, ...path],
    qs: {apikey}
  };

  return getData(params);
};
