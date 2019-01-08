import {combineReducers} from 'redux';
import position from './position';
import finalPos from '../actions/Mainaction'


const allReducer = combineReducers(
  {
    pos:position,
    finals:finalPos

  }
)
export default allReducer;
