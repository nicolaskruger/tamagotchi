import { TamagotchiAction, Tamagotchi_State } from "../actions/types";
import { TamagotchiState } from "../app/TamagotchiState";
import * as actionTypes from '../actions/actionTypes'

const initialState:Tamagotchi_State = {
    tamagotch: {
        health: 5,
        hungry: 3,
        sleep: 1
    },
    currState: TamagotchiState.STANDAR
};

const tamagotchiReducer = (
    state:Tamagotchi_State= initialState,
    action:TamagotchiAction):Tamagotchi_State => {
    if(state.currState === TamagotchiState.DEAD )
        return state;
    switch (action.type) {
        case actionTypes.EAT:
        case actionTypes.SLEEP:
        case actionTypes.WORK:
            if(state.currState === TamagotchiState.STANDAR){
                return {
                    currState: action.currState,
                    tamagotch: {...action.tamagotch}
                }
            }
            return state;
        case actionTypes.TO_DEF_MODE:
            return {
                currState: action.currState,
                tamagotch: {...state.tamagotch}
            }
        case actionTypes.DAMAGE_BY_IDLE:
        case actionTypes.DIE:

            return {
                currState: action.currState,
                tamagotch: {...action.tamagotch}
            }
        default:
            return state;
    }
}

export default tamagotchiReducer;