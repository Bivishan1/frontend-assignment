import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        // Convert search terms to product IDs
        const productIds = await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                return data
                    .filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
                    .map((product) => product.id);
            });

        // Fetch products that match the product IDs
        const matchingProducts = await Promise.all(
            productIds.map((productId) =>
                fetch(`https://fakestoreapi.com/products/${productId}`)
                    .then((response) => response.json())
            )
        );

        setResults(matchingProducts);

    };

    return (
        <div className="container">
            <h1>OnlineStore - Search</h1>
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search products" value={query} onChange={e => setQuery(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            <div className="row">
                {results.map(product => (
                    <div key={product.id} className="col-md-4">
                        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt="Product Image" />
                                <div className="card-body">

                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>


        </div>

        // new 

    )
}

export default Search