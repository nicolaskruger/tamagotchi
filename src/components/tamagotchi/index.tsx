import { useEffect } from "react";
import { Provider } from "react-redux";
import { damage_by_idle } from "../../actions/actionCreator";
import store from "../../store";
import Buttons from "../buttons";
import Display from "../display"
import './styles.css';

const Tamagotchi = () => {
    const damage = () => {
        const state = store.getState();
        store.dispatch(damage_by_idle(state.tamagotch));
    }
    useEffect( () =>{
        const timer = setInterval(damage,10000);
        return () => clearInterval(timer);
    })
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