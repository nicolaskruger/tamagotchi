import { useEffect, useState } from "react"
import { TamagotchiState } from "../../app/TamagotchiState"
import { EnumDictionary } from "../../app/EnumDictionary"

import './styles.css'

interface PropsDisplayImg {
    state:TamagotchiState
}

const DisplayImg = ({state}:PropsDisplayImg) =>{
    const [dots,setDots] = useState(0);
    
    const swith: EnumDictionary<TamagotchiState,string> = {
        [TamagotchiState.DEAD]: "Dead",
        [TamagotchiState.EATING]: "Eating",
        [TamagotchiState.SLEEPING]: "Sleeping",
        [TamagotchiState.STANDAR]: ";3",
        [TamagotchiState.WORK]: "Working"
    }
    const upDots = () =>{
        setDots((dots+1)%4);
    }
    useEffect( () =>{
        const timer = setInterval(upDots,1000);
        return () => clearInterval(timer);
    })
    return (
        <h1 className="DisplayImg__h1" >
            {`${swith[state]}${'.'.repeat(dots)}`}
        </h1>
    )
}

export default DisplayImg