import { type } from "node:os";
import { ITamagotchi } from "../app/ITamagotchi";
import { TamagotchiState } from "../app/TamagotchiState";

type Tamagotchi_State = {
    tamagotch:ITamagotchi,
    currState:TamagotchiState
}
type TamagotchiAction = {
    type: string,
    tamagotch:ITamagotchi,
    currState:TamagotchiState
}

type DispatchType = (args:TamagotchiAction) => TamagotchiAction