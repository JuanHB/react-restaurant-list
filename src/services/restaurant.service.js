import HttpServer from './http.service';

const RestaurantService = {
  getAll: () => HttpServer.get('/restaurant'),
  getById: id => HttpServer.get('/restaurant/'+id)
};

export default RestaurantService;