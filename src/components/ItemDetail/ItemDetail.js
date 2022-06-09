import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import { CartContext } from '../context/CartContext'



const ItemDetail = ({item}) => {
  const {addToCart} = useContext(CartContext); 

  const {nombre, imagen, precio, stock, categoria} = item

  const [goToCart, setGoToCart] = useState(false)

  const volver = useNavigate()


  const onAdd = (quantityToAdd) => {
    //console.log('agregar al carrito el producto')
    //console.log(quantityToAdd)
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
          {goToCart ? <Button btn btn-primary onClick={()=>volver("/Cart")}>ir al carrito</Button> : <ItemCounter initial={1} stock={stock} onAdd={onAdd}/>}
          <Button btn btn-info onClick={()=>volver("/productos")}>volver a Productos</Button>
        </Card>
      </div>
  )
}

export default ItemDetail
