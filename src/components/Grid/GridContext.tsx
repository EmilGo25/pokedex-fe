import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface State{
    pageOffset:number,
    setPageOffset:Dispatch<SetStateAction<number>>
}

const Context = createContext<State>({
    pageOffset:0,
    setPageOffset:()=>{}
})

export const GridContextProvider = ({children}:{children:ReactNode})=>{
    const [pageOffset,setPageOffset]=useState(0);

    const stateContext= {
        pageOffset,
        setPageOffset
    }

    return <Context.Provider value={stateContext}>{children}</Context.Provider>
}

export const useGridContext = ()=>useContext(Context);

export default Context;
