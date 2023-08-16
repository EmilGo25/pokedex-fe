import {GridContextProvider} from "./components/Grid/GridContext";
import {PaginationBar} from "./components/Grid/PaginationBar/PaginationBar";
import {Displayer} from "./components/Grid/Displayer";
import './App.css'

function App() {
  return (

        <GridContextProvider>
            <Displayer />
            <PaginationBar numOfPages={1200} />
        </GridContextProvider>

  )
}

export default App
