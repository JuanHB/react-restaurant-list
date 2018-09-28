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
    const {address, general} = rest;
    const {name, categories} = general;
    // checks for the string value on name, or categories, or address
    return name.toLowerCase().indexOf(query) !== -1;
    // || categories[0].indexOf(query) !== -1
    // || Object.values(address).join(',').toLowerCase().indexOf(query) !== -1
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

const ExtractCategories = ({list}) => {

  const raw = list.map(res => res.general.categories[0].split(','));
  const uni = uniqueElements(flatten(raw));

  return uni.map(cat => ({
    label: capitalizeEveryWord(cat.split('-').join(' ')),
    value: cat
  }));
};


const flatten = (arr, depth = 1) => {
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
};

const uniqueElements = arr => {
  return [...new Set(arr)];
};

const capitalizeEveryWord = str => (
  str.replace(/\b[a-z]/g, char => char.toUpperCase())
);


export {FilterByQuery, SortList, ExtractCategories};