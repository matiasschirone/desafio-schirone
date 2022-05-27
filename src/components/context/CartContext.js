import React, { createContext, useState } from "react";

const CartContext = createContext();
const {Provider} = CartContext


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = ({item})  =>{
        setCart([ ...cart, item])
    }

    const removeFromCart = () =>{

    }

    const deleteAll = () => {

    }

    const isInCart = () => {

    }

    return(
        <Provider value={{
            addToCart,
            removeFromCart,
            deleteAll,
            isInCart,
            cart,
        }}>{children}</Provider>
    )
}

export {CartContext, CartProvider}