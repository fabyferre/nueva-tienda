import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito matero')) || []
export const CartProvider = ({children})=>{
    const [cart, setCart]=useState(carritoLS)


    useEffect(()=>{
        localStorage.setItem('carrito matero', JSON.stringify(cart))
    },[cart])
    
    const addItem = (item, qty) =>{
        if(isInCart(item.id)){
            
            setCart(
                cart.map((prod)=> {
                if(prod.id === item.id){
                   
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    
                    return prod
                }
            })
            )
        }else{
           
            setCart([...cart, {...item, quantity:qty}])
        }
      

    }

    //elimine un item del carrito

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //borre todo el carrito
    const clear = () => {
        setCart([])
    }

    //devuelva un bool si ese item existe o no en el carrito

    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }


    //total
    const total = ()=>{
        return cart.reduce((acc, prod)=>(acc += prod.quantity * prod.price),0)
    }

    
    //cantidad total
    const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.quantity,0)
    }

    const itemQuantity = (id)=>{
        const itemInCart = cart.find((prod)=> prod.id === id)

        if(itemInCart){
            return itemInCart.quantity
        }else{
            return 0
        }
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, total, cartQuantity, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}