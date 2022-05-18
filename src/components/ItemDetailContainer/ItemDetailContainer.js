import React, { useEffect, useState } from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {
    const [items,SetItem]= useState([])
    const [cargando, setCargando]= useState(false)

    const getItems=()=>{
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=guitarra')
        .then((response )=> SetItem(response.data.results[6]))
        .catch((error)=>console.log(error))
    }

    /*useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q=guitarra')
        .then((response )=> SetItem(response.data.results[6]))
        .catch((error)=>console.log(error))
        .finally(()=> setCargando(false))
    },[])*/
    const getProducts = new Promise ((resolve, reject) => {
        let condition = true
        setTimeout(()=> {
          if(condition){
              resolve(getItems)
          }else{
              reject('Algo salio mal')
          }
        }, 2000)
    })

    useEffect(()=>{
        setCargando(true)
        getProducts
        
        .then((res)=> SetItem(res))
        .catch((err)=> console.log(err))
        .finally(()=> setCargando(false))
    }, [])


    console.log(items);

    return (
        <div>
            <h3>Producto</h3>
           {cargando ? <p>cargando....</p> : <ItemDetail items={items}/>}
        </div>
    )
}
export default ItemDetailContainer
