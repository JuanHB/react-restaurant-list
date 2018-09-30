/**
 * Capitalize every word in a string
 * @param str
 * @returns {*}
 */
const capitalizeEveryWord = str => (
  str.replace(/\b[a-z]/g, char => char.toUpperCase())
);

export { capitalizeEveryWord };