import * as types from 'src/actions/Types';

let initialState = () => {
  return {
    sortOptions: [
      { label: 'Name A-Z', value: 'name-asc' },
      { label: 'Name Z-A', value: 'name-desc' },
      { label: 'Rating Ascending', value: 'rating-asc' },
      { label: 'Rating Descending', value: 'rating-desc' },
    ],
    sortBy: 'name-asc'
  }
};

const filterReducer = (
  state = initialState(),
  action = null
) => {

  const { payload } = action;
  switch (action.type) {
    case types.UPDATE_SELECTED_SORT_OPTION: {
      return { ...state, sortBy: payload };
    }
    default:
      return { ...state } ;
  }
};

export default filterReducer;