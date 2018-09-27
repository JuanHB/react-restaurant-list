import React from 'react';
import * as actions from 'src/actions/Actions';
import {connect} from 'react-redux';
import RestaurantService from 'src/services/RestaurantService'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import List from './List/List'

class RestaurantListContainer extends React.Component {

  componentDidMount() {

    if(!this.props.restaurant.sourceList.length){
      const restaurantService = new RestaurantService();
      restaurantService.getAll()
        .then(restaurants => this.props.storeRestaurantInitialListLoad(restaurants));
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

export default connect(mapStateToProps, actions)(RestaurantListContainer);