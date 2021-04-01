import DisplayImg from "../displayImg";
import DisplayStatus from "../displayStatus";
import './styles.css'
import { connect, ConnectedProps } from "react-redux";
import mapStateToProps from '../mapStateToProps';



const connector = connect(mapStateToProps,{});

type PropsDisplay = ConnectedProps<typeof connector>;

const Display = ({tamagotchi,state}:PropsDisplay) => {
    
    return (
        <section className="Display__section">
            <DisplayStatus tamagotchi={tamagotchi} />
            <DisplayImg state={state}/>        
        </section>
    )
}



export default connector(Display);