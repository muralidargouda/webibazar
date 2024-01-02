import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/product/getproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [])

return (<>
   <h4> FEATURED PRODUCTS</h4>
    <div className="card-slider d-flex">
      <div className="card-container">
        {products.map((product, index) => (
          <div key={index} className="card  flex: 0 0 25%;
          box-sizing: border-box;
          p-3 text-center border-0">

{console.log(`http://localhost:5000/uploads/${product.imageUrl}`)}

            <img src={`http://localhost:5000/uploads/${product.imageUrl}`} alt={product.name} />
            <h6 className="mt-4">{product.name}</h6>
            <p>{`Rs.${product.price}`}</p>
          </div>
        ))}
        </div>
        </div>
        </>
  );
}
export default Featured;