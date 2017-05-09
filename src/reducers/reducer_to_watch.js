import { ADD_TO_LIST } from '../constants';

export default (state = [], action) => {
  let ToWatch = null
  switch (action.type) {
    case ADD_TO_LIST:
      ToWatch = [...state, action.item];
      return ToWatch;
    default:
      return state;
  }
}
