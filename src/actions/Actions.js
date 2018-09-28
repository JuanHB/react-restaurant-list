import * as types from './Types';

export const storeRestaurantInitialListLoad = list => ({
  type: types.STORE_RESTAURANT_INITIAL_LIST_LOAD,
  payload: list
});

export const updateRestaurantFilteredList = list => ({
  type: types.UPDATE_RESTAURANT_FILTERED_LIST,
  payload: list
});

export const updateSelectedSortOption = sortBy => ({
  type: types.UPDATE_SELECTED_SORT_OPTION,
  payload: sortBy
});