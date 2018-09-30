import React from 'react';
import * as actions from 'src/actions/Actions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import RestaurantService from 'src/services/RestaurantService'
import Sections from './Sections/Sections';
import DescriptionCard from 'src/components/Shared/DescriptionCard/DescriptionCard';
import BackButton from 'src/components/Shared/BackButton/BackButton';
import './RestaurantDetailsContainer.scss';

class RestaurantDetailsContainer extends React.Component {

  componentDidMount() {
    // fetch the restaurant data and feeds the restaurant reducer
    const restaurantService = new RestaurantService();
    this.props.clearsLoadedRestaurantDetails();
    restaurantService.getById(this.props.match.params.id)
      .then(rest => this.props.storeLoadedRestaurantDetails(rest))
  }

  renderDescriptionCard = () => {
    // getting the data from the restaurant object to create the
    // description props object
    const restaurant = this.props.restaurant.loadedRestaurant;
    const { streetName, streetNumber, district, city, country } = restaurant.address;
    const id = this.props.match.params.id;

    // creating each prop for the description card component
    const descProps = {
      name: restaurant.info.name,
      // the url inside the restaurant object wasn't working, this is a workaround to it
      image: `https://loremflickr.com/200/200/food?lock=${id}`,
      rating: restaurant.rating.average,
      address: `${streetName}, ${streetNumber}, ${district} - ${city}, ${country}`,
      categories: restaurant.info.categories
    };
    return <DescriptionCard { ...descProps } />
  };

  render() {
    // only renders the description and sections if there is data to show
    const restaurant = this.props.restaurant.loadedRestaurant;
    return restaurant ? (
        <div className='details-container'>
          <BackButton> Back to List </BackButton>
          { this.renderDescriptionCard() }
          <Sections sections={ restaurant.sections }/>
          <BackButton> Back to List </BackButton>
        </div>
      )
      : <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default withRouter(connect(mapStateToProps, actions)(RestaurantDetailsContainer));
