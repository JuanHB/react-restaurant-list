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
      .then(response => {
        // removing duplicated entries
        return response.data.data.filter((toFilter, index, self) =>
          index === self.findIndex(toCompare=> toFilter.id === toCompare.id)
        );
      });
  }

  getById() {
    return this.http.get(`/restaurant/${id}`);
  }
}

export default RestaurantService;