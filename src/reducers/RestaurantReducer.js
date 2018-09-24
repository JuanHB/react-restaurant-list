import * as types from 'src/actions/Types';

/**
 * This Reducer uses the Local Storage to save and load the configs
 * @param state
 * @param action
 * @returns {*}
 */

let initialState = () => {
  return {
    list: []
  }
};

const restaurantReducer = (
  state = initialState(),
  action = null
) => {

  const { payload } = action;
  console.log(payload)
  switch (action.type) {

    case types.STORE_RESTAURANT_LIST: {
      return {...state, list: payload };
    }

    default:
      return { ...state } ;

  }
};

export default restaurantReducer;