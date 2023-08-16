import {itemsPerPageOptions,pokemonSortTypes} from "./Controller.pure";
import {useGridContext} from "../GridContext";
import axios from 'axios'
import {useEffect} from "react";
import controllerStyles from './Controller.module.scss';

export const Controller = ()=>{
    const {pageOffset,itemsPerPage,setItemsPerPage,setData,setTotalItems,setNumOfPages,pokemonSortType,setPokemonSortType}=useGridContext()

    const fetchData= async ()=>{
        const res = await axios.get(`http://localhost:4000/pokemon?limit=${itemsPerPage}&offset=${itemsPerPage*pageOffset}&sort=${pokemonSortType}`)
        setData(res?.data?.data || [])
        const totalItemsRes=res?.data?.total || 0
        setTotalItems(totalItemsRes)
        setNumOfPages(totalItemsRes/itemsPerPage)
    }

    useEffect(()=>{
        fetchData()
    },[pageOffset,itemsPerPage,pokemonSortType])
    return <div>
        <div className={controllerStyles.controller}>
            <div className={controllerStyles.items_per_page}>
                <span>Items per page:</span>
                <select name="itemsPerPage" id="itemsPerPage" value={itemsPerPage} onChange={(e)=>setItemsPerPage(Number(e.target.value))}>
                    {itemsPerPageOptions.map(option=>{
                        return <option key={option} value={option}>{option}</option>
                    })}
                </select>
            </div>
            <div className={controllerStyles.sort}>
                <span>Pokemon number:</span>
                <select name="numberSort" id="numberSort" value={pokemonSortType} onChange={(e)=>setPokemonSortType(e.target.value)}>
                    {pokemonSortTypes.map(option=>{
                        return <option key={option} value={option}>{option}</option>
                    })}
                </select>
            </div>

        </div>

    </div>
}
