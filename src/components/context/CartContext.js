import React, { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext


const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  //console.log(cart)
  const addToCart = (item, count) => {
    if (isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          cartItem.quantity++
        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, { ...item, quantity: +count }])
    }
  }

  const discountProduct = (item) => {
    if (item.quantity === 1) {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id)
      setCart(newCart)
    } else {
      const newCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          cartItem.quantity--
        }
        return cartItem
      })
      setCart(newCart)
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart)
  }

  const deleteAll = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc += item.quantity, 0)
  }

  const cartTotal = (isInCart) => {
    return cart.reduce((acc, item) => acc + Number(item.precio) * item.quantity, 0)
  }

  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      discountProduct,
      cart,
      cartQuantity,
      cartTotal,
    }}>{children}</Provider>
  )
}

export { CartContext, CartProvider }