import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter'


const ItemDetail = ({item}) => {
  const {addToCart} = useContext(CartContext); 
  const {nombre, imagen, precio, stock, categoria} = item
  const [goToCart, setGoToCart] = useState(false)
  const volver = useNavigate()
  const onAdd = (quantityToAdd) => {
    setGoToCart(true)
    addToCart(item, quantityToAdd)   
  }
  
  return (
      <div className="container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} alt={nombre} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              {categoria}
            </Card.Text>
            <Card.Text>
              {precio}
            </Card.Text>
          </Card.Body>
          {goToCart ? <Button variant='primary' onClick={()=>volver("/Cart")}>ir al carrito</Button> : <ItemCounter initial={1} stock={stock} onAdd={onAdd}/>}
          <Button variant='info' onClick={()=>volver("/productos")}>volver a Productos</Button>
        </Card>
      </div>
  )
}

export default ItemDetail
