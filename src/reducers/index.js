import { combineReducers } from 'redux';
import restaurantReducer from './RestaurantReducer';
import filterReducer from './FilterReducer';

export default combineReducers({
  restaurant: restaurantReducer,
  filter: filterReducer
});