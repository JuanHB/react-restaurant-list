import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionCard from 'src/components/Shared/DescriptionCard/DescriptionCard';
import { connect } from "react-redux";
import './List.scss';
class List extends React.Component {

  renderList = () => this.props.restaurant.filteredList.map((rest, i) => {

    const { address, general, rating: restRating } = rest;
    const { street_name, street_number, district, city, country } = address;
    const cardProps = {
      name: general.name,
      // the url inside the restaurant object wasn't working, this is a workaround to it
      image: `https://loremflickr.com/200/200/food?lock=${rest.id}`,
      rating: restRating.average,
      address: `${street_name}, ${street_number}, ${district} - ${city}, ${country}`,
      categories: general.categories[0].split(',')
    };
    return (
      <Link to={ `/restaurant/${rest.id}` } key={ rest.id }>
        <DescriptionCard { ...cardProps } className='list__item'/>
      </Link>
    );
  });

  render() {
    return (
      <div>
        { this.renderList() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(mapStateToProps)(List);
