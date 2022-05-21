import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";




function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route exact path="/"element={<Home/>}/>
         <Route exact path="/Cart"element={<Cart/>}/>
         <Route exact path="/productos"element={<ItemListContainer title="Lista de Productos"/>}/>
         <Route exact path="/categoria/:categoria"element={<ItemListContainer title="Lista de Productos"/>}/>
         <Route exact path="/detalle/:id"element={<ItemDetailContainer/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
