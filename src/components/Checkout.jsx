import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const [error, setError] = useState(null)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clear } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    console.log(buyer)
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address) {
            setError('Complete los campos')
        } else if (buyer.mail !== secondMail) {
            setError('Los correos no coinciden')
        } else {
            setError(null)
            let order = {
                comprador: buyer,
                compras: cart,
                total: total(),
                fecha: serverTimestamp()
            }

            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <>
            {
                orderId
                    ? <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>Muchas gracias por su compra</h1>
                        <h4 style={{ margin: '40px', fontSize: '40px', height: '30vh' }}>Su orden es: {orderId}</h4>
                        <Link style={{ margin: '20px' }} className='btn btn-warning text-white' to='/'>Volver a Home</Link>
                    </div>
                    : <div>
                        <h1>Complete con sus datos</h1>
                        {error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>}
                        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={finalizarCompra}>
                            <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' onChange={buyerData} />
                            <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' onChange={buyerData} />
                            <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' onChange={buyerData} />
                            <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' onChange={buyerData} />
                            <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' onChange={(e) => setSecondMail(e.target.value)} />
                            <button style={{ margin: '20px' }} type='submit' className='btn btn-warning text-white'>Completar Compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Checkout