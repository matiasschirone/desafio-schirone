import React, { useEffect, useState } from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts } from "../data/productos"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({setCartListItem, cartListItem}) => {
    const [item,setItem]= useState({})
    const [carganding, setCarganding]= useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setCarganding(true)
        getProducts
        .then((res)=> setItem(res.find((item) => item.id === Number(id))))
        .catch((err)=> console.log(err))
        .finally(()=> setCarganding(false))
    }, [])
   

    return (
        <div>
            <h3>Producto</h3>
            {carganding ? <p>carganding....</p> : <ItemDetail item={item} setCartListItem={setCartListItem} cartListItem={cartListItem} />}
        </div>
    )
}
export default ItemDetailContainer
