import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Accordions  from './components/Accor';
import Advertise from './components/Advertise';
import Topcategory from './components/Topcategory';
// import Cate from './components/Cate';
import Late1 from './components/Late1';
import Navbar1 from './components/Navbar1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar1/>
     <Accordions/>
     {/* <Cate/> */}
     <Advertise/>
     <Late1/>
     <Topcategory/>
    <Footer />
  </React.StrictMode>
);


