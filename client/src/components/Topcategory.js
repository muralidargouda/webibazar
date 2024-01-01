import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Topcategory() {
    const [products, setproducts] = useState();
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:5000/product/getproducts'
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

        <div className='container md-3'>
            <div className='mb-3 hr'>
                <h3>  TOP CATEGORY</h3>
            </div>
            <div className='row'>

                {products ? (
                    products.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card '>
                                <img src="images/t1.jpg" className="img-fluid position-relative" alt="images" height={150} />
                            </div>
                        </div>
                    ))
                ) : (  <h1>Loading...</h1> )}
            </div>
        </div>
    );
}

export default Topcategory