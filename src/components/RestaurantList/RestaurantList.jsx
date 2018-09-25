import React from 'react';
import * as actions from 'src/actions/Actions';
import { connect } from 'react-redux';
import RestaurantService from 'src/services/restaurant.service';
import RestaurantCard from './RestaurantCard';

class RestaurantList extends React.Component {

  componentDidMount() {
    RestaurantService.getAll()
      .then(res => this.props.storeRestaurantList(res.data));
  }

  renderList = () => this.props.restaurant.list.map(rest => {
    return (
      <RestaurantCard
        key={ rest.id } { ...rest }
      />
    );
  });

  render() {
    return (
      <div>
        <div> HEADER </div>
        <div>
          <ul> {this.renderList()} </ul>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant,
  }
};

export default connect(mapStateToProps, actions)(RestaurantList);