import { LOAD_RESULTS } from '../constants';

export default (state = [], action) => {
  var searchResults;
  switch (action.type) {
    case LOAD_RESULTS:
      searchResults = action.results;
      return searchResults;
    default:
      return state;
  }
}
