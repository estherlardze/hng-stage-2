import { MovieDetail} from "./components";
import Home from './components/Home'
import './App.css'
import { Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <Routes>
         <Route path="/" element = {<Home />} />
         <Route exact path="/movie/:movieId" element={<MovieDetail /> } />
      </Routes>
    </>
  )
}

export default App
