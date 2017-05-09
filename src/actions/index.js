import { ADD_TO_LIST } from '../constants';

export function addToList(item) {
  const action = {
    type: ADD_TO_LIST,
    item: item
  }
  return action;
}
