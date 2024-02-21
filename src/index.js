import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Navigation';
import Landing from './Landing';
import Login from './Login';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Rgstrn } from './agency/Rgstrn';
import{ Navhome } from './agency/Navhome';
import{ Home } from './agency/Home';
import{ Adminhome } from './admin/Adminhome';
import { Adminnav } from './admin/Adminnav';
import { Mngrequest } from './admin/Mngrequest';
import { Resortsignup} from './admin/Resortsignup';
import { Agencysignup } from './admin/Agencysignup';
import { Booking } from './admin/Booking';
import { Adminpackage } from './admin/Adminpackage';
import { Viewpackage } from './agency/Viewpackage';
import { Detailvwpkg } from './agency/Detailvwpkg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/agencyRegister' element={<Rgstrn/>}/>
    </Route>

    <Route path='/agency' element={<Navhome/>}>
        <Route index element={<Home/>}></Route>
        <Route path='agencypkg' element={<Adminpackage/>}/>
        <Route path='vwpkg' element={<Viewpackage/>}/>
        <Route path='detailvwpkg' element={<Detailvwpkg/>}/>
    
    

    </Route>

    <Route path='/admin' element={<Adminnav/>}>
      <Route index element={<Adminhome/>}></Route>
       <Route path='request' element={<Mngrequest/>}/>
       <Route path='resortsign' element={<Resortsignup/>}/>
       <Route path='agencysign' element={<Agencysignup/>}/>
       <Route path='bookings' element={<Booking/>}/>
       <Route path='pkg' element={<Adminpackage/>}/>

    </Route>
    
    
    </Routes>
   </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
