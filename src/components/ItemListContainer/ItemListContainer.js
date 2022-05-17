import React, { useEffect, useState } from "react";
import AddButton from "../AddButton/AddButton"
import { ItemList } from "../ItemList/ItemList";
import { products } from "../data/productos";
import axios from "axios";

export default function ItemListContainer({ title }) {

    const [productList, setProductList]= useState([])

    const [cargando, setCargando]= useState(false)

    const ItemStyle = {
        margin: 10,
        padding: 10,
        display: "flex-end",
        justifycontent: "space-between",
    }

    const getProducts = new Promise ((resolve, reject) => {
        let condition = true
        setTimeout(()=> {
          if(condition){
              resolve(products)
          }else{
              reject('Algo salio mal')
          }
        }, 2000)
    })

    
    useEffect(()=>{
        setCargando(true)
        getProducts
        
        .then((res)=> setProductList(res))
        .catch((err)=> console.log(err))
        .finally(()=> setCargando(false))
    }, [])

    
    return (
        <div style={ItemStyle}>
            <h3>{title}</h3>
            {cargando ? <p>cargando....</p> : <ItemList productList={productList}/>}   
        </div>
    )
}