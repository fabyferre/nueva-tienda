import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, removeItem, clear, total } = useContext(CartContext)
    const preConfirm = () => {
        Swal.fire({
            icon: 'question',
            title: '¿Estas seguro de borrar todo?',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
            } else if (result.isDenied) {
                Swal.fire({
                    icon: "success",
                    title: "Perfecto continua con tu compra!!!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <h1>Tu carrito 🛒</h1>
            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }} >
                            <img  src={compra.img} alt={compra.name} style={{ width: '9rem', border: '2px solid black' }} />
                            <span>{compra.name}</span>
                            <span>${compra.price},00</span>
                            <span>cantidad: {compra.quantity}</span>
                            <span>precio final: ${compra.quantity * compra.price},00</span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}> Eliminar </button>
                        </div>
                    ))
                }
            </div>
            <span style={{fontSize:'40px'}}>Total a pagar: ${total()},00</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', padding: '2rem' }}>
                <button className='btn btn-warning text-white' onClick={preConfirm}>Vaciar Carrito</button>
                <Link className='btn btn-primary' to='/checkout'>Terminar Compra</Link>
            </div>
        </div>
    )
}

export default CartView