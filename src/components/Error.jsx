import React from 'react'
import { Link } from 'react-router-dom'



const Error = () => {
  return (
    <div>
        <h1> Error: No se encuentra esa ruta</h1>
        <div className='button-contai'>
        <Link className='button-error' to='/'>Volver a HOME</Link>
        </div>
        <div className="red-img">
          <img src="../problemas-de-red.jpg" alt="problemas con la red"/>
        </div>
</div>
  )
}

export default Error