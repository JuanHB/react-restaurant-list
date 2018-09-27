/**
 * Filters the given list by the string query
 * Props from the object:
 * - restaurant.general.name
 * - restaurant.general.categories[0]
 * - restaurant.address
 * @param list
 * @param query {String}
 * @returns {Array}
 */
const FilterByQuery = ({list, query}) => {
  return list.filter(rest => {
    const { address, general } = rest;
    const { name, categories } = general;
    // checks for the string value on name, or categories, or address
    return name.toLowerCase().indexOf(query) !== -1
      || categories[0].indexOf(query) !== -1
      || Object.values(address).join(',').toLowerCase().indexOf(query) !== -1
  });
};

/**
 * Sorts the given list by the prop and sort order
 * Props from the object
 * if prop === name -> restaurant.general.name
 * if prop === rating -> restaurant.rating.average
 * @param list
 * @param sortBy
 * @returns {Array}
 */
const SortList = ({list, sortBy}) => {
  const
    [prop, order] = sortBy.split('-'),
    firstNameToLower = (fullName) => {
      const wsIndex = fullName.indexOf(' ');
      let result = wsIndex === -1
        ? fullName
        : fullName.substr(0, wsIndex);
      return result.toLowerCase();
    },
    getValueToSort = (obj, prop) => (
      prop === 'name' ? firstNameToLower(obj.general.name) : obj.rating.average
    );

  return list.sort((a, b) => {
    const
      valueA = getValueToSort(a, prop),
      valueB = getValueToSort(b, prop),
      [p1, p2] = order === 'desc' ? [valueB, valueA] : [valueA, valueB];
    return p1 > p2 ? 1 : p1 < p2 ? -1 : 0
  });

};

export { FilterByQuery, SortList };