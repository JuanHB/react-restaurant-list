import React from 'react';
import { connect } from "react-redux";
import * as actions from 'src/actions/Actions';

class Filter extends React.Component {

  state = { query: "" };

  handleQueryChange = event => {
    const query = event.target.value.toLowerCase();
    const sourceList = this.props.restaurant.sourceList;
    const filtered = this.filterByQuery({ list: sourceList, query });
    this.props.updateRestaurantFilteredList(filtered);
    this.setState({ query });
  };

  filterByQuery = ({list, query}) => {
    return list.filter(rest => {
      const { address, general } = rest;
      const { name, categories } = general;
      return name.toLowerCase().indexOf(query) !== -1
        || categories[0].indexOf(query) !== -1
        || Object.values(address).join(',').toLowerCase().indexOf(query) !== -1
    });
  };

  render () {
    return (
      <div>
        <form>
          <input type={'text'} placeholder={'filter'} onChange={this.handleQueryChange}/>
          <select>
            <option value={'name-a-z'}>Name A-Z</option>
            <option value={'name-z-a'}>Name Z-A</option>
            <option value={'rate-asc'}>Rating Ascending</option>
            <option value={'rate-desc'}>Rating Descending</option>
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(mapStateToProps, actions)(Filter);