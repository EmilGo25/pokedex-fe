import {useGridContext} from "./GridContext";

export const Displayer = ()=>{
    const gridContext = useGridContext()
    const {pageOffset}=gridContext;
    return <div>
        Page offset : {pageOffset}
    </div>
}
