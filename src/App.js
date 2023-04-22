import {Routes, Route} from 'react-router-dom';
// import MovieCard from "./Component/MovieCard"
// import MovieList from "./Component/MovieList";
import Home from "./Component/Home";
// import NavBar from './Component/NavBar';
import Madmax from './Component/MovieCard/Madmax';
import Battle from './Component/MovieCard/Battle';
import './App.css'

// import madmax from './Assets/madmax.png'
// import angeles from './Assets/angeles.png'


function App() {
  return(
    <>
      <div className='app'>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Madmax" element={<Madmax/>}/> 
            <Route path="/Battle" element={<Battle/>}/>
        </Routes>  
      </div>
    </>
  )
}
  
export default App;
