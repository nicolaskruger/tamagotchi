import { combineReducers } from 'redux';
import tamagotchiReducer from './tamagotchiReducers';


export default combineReducers({
    tamagotchi:tamagotchiReducer
})