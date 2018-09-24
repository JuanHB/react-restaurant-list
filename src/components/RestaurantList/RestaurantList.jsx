import React from 'react';
import * as actions from 'src/actions/Actions';
import {connect} from 'react-redux';
import RestaurantService from 'src/services/restaurant.service';
import RestaurantCard from './RestaurantCard';

class RestaurantList extends React.Component {

  componentDidMount() {
    RestaurantService.getAll()
      .then(response => {
        this.props.storeRestaurantList(response.data);
        console.log(this.props.restaurant);
      });
  }

  renderList = () => this.props.restaurant.list.map(restaurant => <RestaurantCard key={ restaurant.id}/>);

  render() {
    return <ul> {this.renderList()} </ul>;
  }

}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant,
  }
};

export default connect(mapStateToProps, actions)(RestaurantList);