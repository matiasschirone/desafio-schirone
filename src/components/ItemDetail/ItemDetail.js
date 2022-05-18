import React from 'react'
import { Card, Button } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'

const ItemDetail = ({ items }) => {
  console.log(items)
  return (

    <div>
      <div classname="container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://http2.mlstatic.com/D_759352-MLA47962731957_102021-I.jpg" alt={items.Title} />
          <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>
              <p>{items.price}</p>
            </Card.Text>
            <Button variant="primary">comprar</Button>
          </Card.Body>
        </Card>
      </div>
    </div>


  )
}

export default ItemDetail
