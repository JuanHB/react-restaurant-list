import * as types from 'src/actions/Types';

let initialState = () => (
  {
    sourceList: [],
    filteredList: [],
    loadedRestaurant: null
  }
);

const restaurantReducer = (
  state = initialState(),
  action = null
) => {

  const { list, restaurant } = action;
  switch (action.type) {
    case types.STORE_RESTAURANT_INITIAL_LIST_LOAD:

      const distinctList = list.filter((toFilter, index, self) =>
        index === self.findIndex(toCompare => toFilter.id === toCompare.id)
      );
      return { ...state, sourceList: distinctList, filteredList: distinctList };

    case types.UPDATE_RESTAURANT_FILTERED_LIST:
      return { ...state, filteredList: list };

    case types.STORE_LOADED_RESTAURANT_DETAILS:
      return { ...state, loadedRestaurant: restaurant };

    case types.CLEARS_LOADED_RESTAURANT_DETAILS:
      return { ...state, loadedRestaurant: null };

    default:
      return { ...state };

  }
};

export default restaurantReducer;