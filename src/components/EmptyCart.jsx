import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center' }}>
        <h1 >Tu carrito esta vacio! </h1>
        <h3 style={{ margin:'40px',fontSize: '40px', height:'30vh'}}> ***Te invitamos a ver nuestros Menu***</h3>
        <Link style={{ margin:'40px'}} className='btn btn-warning btn-lg text-white' to='/'>Ir a Menu </Link>
    </div>
  )
}

export default EmptyCart