import React from 'react';
import { connect } from "react-redux";
import * as actions from 'src/actions/Actions';
import { withRouter } from 'react-router-dom';
import { SortList, FilterByCategory } from 'src/helpers/FilterHelpers';
import queryString from 'query-string';
import './Filter.scss';

class Filter extends React.Component {

  handleSortChange = event => this.doSort(event.target.value);
  handleCategoryChange = event => this.filterByCategory(event.target.value);

  filterByCategory = category => {
    const
      { sourceList } = this.props.restaurant,
      sortBy = this.props.filter.sort.selected,
      filtered = FilterByCategory({ list: sourceList, category }),
      sorted = SortList({ list: filtered, sortBy });

    this.updateQueryStringParams('category', category);
    this.props.updateSelectedFilterOption('category', category);
    this.props.updateRestaurantFilteredList(sorted);
  };

  doSort = sortBy => {
    const
      { filteredList } = this.props.restaurant,
      sorted = SortList({ list: filteredList, sortBy });

    this.updateQueryStringParams('sortBy', sortBy);
    this.props.updateRestaurantFilteredList(sorted);
    this.props.updateSelectedFilterOption('sort', sortBy);
  };

  updateQueryStringParams = (name, value) => {
    const newQueryStringObj = {
      ...queryString.parse(this.props.location.search),
      [name]: value
    };
    this.props.history.push({
      search: queryString.stringify(newQueryStringObj)
    });
  };

  renderSortOptions = () => {
    const { options: sortOptions } = this.props.filter.sort;
    return sortOptions.map((opt, index) =>
      <option key={ index } value={ opt.value }>{ opt.label }</option>
    );
  };

  renderCategories = () => {
    const { options: categories } = this.props.filter.category;
    return categories.map((cat, index) =>
      <option key={ index } value={ cat.value }>{ cat.label }</option>
    );
  };

  render() {
    const
      filter = this.props.filter,
      { selected: selectedSort } = filter.sort,
      { selected: selectedCategory } = filter.category;
    return (
      <div className='filter'>
        <form>
          <select onChange={ this.handleCategoryChange } value={ selectedCategory } className='filter__select'>
            <option value={ '' }> All Categories</option>
            { this.renderCategories() }
          </select>
          <select onChange={ this.handleSortChange } value={ selectedSort } className='filter__select'>
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