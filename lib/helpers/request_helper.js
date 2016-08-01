import Promise from 'bluebird';
import request from 'request';

const requestAsync = Promise.promisify(request.defaults({
  headers: {
    'Accept': 'application/json'
  },
  withCredentials: false,
  timeout: 30000
}));

export default requestAsync;
