import paginationStyles from './PaginationBar.module.scss'
import * as classNames from "classnames";
import {useGridContext} from "../GridContext";

export const PaginationBar = ({numOfPages})=>{
    const gridContext = useGridContext()
    const {pageOffset,setPageOffset}=gridContext;

    console.log('pageOffset',pageOffset)

    const handleChangePageOffset = ({increment}:{increment:'prev'|'next'|'backward' | 'forward' | 'first' | 'last'})=>{
        switch(increment){
            case 'prev':
                setPageOffset((prev)=>prev-1>0?prev-1:0)
                break;
            case 'next':
                setPageOffset((prev)=>prev+1<numOfPages?prev+1:numOfPages)
                break;
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
    <div className={classNames(paginationStyles.page,paginationStyles.page_with_text)} onClick={()=>handleChangePageOffset({increment:'prev'})}>
        Prev
    </div>
    {Array(10).fill(0).map((_,pageNumber)=> {
        const pageAbsoluteNumber=(Math.floor(pageOffset/10)*10+ pageNumber)
        return <div key={pageAbsoluteNumber+1} className={classNames(paginationStyles.page,{[paginationStyles.selected_page]:pageAbsoluteNumber===pageOffset})}
                onClick={()=>setPageOffset(pageAbsoluteNumber)}>
            {pageAbsoluteNumber+1}
        </div>
    })}
    <div className={classNames(paginationStyles.page,paginationStyles.page_with_text)} onClick={()=>handleChangePageOffset({increment:'next'})}>
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
