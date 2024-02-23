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
import { Addpkg } from './agency/Addpkg';
import { Addpkg1 } from './agency/Addpkg1';
import { Cstmrenqry } from './agency/Cstmrenqry';
import { Vwcstrenqry } from './agency/Vwcstrenqry';
import { Assignguide } from './agency/Assignguide';
import { Detlguide } from './agency/Detlguide';
import { Guidcnfrmtn } from './agency/Guidcnfrmtn';
import { Rgstrguide } from './Rgstrguide';
import { Resorthome } from './resort/Resorthome';
import { Navresort } from './resort/Navresort';
import { Rgstrresort } from './Rgstrresort';
import { Regresort1 } from './Regresort1';
import { Regstrresort2 } from './Regstrresort2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/agencyRegister' element={<Rgstrn/>}/>
     <Route path='/guideregister' element={<Rgstrguide/>}/>
     <Route path='/regresort' element={<Rgstrresort/>}/>
     <Route path='/regresort1' element={<Regresort1/>}/>
     <Route path='/regresort2' element={<Regstrresort2/>}/>
    </Route>

    <Route path='/agency' element={<Navhome/>}>
        <Route index element={<Home/>}></Route>
        <Route path='agencypkg' element={<Adminpackage/>}/>
        <Route path='vwpkg' element={<Viewpackage/>}/>
        <Route path='detailvwpkg' element={<Detailvwpkg/>}/>
        <Route path='addpkg' element={<Addpkg/>}/>
        <Route path='addpkg1' element={<Addpkg1/>}/>
        <Route path='cstmrenqry' element={<Cstmrenqry/>}/>
        <Route path='detailcstrenqry' element={<Vwcstrenqry/>}/>
        <Route path='assignguide' element={<Assignguide/>}/>
        <Route path='detailguide' element={<Detlguide/>}/>
        <Route path='cnfrmguide' element={<Guidcnfrmtn/>}/>
    
    

    </Route>

    <Route path='/admin' element={<Adminnav/>}>
      <Route index element={<Adminhome/>}></Route>
       <Route path='request' element={<Mngrequest/>}/>
       <Route path='resortsign' element={<Resortsignup/>}/>
       <Route path='agencysign' element={<Agencysignup/>}/>
       <Route path='bookings' element={<Booking/>}/>
       <Route path='pkg' element={<Adminpackage/>}/>

    </Route>
    <Route>
      <Route path='/resort' element={<Navresort/>}>
      <Route index element={<Resorthome/>}></Route>
    </Route>
    </Route>
    
    
    </Routes>
   </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
