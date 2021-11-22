import React from 'react';
import './Product.css';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
            <div className="Products">
                <div className='image-container'>
                    <img className="small"  src={product.image} alt={product.name}></img>
                    <h3>{product.name}</h3>
                    <div className='price'
                    >${product.price}</div>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart </button>
                </div>
                </div>
            </div>   
  )
}
