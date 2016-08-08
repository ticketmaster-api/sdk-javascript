import v1 from './v1';
import v2 from './v2';

export default (apiKey) => ({
  v1: v1(apiKey),
  v2: v2(apiKey)
});
