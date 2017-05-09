import { SET_CURRENT_VIDEO } from '../constants';


export default (state = 'NybHckSEQBI', action) => {
  let currentVideo = null
  switch (action.type) {
    case SET_CURRENT_VIDEO:
      currentVideo = action.id;
      return currentVideo;
    default:
    return state;
  }
}
