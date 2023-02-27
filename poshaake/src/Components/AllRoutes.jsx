import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home';
import Kidpage from '../Pages/Kidpage';
import Login from '../Pages/Login';
import Menpage from '../Pages/Menpage';
// import Menpage from '../Pages/Menpage';
import Notfoundpage from '../Pages/Notfoundpage';
import Signin from '../Pages/Signin';
import Womenpage from '../Pages/Womenpage';
import Mens from './Mens';
import Shoespage from '../Pages/Shoespage'
import Addcard from '../Pages/Addcard';

function AllRoutes() {
  return (
    
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/Mens' element={<Mens/>}></Route>
     <Route path='/Menpage' element={<Menpage/>}></Route>
     <Route path='/Womenpage' element={<Womenpage/>}></Route>
     <Route path='/Kidpage' element={<Kidpage/>}></Route>
     <Route path='*' element={<Notfoundpage/>}></Route>
     <Route path='/signup' element={<Login/>}></Route>
     <Route path='/signin' element={<Signin/>}></Route>
     <Route path='/shoe' element={<Shoespage/>}></Route>
     <Route path='/women' element={<Womenpage/>}></Route>
     <Route path='/addcard' element={<Addcard/>}>Add card</Route>





     </Routes>

   
  )
}

export default AllRoutes