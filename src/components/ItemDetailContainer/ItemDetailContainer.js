import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item,setItem]= useState({})
    const {id} = useParams()

    useEffect(()=>{

        const db = getFirestore()

        const productRef = doc(db, "products", id)
        getDoc(productRef).then(snapshot => {
            if (snapshot.exists()) {
                console.log(snapshot.id)
                console.log(snapshot.data())
                console.log({id: snapshot.id, ...snapshot.data()})
                setItem({id: snapshot.id, ...snapshot.data()})
            }
        })  
    }, [])
   
    return (
        <div>
            <h3>Producto</h3>
            <ItemDetail item={item}/>
        </div>
    )
}
export default ItemDetailContainer
