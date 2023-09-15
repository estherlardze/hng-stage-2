import { MovieDetail, Error} from "./components";
import Home from './components/Home'
import './App.css'
import { Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <Routes>
         <Route path="/" element = {<Home />} />
         <Route exact path="movie/:movie_Id" element={<MovieDetail /> } />
         <Route path="*" element = {<Error />} />
      </Routes>
    </>
  )
}

export default App
