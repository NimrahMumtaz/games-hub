import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'db92861c2f81404d938a669bb3f9929b',
  },
});
