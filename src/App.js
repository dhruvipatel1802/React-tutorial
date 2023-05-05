import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
 import Home from './Home';
 import Aboutus from './Aboutus';
import Sec from './Sec';
import Sec2 from './Sec2';
import Sec3 from './Sec3';

const App=() => {
  return (
    <>
         <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/contactus" element={<Sec/>}/>
          <Route path="/bdonor" element={<Sec2/>}/>
          <Route path="/breq" element={<Sec3/>}/>
          </Routes>
         </BrowserRouter>
</>
   );
}
export default App;