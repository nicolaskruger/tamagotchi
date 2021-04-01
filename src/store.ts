import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { Tamagotchi_State } from './actions/types';
import { TamagotchiState } from './app/TamagotchiState';
import tamagotchiReducer from './reducers/tamagotchiReducers';


const initialState:Tamagotchi_State = {
    tamagotch: {
        health: 5,
        hungry: 3,
        sleep: 3
    },
    currState: TamagotchiState.STANDAR
};

const middleWare = [thunk];

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    tamagotchiReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleWare),
    )
)
export default store;