import { useContext } from "react";
import {Context} from "../context/Context"

function GameMain(){
    const {newgame} = useContext(Context)
    console.log(newgame)

    return (<div className="container">
       {newgame.length == 1 &&( <h1>{newgame[0]}</h1>)}
       {newgame.length > 1 &&( 
       <div className="container">
        {newgame.map((row, rowIndex)=> (
            <div className="row" key={"row"+rowIndex}>
                {row.map((col, colIndex)=> (
                    <div className="col" key={"col"+colIndex}>{col}</div>
                ))}

            </div>
        ))}
         

       </div>)}


      

    </div>)
}

export default GameMain;


