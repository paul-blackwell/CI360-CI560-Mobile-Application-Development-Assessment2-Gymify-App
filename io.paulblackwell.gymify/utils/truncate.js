
/**
 * @param {string}  str - the string that need to be truncated
 * @param {init} number - how long the string need to be before it gets truncated
 * @return {string} - return a new truncated string with ellipsis
 */
export default truncate = (str, number) => {
    return (str.length > number) ? str.substr(0, number-1) + '...' : str;
}