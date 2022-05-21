import React from 'react'
import { Row } from 'react-bootstrap'
import Item from '../Item/Item'

export const ItemList = ({ productList }) => {
  const CardStyle = {
    display: "flex",
    justifycontent: "space-between",
    flexwrap: 'wrap',
    alingItems: 'center'

  }

  return (
      <Row style={CardStyle}>
        {productList.map((producto) => <Item producto={producto} key={producto.id} />)}
      </Row>
  )
}


