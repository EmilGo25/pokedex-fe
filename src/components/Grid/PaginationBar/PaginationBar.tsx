import paginationStyles from './PaginationBar.module.scss'
import {useState} from "react";

export const PaginationBar = ({numOfPages})=>{
    const [pageOffset,setPageOffset]=useState(0);

    const handleChangePageOffset = ({increment}:{increment:'backward' | 'forward' | 'first' | 'last'})=>{
        switch(increment){
            case 'backward':
                setPageOffset((prev)=>prev-10>0?prev-10:0)
                break;
            case 'forward':
                setPageOffset((prev)=>prev+10<numOfPages?prev+10:numOfPages)
                break;
            case 'first':
                setPageOffset(0)
                break
            case 'last':
                setPageOffset(numOfPages-1)
        }
    }

return <div className={paginationStyles.pagination_bar}>
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'backward'})}>
        {'<'}
    </div>
    {Array(10).fill(0).map((_,pageNumber)=> {
        return <div className={paginationStyles.page}>
            {pageNumber+1}
        </div>
    })}
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'forward'})}>
        {'>'}
    </div>
</div>
}
