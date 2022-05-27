import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../data/productos";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ title }) {
    const [productList, setProductList]= useState([])
    const [cargando, setCargando]= useState(false)
    const {categoria} = useParams()

    const ItemStyle = {
        margin: 10,
        padding: 10,
        display: "flex-end",
        justifycontent: "space-between",
    }

    useEffect(()=>{
        setCargando(true)
        getProducts      
        .then((res)=>{
            if(!categoria){
                setProductList(res)
            }else{
                setProductList(res.filter((prod)=>prod.categoria === categoria))
            }
        }) 
        .catch((err)=> console.log(err))
        .finally(()=> setCargando(false))
    }, [categoria])
//console.log(productList)
    
    return (
        <div style={ItemStyle}>
            <h3>{title}</h3>
            {cargando ? <p>cargando....</p> : <ItemList productList={productList}/>}   
        </div>
    )
}