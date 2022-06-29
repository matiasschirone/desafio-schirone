import React from 'react'
import { Col } from 'react-bootstrap'

const CompletedOrder = ({orderId, order}) => {

  return (
    <>
    <Col className='ordenCompra'>
    <h2>Orden completada</h2>
    <p>Sus datos son :</p>
    <ul>
        <li><b>N de Orden : {orderId}</b></li>
        <li>Nombre : {order.buyer?.name}</li>
        <li>Apellido : {order.buyer?.lastname}</li>
        <li>Email : {order.buyer?.email}</li>
        <li>Telefono : {order.buyer?.phone}</li>
    </ul>
    </Col>
    </>
  )
}

export default CompletedOrder