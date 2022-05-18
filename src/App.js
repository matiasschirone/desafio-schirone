import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="miApp">
       <Navbar/>
       <h1>Music Shop</h1>
       <ItemDetailContainer/>
       {/*<ItemListContainer title="Lista de Productos"/>*/}
       
    </div>
  );
}

export default App;
