/**
   * Title: Smart way to truncate long strings
   * Author: KooiInc
   * Date: 17, March, 2021
   * Code version: 1.0
   * Availability: https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
   * 
   */

/**
 * @param {string}  str - the string that need to be truncated
 * @param {init} number - how long the string need to be before it gets truncated
 * @return {string} - return a new truncated string with ellipsis
 */
export default truncate = (str, number) => {
    return (str.length > number) ? str.substr(0, number-1) + '...' : str;
}