import * as types from './Types';

export const storeRestaurantInitialListLoad = list => ({
  type: types.STORE_RESTAURANT_INITIAL_LIST_LOAD,
  list
});

export const updateRestaurantFilteredList = list => ({
  type: types.UPDATE_RESTAURANT_FILTERED_LIST,
  list
});

export const updateSelectedFilterOption = (filter, selected) => ({
  type: types.UPDATE_SELECTED_FILTER_OPTION,
  filter, selected
});

export const updateFilterOptionsList = (filter, options) => ({
  type: types.UPDATE_FILTER_OPTIONS_LIST,
  filter, options
});