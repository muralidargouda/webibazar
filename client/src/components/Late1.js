import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Late1() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:5000/product/getproducts/'
                );
                const data = await response.data;
                setproducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        getproducts();
    }, []);


    return (

        <div className='container md-3 '>
            <div className='mb-3 mt-3'>
                <h3>  LATEST PRODUCTS</h3>

            </div>
            <div className='row'>
                {products ? (
                    products.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card border-0'>
                                <div className='card-body '>
                                    <img src={"https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/27-300x298.jpg"} className="img-fluid position-relative" alt="images" height={150} />
                                    
                                    <div> 
                                    <i class="fa-regular fa fa-star"></i>
                                    <i class="fa-regular fa fa-star"></i>
                                    <i class="fa-regular fa fa-star"></i>
                                    <i class="fa-regular fa fa-star"></i>
                                         </div>
                                        <div className='card-title fs-5 fw-bold'>
                                   
                                        {item.name}
                                        <div className='fw-bold'>
                                          ${item.price}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
}

export default Late1