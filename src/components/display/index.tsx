import { ITamagotchi } from "../../app/ITamagotchi";
import { TamagotchiState } from "../../app/TamagotchiState";
import DisplayImg from "../displayImg";
import DisplayStatus from "../displayStatus";
import './styles.css'

const Display = () => {
    const tamagotchi:ITamagotchi = {
        health: 5,
        hungry: 4,
        sleep: 2
    }
    return (
        <section className="Display__section">
            <DisplayStatus tamagotchi={tamagotchi} />
            <DisplayImg state={TamagotchiState.SLEEPING}/>        
        </section>
    )
}

export default Display;