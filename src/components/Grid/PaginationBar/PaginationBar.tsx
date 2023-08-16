import paginationStyles from './PaginationBar.module.scss'
import {useState} from "react";

export const PaginationBar = ({numOfPages})=>{
    const [pageOffset,setPageOffset]=useState(0);

    const handleChangePageOffset = ({increment}:{increment:'prev'|'next'|'backward' | 'forward' | 'first' | 'last'})=>{
        switch(increment){
            case 'prev':
                setPageOffset((prev)=>prev-1>0?prev-1:0)
                break;
            case 'next':
                setPageOffset((prev)=>prev+1<numOfPages?prev+1:numOfPages)
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
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'first'})}>
        {'<<'}
    </div>
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'backward'})}>
        {'<'}
    </div>
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'prev'})}>
        Prev
    </div>
    {Array(10).fill(0).map((_,pageNumber)=> {
        return <div className={paginationStyles.page}>
            {pageNumber+1}
        </div>
    })}
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'next'})}>
        Next
    </div>
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'forward'})}>
        {'>'}
    </div>
    <div className={paginationStyles.page} onClick={()=>handleChangePageOffset({increment:'last'})}>
        {'>>'}
    </div>
</div>
}
