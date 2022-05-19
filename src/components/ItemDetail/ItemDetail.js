import React from 'react'
import { Card, Button } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'

const ItemDetail = ({item}) => {
  const {nombre, imagen, precio, categoria} = item
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
        </Card>
      </div>
  )
}

export default ItemDetail
