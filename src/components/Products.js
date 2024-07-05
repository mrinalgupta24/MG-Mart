import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul className='products-list'>
                {products.map(product => (
                    <li key={product.id}>
                        <div className='product-description'>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            {/* <p>{product.body}</p> */}
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                        <div>
                            <img src={product.image} alt={product.title} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
