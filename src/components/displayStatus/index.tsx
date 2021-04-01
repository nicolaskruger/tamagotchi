import { ITamagotchi } from "../../app/ITamagotchi";
import Bar from "../bar";
import './styles.css'

interface PropsDisplayStatus {
    tamagotchi: ITamagotchi
}

const DisplayStatus = ({ tamagotchi }: PropsDisplayStatus) => {


    return (
        <ul className="DisplayStatus__ul">
            {(Object.keys(tamagotchi) as Array<keyof ITamagotchi>).map((key, i) => (
                <li key={i}>
                    <Bar text={key} val={tamagotchi[key]} />
                </li>
            ))}
        </ul>
    )
}

export default DisplayStatus;