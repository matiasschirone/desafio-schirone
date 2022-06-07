import React, { useContext } from "react";
import { MdOutlineShoppingCart} from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function CartWidget(){
    const {cart} =useContext(CartContext)
    const CartStyle={
        margin: 10,
        padding:10,
        
    }
    return(
        <div style={CartStyle}>
          <Link to="/Cart">
           <MdOutlineShoppingCart/> 
           <span className="badge">
               {cart.length}
           </span>
           </Link>
        </div>
    )
}
export default CartWidget;
