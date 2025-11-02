import "../components/css/ItemCount.css"
import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount]= useState(1)
    const sumar =()=> {
        if (count < stock){ 
        setCount(count + 1)
        }
    }
    const restar =()=> {
       if (count > 0) {
        setCount(count - 1);
    }
    }
  return (
    <div className='counter-container'>
        <button className='btnresta' onClick={restar}> - </button>
        <span className="count"> {count} </span>
        <button className='btnsumar' onClick={sumar}> + </button>
    </div>
  )
}

export default ItemCount