import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home';
import Kidpage from '../Pages/Kidpage';
import Menpage from '../Pages/Menpage';
// import Menpage from '../Pages/Menpage';
import Notfoundpage from '../Pages/Notfoundpage';
import Womenpage from '../Pages/Womenpage';
import Mens from './Mens';


function AllRoutes() {
  return (
    
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/Mens' element={<Mens/>}></Route>
     <Route path='/Menpage' element={<Menpage/>}></Route>
     <Route path='/Womenpage' element={<Womenpage/>}></Route>
     <Route path='/Kidpage' element={<Kidpage/>}></Route>
     <Route path='*' element={<Notfoundpage/>}></Route>



     </Routes>

   
  )
}

export default AllRoutes