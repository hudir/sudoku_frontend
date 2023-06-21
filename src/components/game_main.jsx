import { useContext } from "react";
import {Context} from "../context/Context"
import GamePad from "./game_pad";

function GameMain(){
    const {newgame} = useContext(Context)
    console.log(newgame)

    return (<div className="gameMain">
       {newgame.length === 1 &&( <h1>{newgame[0]}</h1>)}
       {newgame.length > 1 &&( 
       <div className="gridBox">
        {newgame.map((row, rowIndex)=> (
            <div className="row m-0 p-0" key={"row"+rowIndex}>
                {row.map((col, colIndex)=> (
                    <div className="col" key={"col"+colIndex}>
                        <GamePad val={col} rowIndex={rowIndex} colIndex={colIndex}></GamePad>
                    </div>
                ))}

            </div>
        ))}
       </div>)}
    </div>)
}

export default GameMain;


