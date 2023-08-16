import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface State{
    pageOffset:number,
    setPageOffset:Dispatch<SetStateAction<number>>,
    itemsPerPage:number,
    setItemsPerPage:Dispatch<SetStateAction<number>>,
    numOfPages:number,
    setNumOfPages:Dispatch<SetStateAction<number>>
}

const Context = createContext<State>({
    pageOffset:0,
    setPageOffset:()=>{},
    itemsPerPage:5,
    setItemsPerPage:()=>{},
    numOfPages:1,
    setNumOfPages:()=>{}
})

export const GridContextProvider = ({children}:{children:ReactNode})=>{
    const [pageOffset,setPageOffset]=useState(0);
    const [itemsPerPage,setItemsPerPage]=useState(5)
    const [numOfPages,setNumOfPages]=useState(1)

    const stateContext= {
        pageOffset,
        setPageOffset,
        itemsPerPage,
        setItemsPerPage,
        numOfPages,
        setNumOfPages
    }

    return <Context.Provider value={stateContext}>{children}</Context.Provider>
}

export const useGridContext = ()=>useContext(Context);

export default Context;
