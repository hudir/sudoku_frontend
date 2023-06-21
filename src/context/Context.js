import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({children}) {
    const [newgame, setNewgame] = useState(['Loading'])
    const getNewSudoku = () =>{
        fetch("https://soduko-new-game.onrender.com/newgame")
        .then(res=>res.json())
        .then(data=>{
            const arr = convertFormat(data.sudoku.split(''))
            setNewgame(arr)

        })
    }
    const convertFormat = arr =>{
        const long = Math.sqrt(arr.length)
        const res = []
        let temp = []
        for(let i = 0; i< arr.length; i++) {
            temp.push(arr[i])
            if(temp.length == long) {
                res.push(temp)
                temp = []
            }  
        }
        return res
    }

    useEffect(()=> {
        getNewSudoku()
    }, [])



    return (
        <Context.Provider value={{newgame}}>{children}</Context.Provider>
    )
}



export { Context, ContextProvider };