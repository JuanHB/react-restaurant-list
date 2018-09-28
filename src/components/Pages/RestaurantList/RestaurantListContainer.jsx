import React from 'react';
import * as actions from 'src/actions/Actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import RestaurantService from 'src/services/RestaurantService'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import List from './List/List'
import {ExtractCategories, SortList} from 'src/helpers/FilterHelpers';

class RestaurantListContainer extends React.Component {

  componentDidMount() {
    if(!this.props.restaurant.sourceList.length){
      const restaurantService = new RestaurantService();
      restaurantService.getAll()
        .then( res => {

          // stores the returned restaurants list on the reducer,
          // the reducer will remove duplicated items
          this.props.storeRestaurantInitialListLoad(res);

          const
            { location, restaurant, filter } = this.props,
            { sourceList } = restaurant,
            // parsing the query params
            queryParams = queryString.parse(location.search),
            // sets the selected option for sorting
            sortBy = queryParams.sortBy || filter.sort.selected,
            // sorts the list
            sorted = SortList({ list: sourceList, sortBy }),
            // extracts all categories from the list
            categories =  ExtractCategories({ list: sourceList });


          this.props.updateFilterOptionsList('category', categories);

          // updates the selected option for the sort filter
          this.props.updateSelectedFilterOption('sort', sortBy);
          // stores the sorted list
          this.props.updateRestaurantFilteredList(sorted);
        });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Filter />
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  filter: state.filter
});

export default withRouter(connect(mapStateToProps, actions)(RestaurantListContainer));