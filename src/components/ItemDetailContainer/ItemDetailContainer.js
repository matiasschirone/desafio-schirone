import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts } from "../data/productos"
import { useParams } from "react-router-dom"
import {getFirestore, doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = (categoria, setProductList) => {
    const [item,setItem]= useState({})
    const [carganding, setCarganding]= useState(false)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const productRef = doc(db, "products", categoria)
        getDoc(productRef).then(snapshot => {
            if (snapshot.exists()) {
                setProductList({id: snapshot.id, ...snapshot.data()})
            }
        })
    }, [categoria])
   

    return (
        <div>
            <h3>Producto</h3>
            {carganding ? <p>carganding....</p> : <ItemDetail item={item}/>}
        </div>
    )
}
export default ItemDetailContainer
