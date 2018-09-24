import { combineReducers } from 'redux';
import restaurantReducer from './RestaurantReducer';

export default combineReducers({
  restaurant: restaurantReducer,
});