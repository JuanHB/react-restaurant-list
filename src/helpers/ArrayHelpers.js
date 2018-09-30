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

export { flatten, uniqueElements };