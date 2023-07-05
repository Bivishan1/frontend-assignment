import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container">
            <h1>OnlineStore - Product Details</h1>
            <div className="card">
                <img src={product.image} className="card-img-top" alt="Product Image" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"><b>Price: </b>${product.price}</p>
                    <p className="card-text"> <b><u>Description:</u></b><br />{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails