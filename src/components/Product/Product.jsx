import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ id, name, description, image, price }) => {
  return (
    <Link to={`/products/${id}/ads`} className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </Link>
  );
};

export { Product };
