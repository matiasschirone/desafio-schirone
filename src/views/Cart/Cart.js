import React, { useContext, useEffect, useState, useReducer} from 'react'
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../components/context/CartContext'
import { AiFillDelete } from 'react-icons/ai'

const Cart = (item) => {
  const { nombre, imagen, precio } = item
  const volver = useNavigate()
  const { addToCart, removeFromCart, deleteAll, isInCart, cart } = useContext(CartContext)
  console.log(CartContext)

  const [total, setTotal] = useState()

  

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + Number(item.precio) * item.quantity, 0))
  }, [cart])

  return (
    <div className='Cart'>
      <div className='CartProducts'>
        <ListGroup>
          {cart.map(item => (
            <Row>
              <Col md={2}>{item.imagen}</Col>
              <Col md={1}>{item.nombre}</Col>
              <Col md={1}>{item.precio}</Col>
              <Col md={1}>
                <Button variant="danger" onClick={() => removeFromCart(item)}>-</Button>
              </Col>
              <Col md={1}><span>{item.quantity}</span></Col>
              <Col md={1}>
                <Button variant="success" onClick={() => addToCart(item)}>+</Button>
              </Col>
              <Col md={1}>
                <AiFillDelete
                  fontSize="20px"
                  style={{ curson: "poiter" }}
                  onClick={() => deleteAll(item)}
                />
              </Col>
            </Row>
          ))}
        </ListGroup>
      </div>
      <div className='calcularProducts'>
        <span className='title'>subtotal({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>total:${total} </span>
        <Button type='button' disable={cart.length === 0}>terminar compra</Button>
        <Button btn btn-info onClick={() => volver("/productos")}>volver a Productos</Button>
      </div>
    </div>
  )

}

export default Cart