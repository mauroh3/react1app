import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = ({cantidad}) => {
        return <div> <FiShoppingCart /> {cantidad}</div>

}

export default CartWidget