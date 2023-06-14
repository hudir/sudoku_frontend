import { useContext } from "react";
import {Context} from "../context/Context"

function GameMain(){
    const {newgame} = useContext(Context)

    return (<div className="container ">
        {newgame.map( x => (
            <div>{x}</div>
        ))}

    </div>)
}

export default GameMain;