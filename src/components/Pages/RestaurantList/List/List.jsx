import React from 'react';
import Card from 'src/components/Pages/RestaurantList/Card/Card';
import { connect } from "react-redux";

class List extends React.Component {

  renderList = () => this.props.restaurant.filteredList.map(
    rest => <Card key={rest.id} {...rest} />
  );

  render () {
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
