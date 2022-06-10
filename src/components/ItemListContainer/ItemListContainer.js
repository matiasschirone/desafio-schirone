import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getFirestore, getDocs, doc, where, query, collection, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom";

export default function ItemListContainer({ title }) {
    const [productList, setProductList] = useState([])
    const [cargando, setCargando] = useState(false)
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
        //producto singular

        const productRef = doc(db, "products", "5DpKlW2Mjv279Ezb9jhv")
        getDoc(productRef).then(snapshot => {
            if (snapshot.exists()) {
                console.log(snapshot.data())
            }
        })




    }, [categoria])


    {/*useEffect(() => {
        const db = getFirestore()
        if(categoria) {
            const q = query(
                collection(db, "productos"),
                where("categoria", "==", categoria)
            );
            getDocs(q).then((snapshots) => {
                if(snapshots.size === 0) {
                    console.log("No hay productos");
                }
                setProductList(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            });
        } else {
            const productsRef = collection(db, "productos");
            getDocs(productsRef).then((snapshots) => {
                if(snapshots.size === 0) {
                    console.log("No hay productos");
                }
                setProductList(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            });
        }
        
    }, [categoria]);*/}




    return (
        <div style={ItemStyle}>
            <h3>{title}</h3>
            {cargando ? <p>cargando....</p> : <ItemList productList={productList} />}
        </div>
    )
}