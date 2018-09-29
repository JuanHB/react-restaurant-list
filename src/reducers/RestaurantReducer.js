import * as types from 'src/actions/Types';

let initialState = () => (
  {
    sourceList: [],
    filteredList: []
  }
);

const restaurantReducer = (
  state = initialState(),
  action = null
) => {

  const { list } = action;
  switch (action.type) {
    case types.STORE_RESTAURANT_INITIAL_LIST_LOAD:

      const distinctList = list.filter((toFilter, index, self) =>
        index === self.findIndex(toCompare => toFilter.id === toCompare.id)
      );
      return {...state, sourceList: distinctList, filteredList: distinctList };

    case types.UPDATE_RESTAURANT_FILTERED_LIST:
      return {...state, filteredList: list };

    default:
      return { ...state } ;

  }
};

export default restaurantReducer;