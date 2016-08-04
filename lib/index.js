import discovery from './discovery/index';
import commerce from './commerce/index';

const API = (apikey) => {
  if (apikey === 'YOUR_KEY_HERE') {
    return console.log('Please apply for your key at https://live-livenation.devportal.apigee.com/user/register');
  }

  return {
    apikey,
    discovery: discovery(apikey),
    commerce: commerce(apikey)
  };
};

export default API;
