import React, { useEffect, useState } from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts } from "../data/productos"

const ItemDetailContainer = () => {
    const [productDetail,setProductDetail]= useState({})

    const [carganding, setCarganding]= useState(false)

    useEffect(()=>{
        setCarganding(true)
        getProducts
        .then((res)=> setProductDetail(res.find((item) => item.id === 4)))
        .catch((err)=> console.log(err))
        .finally(()=> setCarganding(false))
    }, [])
    console.log(productDetail);

    return (
        <div>
            <h3>Producto</h3>
            {carganding ? <p>carganding....</p> : <ItemDetail productDetail={productDetail}/>}
        </div>
    )
}
export default ItemDetailContainer
