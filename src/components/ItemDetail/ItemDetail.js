import React from 'react'
import { Card, Button } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'

const ItemDetail = ({productDetail}) => {
  console.log(productDetail)
  return (
    
      <div classname="container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={productDetail.imagen} alt={productDetail.nombre} />
          <Card.Body>
            <Card.Title>{productDetail.nombre}</Card.Title>
            <Card.Text>
              <p>nombre{productDetail.nombre}</p>
              <p>precio{productDetail.precio}</p>
            </Card.Text>
            <Button variant="primary">comprar</Button>
          </Card.Body>
        </Card>
      </div>
   
  )
}

export default ItemDetail
