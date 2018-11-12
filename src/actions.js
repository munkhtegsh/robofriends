import {CHANGE_SEARCH_FIELD} from './constants.js';
import {REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING} from './constants.js';

export const setSearchField = (text) => {
  return {
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
  }
}

export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
      .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))

}
