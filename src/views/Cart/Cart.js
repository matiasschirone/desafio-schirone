import { Button } from 'bootstrap'
import React, { useContext, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../components/context/CartContext'

const Cart = (item) => {
  const [cartListItem, setCartListItem] = useState([])
  const { nombre, imagen, precio } = item
  const volver = useNavigate()
  const { addToCart, removeFromCart, deleteAll,isInCart} = useContext(CartContext)



  return (
    <div className='Cart'>
      <div className='CartProducts'>
        <ListGroup>
          {cartListItem.map(item => <div key={item.id}>
            <Card.Img variant="top" src={imagen} alt={nombre} />
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
          </div>)}
        </ListGroup>
      </div>
      <div className='calcularProducts'>
        <span className='title'>subtotal</span>
        <span>total</span>
        <Button className='btn btn-danger' onClick={removeFromCart}>-</Button>
        <span className='btn btn-light px-5'></span>
        <Button className='btn btn-success' onClick={addToCart}>+</Button>
        <Button>terminar compra</Button>
        <Button btn btn-info onClick={()=>volver("/productos")}>volver a Productos</Button>
      </div>
    </div>
  )
}

export default Cart