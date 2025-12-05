import "../css/ItemCount.css"
import { useState } from 'react'



const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)


  const sumar = () => {
    if (count < stock) {

      setCount(count + 1)
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const ejecutarCompra = () => {
    onAdd(count)
  }


  return (
    <>
      {
        stock > 0
          ? <>
            <div className='counter-container button' >
              <button className='btnresta ' onClick={restar}> - </button>
              <h3 className='count' >{count}</h3>
              <button className='btnsumar ' onClick={sumar}> + </button>
            </div>
            <button onClick={ejecutarCompra} disabled={count === 0 || stock === 0}>Agregar al Carrito</button>
          </>
          : <h1>Lo sentimos, por el momento no hay unidades disponibles</h1>


      }
    </>
  )
}

export default ItemCount