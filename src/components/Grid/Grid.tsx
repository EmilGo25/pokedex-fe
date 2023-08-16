import {GridContextProvider} from "./GridContext";
import {Controller} from "./Controller/Controller";
import {View} from "./View/View";

export const Grid = ()=>{
return <>
    <GridContextProvider>
        <Controller/>
        <View/>
    </GridContextProvider>
</>
}
