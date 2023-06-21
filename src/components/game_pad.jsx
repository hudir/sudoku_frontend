import { useState, useContext, useEffect } from "react";
import {Context} from "../context/Context"


function GamePad({val, rowIndex, colIndex}){
    const Clickable = val === '.'
    if (Clickable) val = ' '

    const [showInput, setShowInput] = useState(false)
    const [inputVal, setInput] = useState('')
    
    const {playerSolution, setplayerSolution} = useContext(Context)

    useEffect(()=>{}, [inputVal])

    return (<div className="gamePad">
        {!Clickable ? val : 
        <div onClick={()=>setShowInput(!showInput)} className="emptySell">
            {showInput && <input type="number" name="" id="" min={1} max={9} onChange={(e)=>{
              setInput(e.target.value)
              setShowInput(false)

            }}/>}
        </div>}
        {!inputVal==='' && {inputVal}}


    </div>)
}

export default GamePad;
