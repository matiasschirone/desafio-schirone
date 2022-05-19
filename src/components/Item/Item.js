import { Card } from 'react-bootstrap'
import AddButton from '../AddButton/AddButton'
import { products } from '../data/productos'
import { useNavigate } from 'react-router-dom'

export default function Item({ producto }) {
   const navegar= useNavigate();

    return (
        <div className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} style={{ maxWidth: "100% !important" }} className="card-img-top"  />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.stock}</Card.Text>
                    <Card.Text>{producto.precio}</Card.Text>
                    <AddButton stock={producto.stock}/>
                </Card.Body>
           <button className="btn btn.success" onClick={()=>navegar(`/detalle/${producto.id}`)}>Ver mas</button>
        </div>

    )
}
