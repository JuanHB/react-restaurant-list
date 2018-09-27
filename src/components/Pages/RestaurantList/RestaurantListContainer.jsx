import React from 'react';
import * as actions from 'src/actions/Actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import RestaurantService from 'src/services/RestaurantService'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import List from './List/List'
import { SortList } from 'src/helpers/FilterHelpers';

class RestaurantListContainer extends React.Component {

  componentDidMount() {

    if(!this.props.restaurant.sourceList.length){
      const restaurantService = new RestaurantService();
      restaurantService.getAll()
        .then( restaurants => {
          this.props.storeRestaurantInitialListLoad(restaurants);
          const { sortBy } = queryString.parse(this.props.location.search);
          if(sortBy) {
            const sorted = SortList({ list: restaurants, sortBy });
            this.props.updateRestaurantFilteredList(sorted);
          }
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
  restaurant: state.restaurant
});

export default withRouter(connect(mapStateToProps, actions)(RestaurantListContainer));