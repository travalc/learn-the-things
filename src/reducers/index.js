import { combineReducers } from 'redux';
import ToWatch from './reducer_to_watch';
import currentVideo from './reducer_current_video';

export default combineReducers ( {
  ToWatch,
  currentVideo
});
