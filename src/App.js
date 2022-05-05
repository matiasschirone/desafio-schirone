import Nabvar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="miApp">
       <Nabvar/>
       <ItemListContainer title="el carrito esta vacio"/>
      <h1>Music Shop</h1>
    </div>
  );
}

export default App;
