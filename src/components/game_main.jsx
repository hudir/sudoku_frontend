import { useContext } from "react";
import {Context} from "../context/Context"

function GameMain(){
    const {newgame} = useContext(Context)

    return (<div className="container">
        {newgame.map((x,i) =>{
        if (i % 9 === 0 ) return <div className="row"><div key={i} className="m-2 p-2 col">{x}</div>
        else if (i % 9 === 8 ) return <div key={i} className="m-2 p-2 col">{x}</div></div>
        return <div key={i} className="m-2 p-2 col">{x}</div>
    })}
      

    </div>)
}

export default GameMain;


