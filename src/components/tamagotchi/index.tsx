import { Provider } from "react-redux";
import store from "../../store";
import Buttons from "../buttons";
import Display from "../display"
import './styles.css';

const Tamagotchi = () => {
    return (
        <Provider store = {store}>
            <div className="Tamagotchi__div">
                <Display />
                <Buttons/>
            </div>
        </Provider>
    )
}

export default Tamagotchi