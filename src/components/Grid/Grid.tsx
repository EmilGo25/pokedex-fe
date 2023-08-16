import {GridContextProvider} from "./GridContext";
import {Displayer} from "./Displayer";
import {PaginationBar} from "./PaginationBar/PaginationBar";

export const Grid = ({itemsPerPage,data})=>{
return <>
    <GridContextProvider>
        <Displayer />
        <PaginationBar numOfPages={1200} />
    </GridContextProvider>
</>
}
