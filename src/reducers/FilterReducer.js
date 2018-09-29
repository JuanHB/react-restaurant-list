import * as types from 'src/actions/Types';

let initialState = () => (
  {
    sort: {
      selected: 'name-asc',
      options: [
        { label: 'Name A-Z', value: 'name-asc' },
        { label: 'Name Z-A', value: 'name-desc' },
        { label: 'Rating Ascending', value: 'rating-asc' },
        { label: 'Rating Descending', value: 'rating-desc' },
      ],
    },
    category: {
      options: [],
      selected: ''
    },
  }
);

const filterReducer = (
  state = initialState(),
  action = null
) => {

  let newState;
  const { filter, selected, options } = action;

  switch (action.type) {

    case types.UPDATE_SELECTED_FILTER_OPTION:
      newState = {...state};
      newState[filter].selected = selected;
      return newState;

    case types.UPDATE_FILTER_OPTIONS_LIST:
      newState = {...state};
      newState[filter].options = options;
      return newState;

    default:
      return { ...state } ;
  }
};

export default filterReducer;