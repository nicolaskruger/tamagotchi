import { Tamagotchi_State } from "../../actions/types";

const mapStateToProps = (state:Tamagotchi_State) => ({
    tamagotchi:state.tamagotch,
    state:state.currState
})

export default mapStateToProps;