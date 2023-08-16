import {GridContextProvider} from "./GridContext";
import {Displayer} from "./Displayer";
import {PaginationBar} from "./PaginationBar/PaginationBar";

export const Grid = ()=>{
return <>
    <GridContextProvider>
        <Displayer />
        <PaginationBar numOfPages={1200} />
    </GridContextProvider>
</>
}
