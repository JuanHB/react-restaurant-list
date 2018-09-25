import React from 'react';
import * as actions from 'src/actions/Actions';
import { connect } from 'react-redux';
import RestaurantService from 'src/services/restaurant.service';
import Header from './Header/Header'
import Filter from './Filter/Filter'
import List from './List/List'

class RestaurantListContainer extends React.Component {

  componentDidMount() {
    RestaurantService.getAll()
      .then(res => this.props.storeRestaurantList(res.data));
  }

  render () {
    return (
      <div>
        <Header/>
        <Filter/>
        <List />
      </div>
    );
  }
}

export default connect(null, actions)(RestaurantListContainer);