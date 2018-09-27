import * as types from 'src/actions/Types';

let initialState = () => {
  return {
    sourceList: [],
    filteredList: []
  }
};

const restaurantReducer = (
  state = initialState(),
  action = null
) => {

  const { payload } = action;
  switch (action.type) {
    case types.STORE_RESTAURANT_INITIAL_LIST_LOAD: {
      return {...state, sourceList: payload, filteredList: payload };
    }
    case types.UPDATE_RESTAURANT_FILTERED_LIST: {
      return {...state, filteredList: payload };
    }
    default:
      return { ...state } ;

  }
};

export default restaurantReducer;