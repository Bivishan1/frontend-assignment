
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Home() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
        setIsLoading(false);
    }, []);


    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };


    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <h1>OnlineStore</h1>
                <Link to="/search">Go to Search Page</Link>
                <div className="cart-icon">
                    <Link to="/cart">
                        {/* <i className="fas fa-heart"></i> */}
                        <span>Items in cart : {cartItems.length}</span>
                    </Link>
                </div>
            </div>

            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="Product Image" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text"><b>Price:</b> ${product.price}</p>
                                <button className='btn btn-secondary' onClick={() => addToCart(product)}>Add to Cart</button>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Home