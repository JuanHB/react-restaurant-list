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

  getById(id) {
    return this.http.get(`/restaurants/${id}`)
      .then(res => res.data);
  }
}

export default RestaurantService;
