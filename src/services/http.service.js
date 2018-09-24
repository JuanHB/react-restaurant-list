import axios from 'axios';

const HttpService = {

  get(url){
    return axios.get(this.makeUrl(url));
  },

  makeUrl(url) {
    return [process.env.API_URL, url].join('');
  }

};

export default HttpService;