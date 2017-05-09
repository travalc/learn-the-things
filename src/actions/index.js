import { ADD_TO_LIST } from '../constants';
import { SET_CURRENT_VIDEO } from '../constants';


export function addToList(item) {
  const action = {
    type: ADD_TO_LIST,
    item: item
  }
  return action;
}

export function setCurrentVideo(id) {
  const action = {
    type: SET_CURRENT_VIDEO,
    id: id
  }
  return action;
}
