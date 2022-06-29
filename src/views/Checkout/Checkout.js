import React, { useContext } from 'react'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CompletedOrder from '../CompletedOrder/CompletedOrder'

const Checkout = () => {
    const [data, setData] = React.useState()
    console.log(data)
    const [orderId, setOrderId] = React.useState(false)
    console.log(orderId)
    const { cart, deleteAll } = useContext(CartContext)
    const navegar = useNavigate()

    const order = {
        buyer: data,
        items: cart,
        status: "generada",
        date: Timestamp.fromDate(new Date()),
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
            deleteAll()
        })
    }


    return (
        <div className="checkout">
            {!orderId
            ?<Form onSubmit={handleSubmit}>
                <h1>Checkout</h1>
                <Form. Group id='userName'>
                <Form. Control
                    requiered
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                </Form. Group>
                <Form. Group id='lastName'>
                <Form. Control
                    requiered
                    type="text"
                    name="lastname"
                    placeholder="lastName"
                    onChange={handleChange}
                />
                </Form. Group>
                <Form. Group id='email'>
                <Form. Control
                    requiered
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                </Form. Group>
                <Form. Group id='phone'>
                <Form. Control
                    required
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />
                </Form. Group>
                <Button variant="primary" type="submit">            
                 Finalizar compra
                </Button>
            </Form>
            :<>
            <div>
            <CompletedOrder orderId={orderId} order={order} />
            <Button variant='info' onClick={()=>navegar('/')}>volver</Button>
            </div>
            </>}
        </div>
    )
}

export default Checkout