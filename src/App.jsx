
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Tictactoe } from './Components/Tictactoe'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Tictactoe />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
