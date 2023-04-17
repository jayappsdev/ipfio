import { Route, Routes } from 'react-router-dom';
import './App.css';
/*import './appScript.js';*/
import Home from "./routes/Home"
import Contactus from "./routes/Contactus"

export default function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>


      
    </div>
  );
}
