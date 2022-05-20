import React from 'react'
import { Card, Button } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'
import { useNavigate } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemDetail = ({item}) => {
  const {nombre, imagen, precio, stock, categoria} = item
  const volver = useNavigate()
  const onAdd = () => {
    console.log('agregado al carrito')
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
          <ItemCounter initial={1} stock={stock} onAdd={onAdd}/>
          <button btn btm-info onClick={()=>volver("/productos")}>volver a Productos</button>
        </Card>
      </div>
  )
}

export default ItemDetail
