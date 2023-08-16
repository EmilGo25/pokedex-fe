import {PaginationBar} from "../PaginationBar/PaginationBar";
import {useGridContext} from "../GridContext";
import viewStyles from './View.module.scss'

export const View = ()=> {
    const {data,numOfPages}=useGridContext()
    return <div>
        <div className={viewStyles.view}>
            {data.map(pokemon => {
                return <div>
                    <div>
                        <img src={pokemon.img} alt="pokemon_img"/>
                    </div>
                    <div>
                        {pokemon.name}
                    </div>
                </div>
            })}

    </div>
        <PaginationBar numOfPages={numOfPages}/>
    </div>
}
