import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Shop=()=>{


 const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products/getproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error from getting products:', error);
      }
    };
    getProducts();
  }, []);



    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-3">
                <div className="vertical-menu bg-success">
                        <a href="#" className="active" style={{color:"black", fontWeight:"bold"}}>
                            <FontAwesomeIcon icon={faBars} className='mx-3'/>All CATEGORY
                        </a>
                            <Link to="/shop"><h6>Accessories</h6></Link>
                            <Link to="/shop"><h6>Hydraulic</h6></Link>
                            <Link to="/shop"><h6>Lamp</h6></Link>
                            <Link to="/shop"><h6>Cryotronics</h6></Link>
                            <Link to="/shop"><h6>Induction</h6></Link>
                            <Link to="/shop"><h6>Avionics</h6></Link>
                            <Link to="/shop"><h6>Circuits</h6></Link>
                            <Link to="/shop"><h6>Electronics</h6></Link>
                            <Link to="/shop"><h6>Handwatch</h6></Link>
                 </div>

                 <div className="mt-5">
                      <table>
                        <tr>
                            <td class="fs-4">Filter By Price <hr/></td>
                        </tr>
                        <tr>
                            <tr class="fs-4"><input type="range"/></tr>
                            <tr><button className="btn btn-primary mt-3 mb-3">Filter</button></tr>
                            <tr class="fs-4">price:</tr>
                        </tr>
                      </table>
                 </div>

                 <div className="mt-5">
                      <table>
                        <tr>
                            <td class="fs-4">Filter By color<hr/></td>
                        </tr>
                        <tr>
                            <td>Black</td><td>(3)</td>
                        </tr>
                        <tr>
                            <td>Grey</td><td>(2)</td>
                        </tr>
                      </table>
                 </div>

                 <div className="mt-5">
                      <table>
                        <tr>
                            <td class="fs-4">Filter By Size<hr/></td>
                        </tr>
                        <tr>
                            <td>large</td><td>(3)</td>
                        </tr>
                        <tr>
                            <td>medium</td><td>(3)</td>
                        </tr>
                        <tr>
                            <td>small</td><td>(3)</td>
                        </tr>
                      </table>
                 </div>
                </div>

                <div className="col-9 ">
                      <h4>SHOP</h4>
                      <p>Home / Shop</p>

                      <p className="mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by 
                        injected humour or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem.</p>

                        <div className="row row-cols-1 row-cols-md-4">
                        {products.map((product, index) => {
                            

                         return(<div key={index} className="col-3 mb-4">
                            <Link to={`/productdisplay/${product._id}`} style={{textDecoration:"none",color:"black"}}>
                            <img src={product.imageUrl} alt={product.name} className="img-fluid" style={{ height: "200px", objectFit: "contain" }}/>
                            <h6 className="mt-4">{product.name}</h6>
                            <p>{`Rs.${product.price}`} <span className="mx-3" style={{backgroundColor:"whitesmoke"}}><FontAwesomeIcon icon={faShoppingBasket} className="cart" style={{height:"20px",width:"20px"}}/></span></p>
                            </Link>
                           </div>)
                           })}
                       </div>

                </div>

            </div>
        </div>
        

        </>
    )
}

export default Shop;