import React from 'react'
import { Card, Button } from "react-bootstrap"

export const ItemDetail = (itemProduct) => {
    <>
        return (
        <div>ItemDetail</div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>producto.title</Card.Title>
                <Card.Text>
                   <p>producto.thumbnail</p>
                   <p>producto.price</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        )
    </>
}

