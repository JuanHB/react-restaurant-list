import HttpService from './HttpService';

class RestaurantService {

  instance;

  constructor(){

    // the singleton pattern
    if(this.instance){
      return this.instance;
    }
    this.http = new HttpService();
  }

  getAll() {
    return this.http.get('/restaurants')
      .then(res => res.data.data);
  }

  getById() {
    return this.http.get(`/restaurant/${id}`);
  }
}

export default RestaurantService;