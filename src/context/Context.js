import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({children}) {
    const [newgame, setNewgame] = useState(['Loading'])
    const getNewSudoku = () =>{
        fetch("https://soduko-new-game.onrender.com/newgame")
        .then(res=>res.json())
        .then(data=>setNewgame(data.sudoku.split('')))
    }
    useEffect(getNewSudoku, [])



    return (
        <Context.Provider value={{newgame}}>{children}</Context.Provider>
    )
}



export { Context, ContextProvider };