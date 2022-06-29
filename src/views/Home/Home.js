import React, { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";
import { Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Home = (item, producto) => {
  const [products, setProducts] = useState([]);
  const navegar = useNavigate()
  const {nombre, imagen, precio, stock, categoria} = item

  useEffect(() => {
    const db = getFirestore();

    const q = query(collection(db, "products"), where("precio", "<=", 100000));
    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No hay productos");
      }
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    
      <div>
        <h1>Shop Musical</h1>
        <h2>Ofertas destacadas</h2>
      </div>
     
  );
};

export default Home;
