import React from "react";
import Nabvar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="miApp">
       <Nabvar/>
       <h1>Music Shop</h1>
       <ItemListContainer title="Lista de Productos"/>
    </div>
  );
}

export default App;
