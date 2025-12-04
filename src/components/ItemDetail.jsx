import { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ detalle }) => {
  const { cart, addItem } = useContext(CartContext)


  const [purchase, setPurchase] = useState(false)
 

  const onAdd = (cantidad) => {
    setPurchase(true)
    addItem(detalle, cantidad)
  }


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
        <p>STOCK DISPONIBLE:{detalle.stock}</p>
      </div>
      {purchase ? <Link className='btn btn-warning text-white' to='/cart'>Terminar compra</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
      <div>

      </div>

    </div>
  )
}

export default ItemDetail