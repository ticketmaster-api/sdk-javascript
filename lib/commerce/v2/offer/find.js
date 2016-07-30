import getData from '../../../helpers/result_helper';

export default (apiKey) => (eventId) => {
  const params = {
    url: [
      'commerce/v2',
      'events',
      eventId,
      'offers'
    ],
    qs: {apikey: apiKey}
  };

  return getData(params);
};
