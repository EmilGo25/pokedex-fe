import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface Pokemon {
    attack:number,
    defence:number,
    hit_points:number,
    img:string,
    legendary:boolean,
    name:string,
    number:number,
    special_attack:number,
    special_defence:number,
    speed:number,
    total:number,
    type_one:string,
    type_two:string,
}

interface State{
    pageOffset:number,
    setPageOffset:Dispatch<SetStateAction<number>>,
    itemsPerPage:number,
    setItemsPerPage:Dispatch<SetStateAction<number>>,
    numOfPages:number,
    setNumOfPages:Dispatch<SetStateAction<number>>
    data:Pokemon[],
    setData:Dispatch<SetStateAction<Pokemon[]>>,
    totalItems:number,
    setTotalItems:Dispatch<SetStateAction<number>>
    pokemonSortType:'asc' | 'desc',
    setPokemonSortType:Dispatch<SetStateAction<'asc' | 'desc'>>
}

const Context = createContext<State>({
    pageOffset:0,
    setPageOffset:()=>{},
    itemsPerPage:5,
    setItemsPerPage:()=>{},
    numOfPages:1,
    setNumOfPages:()=>{},
    data:[],
    setData:()=>{},
    totalItems:0,
    setTotalItems:()=>{},
    pokemonSortType:'asc',
    setPokemonSortType:()=>{}
})

export const GridContextProvider = ({children}:{children:ReactNode})=> {
    const [pageOffset,setPageOffset]=useState(0);
    const [itemsPerPage,setItemsPerPage]=useState(5)
    const [numOfPages,setNumOfPages]=useState(1)
    const [data,setData]=useState([])
    const [totalItems,setTotalItems]=useState(0)
    const [pokemonSortType,setPokemonSortType] = useState<'asc'| 'desc'>('asc')

    const stateContext = {
        pageOffset,
        setPageOffset,
        itemsPerPage,
        setItemsPerPage,
        numOfPages,
        setNumOfPages,
        data,
        setData,
        totalItems,
        setTotalItems,
        pokemonSortType,
        setPokemonSortType
    }

    return <Context.Provider value={stateContext}>{children}</Context.Provider>
}

export const useGridContext = ()=> useContext(Context);

export default Context;
