import * as types from './Types';

export const storeRestaurantList = (list) => {
  return {
    type: types.STORE_RESTAURANT_LIST,
    payload: list
  }
};