import React from "react";
import Nabvar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="miApp">
       <Nabvar/>
       <h1>Music Shop</h1>
       <ItemListContainer title="Lista de Productos"/>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
