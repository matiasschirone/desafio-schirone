import React, { useEffect, useState } from "react"
import axios from "axios"
import { ItemDetail } from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [itemProduct, setItemProduct] = useState([])


    const getItem = () => {
        axios.get("https://api.mercadolibre.com/sites/MLA/search?q=banjo").then((res) => {
             setItemProduct(res.data.results[5])
         })
     }

     const newItem = new Promise ((resolve, reject) => {
         let condition = true
         setTimeout(()=>{
             if(condition){
                 resolve(getItem)
             }else{
                 reject('no me sale')
             }
         },3000)
     })

     //console.log(newItem)

    useEffect(()=>{
        newItem
        .then((res)=> setItemProduct(res))
        .catch((err)=> console.log(err))
    }, []) 

    return(
        <div>
        <h3></h3>
        <ItemDetail itemProduct={itemProduct}/>
        </div>
    )
}
export default ItemDetailContainer
