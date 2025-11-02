import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({ detalle }) => {
  return (

    <div className="product-detail-card">
      <div>
        <h1>{detalle.name}</h1>
        <img src={detalle.img} alt={detalle.name} />
      </div>
      <div>
        <p>{detalle.description}</p>
        <p> $ {detalle.oldPrice}.00 Precio Anterior</p>
        <p> $ {detalle.price}.00 Precio de Lista</p>
        <p> Descuento {detalle.discountPercentage} % en Efectivo </p>
        <p>Precio Final con Descuento ${detalle.finalPrice} </p>
        <p>{detalle.installments} Financiado</p>
      </div>
      <div>
        <h5>Material: {detalle.material}</h5>
        <h5>Color: {detalle.color}</h5>
      </div>
      {/* <ItemCount /> */}
      <div>

      </div>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail