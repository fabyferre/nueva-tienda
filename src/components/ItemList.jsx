import React from 'react'
import Item from './Item'
import "../components/css/ItemList.css"

const ItemList = ({data}) => {
  return (
    <div className="product-grid">
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList