import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getFirestore, getDocs, where, query, collection } from "firebase/firestore"
import { useParams } from "react-router-dom";

export default function ItemListContainer({ title }) {
    const [productList, setProductList] = useState([])
    const { categoria } = useParams()

    const ItemStyle = {
        margin: 10,
        padding: 10,
        display: "flex-end",
        justifycontent: "space-between",
    }

    useEffect(() => {

        const db = getFirestore()

        if (categoria) {
            const q = query(collection(db, "products"), where("categoria", "==", categoria))
            getDocs(q).then(snapshots => {
                if (snapshots.size == 0) {
                    console.log("no hay productos")
                }
                setProductList(snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
        } else {
            const productsRef = collection(db, "products")
            getDocs(productsRef).then(snapshots => {
                if (snapshots.size == 0) {
                    console.log("no hay productos")
                }
                setProductList(snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
        }      
    }, [categoria])

    return (
        <div style={ItemStyle}>
            <h3>{title}</h3>
            <ItemList productList={productList} />
        </div>
    )
}