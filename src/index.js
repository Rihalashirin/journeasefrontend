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
import { Viewagency } from './admin/Viewagency';
import { Viewresort } from './admin/Viewresort';
import { Addpkg3 } from './agency/Addpkg3';
import { Enqryfinal } from './agency/Enqryfinal';
import { Confrmbooking } from './agency/Confrmbooking';
import { Mngbooking } from './agency/Mngbooking';
import { Resortmngenqry } from './resort/Resortmngenqry';
import { Vwbookingresort } from './resort/Vwbookingresort';
import { Resortmngprice } from './resort/Resortmngprice';
import { Navguide } from './guide/Navguide';
import { Guidehome } from './guide/Guidehome';
import { Guidemngenqry } from './guide/Guidemngenqry';
import { Guidemngwage } from './guide/Guidemngwage';
import { Photosupload } from './guide/Photosupload';
import { Navuser } from './user/Navuser';
import { Userhome } from './user/Userhome';
import { Plantrip } from './user/Plantrip';
import { Planpkg } from './user/Planpkg';
import { Vwpkgdetail } from './user/Vwpkgdetail';
import { Selectresort } from './user/Selectresort';
import { Uservwresortdetail } from './user/Uservwresortdetail';
import { Selectguide } from './user/Selectguide';
import { Selectadventure } from './user/Selectadventure';
import { Notification } from './user/Notification';
import { Vwnotificatn } from './user/Vwnotificatn';
import { Userpayment } from './user/Userpayment';
import { Paysuccess } from './user/Paysuccess';

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

    

     <Route path='/guide' element={<Navguide/>}>
      <Route index element={<Guidehome/>}/>
      <Route path='guidemngenqry' element={<Guidemngenqry/>}/>
      <Route path='guidemngwage' element={<Guidemngwage/>}/>
      <Route path='photoupload' element={<Photosupload/>}/>

      </Route>
      

      <Route path='/user' element={<Navuser/>}>
        <Route index element={<Userhome/>}/>
        <Route path='plantrip' element={<Plantrip/>}/>
        <Route path='planpkg' element={<Planpkg/>}/>
        <Route path='vwdetailpkg' element={<Vwpkgdetail/>}/>
        <Route path='Accomodatn' element={<Selectresort/>}/>
        <Route path='vwresortdet' element={<Uservwresortdetail/>}/>
        <Route path='chooseguide' element={<Selectguide/>}/>
        <Route path='selectadventure' element={<Selectadventure/>}/>
        <Route path='notificatn' element={<Notification/>}/>
        <Route path='vwnotificatn' element={<Vwnotificatn/>}/>
        <Route path='userpay' element={<Userpayment/>}/>
        <Route path='paysucccess' element={<Paysuccess/>}/>

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
        <Route path='adventure' element={<Addpkg3/>}/>
        <Route path='enqryfinal' element={<Enqryfinal/>}/>
        <Route path='cnfrmbooking' element={<Confrmbooking/>}/>
        <Route path='managebooking' element={<Mngbooking/>}/>
    
    

    </Route>

    <Route path='/admin' element={<Adminnav/>}>
      <Route index element={<Adminhome/>}></Route>
       <Route path='request' element={<Mngrequest/>}/>
       <Route path='resortsign' element={<Resortsignup/>}/>
       <Route path='agencysign' element={<Agencysignup/>}/>
       <Route path='bookings' element={<Booking/>}/>
       <Route path='pkg' element={<Adminpackage/>}/>
       <Route path='vwandacceptagency' element={<Viewagency/>}/>
       <Route path='vwacceptresort' element={<Viewresort/>}/>

    </Route>
    <Route>
      <Route path='/resort' element={<Navresort/>}>
      <Route index element={<Resorthome/>}></Route>
      <Route path='resortmngenqry' element={<Resortmngenqry/>}/>
      <Route path='resortvwbooking' element={<Vwbookingresort/>}/>
      <Route path='resortenterprice' element={<Resortmngprice/>}/>
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
