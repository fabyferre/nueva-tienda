import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import "../css/ItemDetailContainer.css"
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const [cargando, setCargando] = useState(false)
  const [invalid, setInvalid] = useState(null)
  const { id } = useParams()

  //FIREBASE
  useEffect(() => {
    setCargando(true)
    const docRef = doc(db, "productos", id)
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() })
        } else {
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [id])

  if (invalid) {
    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center' }}>
      <h1> El producto no existe! </h1>
      <Link  className='btn btn-warning btn-lg text-white m-5' to='/'>Volver a Menu</Link>
    </div>
  }
  return (
    <>
      {cargando ? <LoaderComponent /> : <ItemDetail detalle={detalle} />}
    </>
  )
}

export default ItemDetailContainer