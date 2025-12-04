import { FaShoppingCart } from "react-icons/fa";
import { Badge } from 'react-bootstrap'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'

const CartWidgetRI = () => {
    const { cartQuantity, cart } = useContext(CartContext)
    return (
        <>
            <div>
                <Link  to='/cart'>
                <FaShoppingCart color={'white'} fontSize={'1.3rem'} />
                {cart.length > 0 && <Badge pill bg="danger">{cartQuantity()}</Badge>}
                </Link>
            </div>
        </>
    )
}

export default CartWidgetRI