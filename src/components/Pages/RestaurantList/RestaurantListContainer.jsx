import React from 'react';
import * as actions from 'src/actions/Actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import RestaurantService from 'src/services/RestaurantService'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import List from './List/List'
import { ExtractCategories, FilterByCategory, SortList } from 'src/helpers/FilterHelpers';

class RestaurantListContainer extends React.Component {

  componentDidMount() {
    if (!this.props.restaurant.sourceList.length) {
      const restaurantService = new RestaurantService();
      restaurantService.getAll()
        .then(res => {

          // stores the returned restaurants list on the reducer,
          // the reducer will remove duplicated items
          this.props.storeRestaurantInitialListLoad(res);
          const { location, restaurant, filter } = this.props;
          const { sourceList } = restaurant;
          // parsing the query params
          const queryParams = queryString.parse(location.search);
          // gets the selected option for sorting
          const sortBy = queryParams.sortBy || filter.sort.selected;
          // gets the selected category for filtering
          let selectedCategory = queryParams.category || filter.category.selected;
          // extracts all categories from the list
          const categories = ExtractCategories({ list: sourceList });
          // checks if the loaded selected category is present in the current
          // category list, if no, set it back to empty
          if(selectedCategory){
            const findSelectedCategory = categories.findIndex(cat => cat.value === selectedCategory) !== -1;
            selectedCategory = findSelectedCategory ? selectedCategory : '';
            this.props.history.push({
              search: queryString.stringify({
                ...queryParams, category: selectedCategory
              })
            });
          }
          // filters by the selected category
          const filteredByCategory = FilterByCategory({ list: sourceList, category: selectedCategory });
          // sorts the list
          const sorted = SortList({ list: filteredByCategory, sortBy });
          // updates the categories options available for filter
          this.props.updateFilterOptionsList('category', categories);
          // updates the selected option for the sort filter
          this.props.updateSelectedFilterOption('sort', sortBy);
          this.props.updateSelectedFilterOption('category', selectedCategory);
          // stores the sorted list
          this.props.updateRestaurantFilteredList(sorted);
        });
    }
  }

  render() {
    const listLoaded = !!this.props.restaurant.sourceList.length;
    return listLoaded ? (
      <div>
        <Header/>
        <Filter/>
        <List/>
      </div>
    ) : <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  filter: state.filter
});

export default withRouter(connect(mapStateToProps, actions)(RestaurantListContainer));