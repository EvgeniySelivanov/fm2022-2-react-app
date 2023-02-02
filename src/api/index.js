import queryString from 'query-string';
import { apiConfig } from '../configs';
/**
 * 
 * @param {object} options 
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.nut
 * @param {string} options.seed
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    format:apiConfig.DEFAULT_FORMAT,
    page: 1,
    results: apiConfig.DEFAULT_AMOUNT,
    seed:apiConfig.API_KEY,
    nat: apiConfig.DEFAULT_NAT,
    inc: apiConfig.DEFAULT_INC_FIELD
  };
  const readyOptions = {
    ...defaultOptions,
    ...options
  };
  // const { page, results, seed, nat, format, inc } = readyOptions;
  // return fetch(
  //   `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}&nat=${nat}`)
  //   .then(response => response.json());
    return fetch(
      `${apiConfig.API_URL}/?${queryString.stringify(readyOptions)}`)
      .then(response => response.json());
}

