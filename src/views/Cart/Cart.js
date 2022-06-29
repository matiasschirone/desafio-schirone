import React, { useContext, useEffect, useState} from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../components/context/CartContext'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  
  const volver = useNavigate()
  const { addToCart, removeFromCart, deleteAll, isInCart, discountProduct, cart} = useContext(CartContext)
  console.log(CartContext)

  const [total, setTotal] = useState(isInCart)

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + Number(item.precio) * item.quantity, 0))
  }, [cart])

  return (
   cart.length
   ? <div className='Cart'>
   <div className='CartProducts'>
     <ListGroup>
       {cart.map(item => (
         <Row className='productPay'>
           <Col md={3}><img src={item.imagen} alt={item.nombre}/></Col>
           <Col md={1}>{item.nombre}</Col> 
           <Col md={1}>{item.precio}</Col>
           <Col md={1}>
             <Button variant="danger" onClick={()=>discountProduct(item)}>-</Button>
           </Col>
           <Col md={1}><span>{item.quantity}</span></Col>
           <Col md={1}>
             <Button variant="success" onClick={() => addToCart(item, 1)}>+</Button>
           </Col>
           <Col md={1}>
             <AiFillDelete
               fontSize="20px"
               style={{ cursor: "pointer" }}
               onClick={() => removeFromCart(item.id)}
             />
           </Col>
         </Row>
       ))}
     </ListGroup>
   </div>
   <div className='calcularProducts'>
     
     <span style={{ fontWeight: 700, fontSize: 20 }}>total:${total} </span>
     <Button type='button' onClick={()=>volver('/checkout')}>terminar compra</Button>
     <Button variant='danger' onClick={deleteAll}>borrar todo</Button>
     <Button btn btn-info onClick={() => volver("/productos")}>volver a Productos</Button>
   </div>
 </div>
 : <div>
  <h2>No hay productos en el carrito</h2>
  <Button btn btn-info onClick={() => volver("/productos")}>Ir a comprar</Button>
 </div>
  )

}

export default Cart

