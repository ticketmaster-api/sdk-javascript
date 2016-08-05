import getData from './getData';

export default (api, apikey, type, ...path) => (eventId) => {
  const params = {
    path: [api, type, eventId, ...path],
    qs: {apikey}
  };

  return getData(params);
};
