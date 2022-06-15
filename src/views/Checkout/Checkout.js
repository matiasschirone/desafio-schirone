import React, { useContext } from 'react'
import { getFirestore, doc, getDoc, updateDoc, addDoc, runTransaction, collection, } from 'firebase/firestore'
import { CartContext } from '../../components/context/CartContext'

const Checkout = () => {
    const [data, setData] = React.useState()
    console.log(data)
    const [orderId, setOrderId] = React.useState()
    console.log(orderId)
    const { cart } = useContext(CartContext)

    const order = {
        buyer: data,
        items: cart,
        total: 100,
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        const productsCollection = collection(db, "productos")
        await addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
            updateProducts()
        })
    }


    const updateProducts = async () => {
        const db = getFirestore()
        cart.forEach(async (item) => {
            const productRef = doc(db, `productos`, item.id)
            await runTransaction(db, async (transaction) => {
                const transfDoc = await transaction.get(productRef);
                if (!transfDoc.exists()) {
                    console.error("El documento no existe")
                }
                const newStock = transfDoc.data().stock - item.quantity;
                transaction.update(productRef, { stock: newStock });
            });
        })
    }

    return (
        <div className="checkout">
            <form onSubmit={handleSubmit}>
                <h1>Checkout</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Finalizar compra"
                />
            </form>
        </div>
    )
}

export default Checkout