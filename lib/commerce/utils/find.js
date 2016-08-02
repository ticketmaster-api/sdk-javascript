import getData from './getData';

export default (apikey, type) => (...path) => {
  const params = {
    url: ['commerce/v2', type, ...path],
    qs: {apikey}
  };

  return getData(params);
};
