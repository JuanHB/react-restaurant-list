import axios from 'axios';

class HttpService {

  instance;

  constructor (){

    // the singleton pattern, if there is a instance already, returns it
    if(this.instance){
      return this.instance;
    }

    // creating the axios instance and setting the default parameters
    this.client = axios.create({
      baseURL: process.env.API_URL
    });

    // setting the api auth token header for all requests
    const token = this.constructor.storedToken;
    if(token){
      this.client.defaults.headers.common['token'] = token;
    }

    // intercepts 401 errors to create new api auth tokens when needed
    this.client.interceptors.response.use(null, error => {
      if(error.response.status === 401 && error.config){
        return this.requestNewToken()
          .then(token => {
            error.config.headers.token = token;
            this.client.defaults.headers.common['token'] = token;
            return this.client(error.config);
          });
      }
    });
    this.instance = this;
  }

  get(url){
    return this.client.get(url);
  }

  requestNewToken(){
    return this.get('/auth')
      .then(res => this.constructor.saveToken(res.data.token));
  }

  static saveToken(token){
    localStorage.setItem('token', token);
    return Promise.resolve(token);
  }

  static get storedToken() {
    return localStorage.getItem('token');
  }

}


export default HttpService;