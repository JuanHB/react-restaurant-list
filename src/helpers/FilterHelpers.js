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
const FilterByQuery = ({ list, query }) => {
  return list.filter(rest => {
    const { address, general } = rest;
    const { name, categories } = general;
    // checks for the string value on name, or categories, or address
    return name.toLowerCase().indexOf(query) !== -1
      || categories[0].indexOf(query) !== -1
      || Object.values(address).join(',').toLowerCase().indexOf(query) !== -1;
  });
};

const FilterByCategory = ({ list, category }) => {
  return category
    ? list.filter(rest => rest.general.categories[0].indexOf(category) !== -1)
    : list;
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
const SortList = ({ list, sortBy }) => {
  const [prop, order] = sortBy.split('-');
  const firstNameToLower = (fullName) => {
    const wsIndex = fullName.indexOf(' ');
    let result = wsIndex === -1
      ? fullName
      : fullName.substr(0, wsIndex);
    return result.toLowerCase();
  };
  const getValueToSort = (obj, prop) => (
    prop === 'name' ? firstNameToLower(obj.general.name) : obj.rating.average
  );

  return list.sort((a, b) => {
    const valueA = getValueToSort(a, prop);
    const valueB = getValueToSort(b, prop);
    const [p1, p2] = order === 'desc' ? [valueB, valueA] : [valueA, valueB];
    return p1 > p2 ? 1 : p1 < p2 ? -1 : 0
  });

};

/**
 * Extract all categories from the list,
 * removes repeated and sort by name
 * @param list
 * @returns {{label: *, value: *}[]}
 * @constructor
 */
const ExtractCategories = ({ list }) => {
  const
    raw = list.map(res => res.general.categories[0].split(',')),
    unique = uniqueElements(flatten(raw)).map(cat => ({
      label: capitalizeEveryWord(cat.split('-').join(' ')),
      value: cat
    }));

  return unique.sort((a, b) => {
    const [p1, p2] = [a.value, b.value];
    return p1 > p2 ? 1 : p1 < p2 ? -1 : 0
  });
};


/**
 * ===================
 * Auxiliary functions
 * ===================
 */

/**
 * Flattens the array
 * @param arr
 * @param depth
 * @returns {*}
 */
const flatten = (arr, depth = 1) => (
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])
);

/**
 * Returns a new array with only unique elements
 * @param arr
 * @returns {*[]}
 */
const uniqueElements = arr => [...new Set(arr)];

/**
 * Capitalize every word in a string
 * @param str
 * @returns {*}
 */
const capitalizeEveryWord = str => (
  str.replace(/\b[a-z]/g, char => char.toUpperCase())
);


export { FilterByQuery, SortList, ExtractCategories, FilterByCategory };