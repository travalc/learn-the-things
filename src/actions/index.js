import { LOAD_RESULTS } from '../constants';

export function loadResults(results) {
  const action = {
    type: LOAD_RESULTS,
    results: results
  }
  return action;
}
