import React, { useEffect, useState } from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [items,SetItem]= useState([])
    const [cargando, setCargando]= useState(false)

    useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q=guitarra')
        .then((response )=> SetItem(response.data.results[3,6]))
        .catch((error)=>console.log(error))
        .finally(()=> setCargando(false))
    },[])
    /*const getProducts = new Promise ((resolve, reject) => {
        let condition = true
        setTimeout(()=> {
          if(condition){
              resolve(SetItem)
          }else{
              reject('Algo salio mal')
          }
        }, 2000)
    })*/

    //console.log(item);

    return (
        <div>
            <h3>Producto</h3>
            <ItemDetail items={items}/>
        </div>
    )
}
export default ItemDetailContainer
