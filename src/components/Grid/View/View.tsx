import {PaginationBar} from "../PaginationBar/PaginationBar";
import {useGridContext} from "../GridContext";

export const View = ()=>{
    const {numOfPages}=useGridContext()
    return <div>
        <PaginationBar numOfPages={numOfPages}/>
    </div>
}
