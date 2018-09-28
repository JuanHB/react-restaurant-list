import React from 'react';
import { connect } from "react-redux";
import * as actions from 'src/actions/Actions';
import { withRouter } from 'react-router-dom';
import { FilterByQuery, SortList } from 'src/helpers/FilterHelpers';
import queryString from 'query-string';

class Filter extends React.Component {

  state = { query: '' };

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
      list = this.props.restaurant.filteredList,
      sorted = SortList({ list, sortBy });

    this.props.history.push({
      search: queryString.stringify({ sortBy })
    });

    this.props.updateRestaurantFilteredList(sorted);
    this.props.updateSelectedFilterOption('sort', sortBy);
  };

  renderSortOptions = () => {
    const { options: sortOptions } = this.props.filter.sort;
    return sortOptions.map((opt, index) =>
      <option key={index} value={opt.value}>{opt.label}</option>
    );
  };

  renderCategories = () => {

  };

  render () {
    const { selected: selectedSort } = this.props.filter.sort;
    return (
      <div>
        <form>
          <input type={'text'} value={this.state.query} placeholder={'filter'} onChange={this.handleQueryChange} />
          <select onChange={this.handleSortChange} value={selectedSort}>
            { this.renderSortOptions() }
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  filter: state.filter
});

export default withRouter(connect(mapStateToProps, actions)(Filter));