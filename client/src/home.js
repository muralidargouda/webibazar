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
// import { home } from '/images/open.jpeg';
const Home = () => {
    return(
        <div>
        <TopNav/>
        <Search/>
       <Navbar1/>
       <Accordions/>
       <Advertise/>
       <Topcategory/>
       <Latest/>
       <Featured/>
      <Footer/>
      </div>
    )
}
export default Home;