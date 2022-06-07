import React, { useContext, useReducer } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../components/context/CartContext'

const Cart = (item, count) => {
  const { nombre, imagen, precio } = item
  const volver = useNavigate()
  const { addToCart, removeFromCart,isInCart} = useContext(CartContext)

  const initialState = {count};

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {addToCart};
      case 'decrement':
        return {removeFromCart};
      default:
        throw new Error();
    }
  }
  
  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
      <div className='CartProducts'>
        <ListGroup>
          {isInCart.map(item => <div key={item.id}>
            <Card.Img variant="top" src={imagen} alt={nombre} />
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
          </div>)}
        </ListGroup>
      </div>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <Button>terminar compra</Button>
        <Button btn btn-info onClick={()=>volver("/productos")}>volver a Productos</Button>
      </>
    );
  }



  {/*return (
    <>
    <div className='Cart'>
      <div className='CartProducts'>
        <ListGroup>
          {isInCart.map(item => <div key={item.id}>
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
    </>
  )*/}
}

export default Cart