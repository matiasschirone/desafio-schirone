import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Checkout from "./views/Checkout/Checkout";
import Contactos from "./views/Contactos/Contactos";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
       <Navbar/>
       <Routes>
         <Route exact path="/"element={<Home/>}/>
         <Route exact path="/cart"element={<Cart/>}/>
         <Route exact path="/productos"element={<ItemListContainer title="Lista de Productos"/>}/>
         <Route exact path="/categoria/:categoria"element={<ItemListContainer title="Lista de Productos"/>}/>
         <Route exact path="/detalle/:id"element={<ItemDetailContainer/>}/>
         <Route exact path="/checkout"element={<Checkout/>}/>
         <Route exact path="/contactos"element={<Contactos/>}/>
       </Routes>
       </CartProvider>
    </BrowserRouter>
  );
}

export default App;
