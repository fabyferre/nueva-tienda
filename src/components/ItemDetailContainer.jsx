import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import "../components/css/ItemDetailContainer.css"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[detalle, setDetalle]= useState({})

    const {id} = useParams()


    useEffect(()=>{
        //llamar a la PROMISE
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[id])
  return (
    <>
      <ItemDetail detalle={detalle}/>
    </>
  )
}

export default ItemDetailContainer