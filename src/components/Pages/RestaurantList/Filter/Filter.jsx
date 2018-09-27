import React from 'react';
import { connect } from "react-redux";
import * as actions from 'src/actions/Actions';
import { withRouter } from 'react-router-dom';
import { FilterByQuery, SortByProp } from './FilterHelpers';
import queryString from 'query-string';

class Filter extends React.Component {

  state = {
    query: '',
    sortOptions: [
      { label: 'Name A-Z', value: 'name-asc' },
      { label: 'Name Z-A', value: 'name-desc' },
      { label: 'Rating Ascending', value: 'rating-asc' },
      { label: 'Rating Descending', value: 'rating-desc' },
    ],
    sortBy: 'name-asc'
  };

  handleQueryChange = event => {
    const
      query = event.target.value.toLowerCase(),
      list = this.props.restaurant.sourceList,
      filtered = FilterByQuery({ list, query });

    this.props.updateRestaurantFilteredList(filtered);
    this.setState({ query });
  };

  handleSortChange = event => this.doSort(event.target.value);

  doSort = (sortBy) => {
    const
      [prop, order] = sortBy.split('-'),
      filtered = this.props.restaurant.filteredList,
      sorted = SortByProp({ list: filtered, prop, order });

    this.props.history.push({
      search: queryString.stringify({ sortBy })
    });

    this.props.updateRestaurantFilteredList(sorted);
    this.setState({ sortBy })
  };

  renderSortOptions = () => {
    return this.state.sortOptions.map((opt, index) =>
      <option key={index} value={opt.value}>{opt.label}</option>
    );
  };

  render () {
    return (
      <div>
        <form>
          <input type={'text'} placeholder={'filter'} onChange={this.handleQueryChange}/>
          <select onChange={this.handleSortChange} value={this.state.sortBy}>
            { this.renderSortOptions() }
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default withRouter(connect(mapStateToProps, actions)(Filter));