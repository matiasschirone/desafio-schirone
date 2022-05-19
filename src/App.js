import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {browserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="miApp">
       <Navbar/>
       <h1>Music Shop</h1>
      <ItemListContainer title="Lista de Productos"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
