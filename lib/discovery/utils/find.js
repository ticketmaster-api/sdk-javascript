import getData from './getData';

export default (apikey, type) => (...path) => {
  const params = {
    path: ['discovery/v2', type, ...path],
    qs: {apikey}
  };

  return getData(params);
};
