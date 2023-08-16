import {itemsPerPageOptions} from "./Controller.pure";
import {useGridContext} from "../GridContext";
import axios from 'axios'
import {useEffect} from "react";

export const Controller = ()=>{
    const {itemsPerPage,setItemsPerPage,setData}=useGridContext()

    const fetchData= async ()=>{
        const res = await axios.get(`http://localhost:4000/pokemon?limit=5&offset=5`)
        setData(res?.data?.data || [])
    }

    useEffect(()=>{
        fetchData()
    },[])
    return <div>
        <select name="itemsPerPage" id="itemsPerPage" value={itemsPerPage} onChange={(e)=>setItemsPerPage(Number(e.target.value))}>
            {itemsPerPageOptions.map(option=>{
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
    </div>
}
