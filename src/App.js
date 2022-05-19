import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/home";

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="/productos"element={<ItemListContainer title="Lista de Productos"/>}/>
         <Route path="/detalle"element={<ItemDetailContainer/>}/>
       </Routes>
       
      
      
    </BrowserRouter>
  );
}

export default App;
