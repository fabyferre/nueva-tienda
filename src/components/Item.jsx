import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
    return (

        <div className="product-card">
            <img src={prod.img} alt={prod.name} className="product-image" />
            <p className="product-description">{prod.description}</p>

            <div className="card-content">

                <div className="header-info">
                    <h2 className="product-name">{prod.name}</h2>
                </div>

                <div className="product-value">
                    <p className="product-price">$ {prod.price}.00</p>
                </div>

                <div className="button-container">
                    <Link className="add-to-cart-button" to={`/item/${prod.id}`}>Ver Mas</Link>
                </div>
            </div>
        </div>
    )
}

export default Item




