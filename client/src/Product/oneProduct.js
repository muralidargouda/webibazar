import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';


function oneProduct(addToCart) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:5000/product/getProductById/${productId}`)

            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [productId]);

    
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar1/>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='card border-0' style={{ height: "500px" }}>
                            <img alt='' src='' />
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='card' style={{ height: "500px" }}>
                            <div className='card-body'>
                                <h1>{product.pname}</h1>
                                <p>Description: {product.description}</p>
                                <p>Price: ${product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default oneProduct;