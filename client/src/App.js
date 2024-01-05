import React from 'react';
import './index.css';
import Footer from './components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Accordions  from './components/Accor';
import Advertise from './components/Advertise';
import Topcategory from './components/Topcategory';
import Navbar1 from './components/Navbars/Navbar1';
import Latest from './components/Latest';
import TopNav from './components/Navbars/TopNav';
import Search from './components/Navbars/Search1';
import Featured from './Product/fetchpro';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import Shop from './shop/shop';

const App = ()=>{

    return(

        <div className="">
    <BrowserRouter>
    <Routes>
        
         <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
    </Routes>
    </BrowserRouter>
        </div>
    )
}
export default App;