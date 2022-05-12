import React from 'react'
import Item from '../Item/Item'

export const ItemList = ({ productList }) => {
  const CardStyle = {
    //display: "flex",
    justifycontent: "space-between",
    flexwrap: 'wrap',
    alingItems: 'center'

  }


  return (
    <>
      <div style={CardStyle}>
        {productList.map((producto, id) => <Item producto={producto} key={producto.id} />)}
      </div>
    </>
  )
}


