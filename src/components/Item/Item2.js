import React from 'react'
import { Card, Button } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

export default function Item2({product }) {
    //console.log(producto)
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-4-col-md-12 mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.imagen} style={{ maxWidth: "100% !important" }} className="card-img-top" alt={product.Title} />
                    <Card.Body>
                        <Card.Title>{product.Title}</Card.Title>
                        <Card.Text>
                            <p>stock{product.stock}</p>
                            <p>precio{product.precio}</p>
                        </Card.Text>
                        <AddButton stock={product.stock} />
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div >
    )
}

