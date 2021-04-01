import { ITamagotchi } from '../app/ITamagotchi';
import { TamagotchiState } from '../app/TamagotchiState';
import * as actionTypes from './actionTypes';
import { TamagotchiAction } from './types';

const limitMax = (n:number)=>{
    return n<=10?n:10;
}
const limitMin = (n:number)=>{
    return n>=0?n:0;
}
const communOper = (tamagotchi:ITamagotchi, key:keyof ITamagotchi, actionT:string, state:TamagotchiState, plus:number)=>{
    const action: TamagotchiAction = {
        type: actionT,
        tamagotch: {
            ...tamagotchi,
            [key]: limitMax(tamagotchi[key]+plus)
        },
        currState: state
    }
    return action;
}
export function eat(tamagotchi:ITamagotchi){
    return communOper(
        tamagotchi,
        'hungry',
        actionTypes.EAT,
        TamagotchiState.EATING,
        3
    )    
}
export function work(tamagotchi:ITamagotchi){
    return communOper(
        tamagotchi,
        'health',
        actionTypes.WORK,
        TamagotchiState.WORK,
        2
    )    
}
export function sleep(tamagotchi:ITamagotchi){
    return communOper(
        tamagotchi,
        'sleep',
        actionTypes.SLEEP,
        TamagotchiState.SLEEPING,
        4
    )    
}
export function dead(tamagotch:ITamagotchi){
    const action: TamagotchiAction = {
        type: actionTypes.DIE,
        tamagotch: {
            hungry:0,
            health:0,
            sleep:0
        },
        currState: TamagotchiState.DEAD
    }
    return action;
}
export function to_def_mode(tamagotch:ITamagotchi){
    const action: TamagotchiAction = {
        type: actionTypes.TO_DEF_MODE,
        tamagotch: {
            ...tamagotch
        },
        currState: TamagotchiState.STANDAR
    }
    return action;
}
export function damage_by_idle(tamagotch:ITamagotchi){
    const tama:ITamagotchi = {
        health: 0,
        hungry: 0,
        sleep: 0
    };
    (Object.keys(tamagotch) as Array<keyof ITamagotchi>)
        .forEach(key => {
            tama[key] = limitMin(tamagotch[key]-1)
        })
    const action: TamagotchiAction = {
        type: actionTypes.DAMAGE_BY_IDLE,
        tamagotch: {
            ...tama
        },
        currState: TamagotchiState.STANDAR
    }
    return action;
}
