import { Card, Button } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'
import { products } from '../data/productos'

export default function Item({ producto }) {
    console.log(producto)
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-4-col-md-12 mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} style={{ maxWidth: "100% !important" }} className="card-img-top" alt={producto.nombre} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            <p>stock{producto.stock}</p>
                            <p>precio{producto.precio}</p>
                        </Card.Text>
                        <AddButton stock={producto.stock} />
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div >
    )
}
