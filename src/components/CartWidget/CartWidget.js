import { MdOutlineShoppingCart} from "react-icons/md";
import { Link } from "react-router-dom";

function CartWidget({count}){
    const CartStyle={
        margin: 10,
        padding:10,
        
    }
    return(
        <div style={CartStyle}>
          <Link to="/Cart">
           <MdOutlineShoppingCart/> 
           {count}
           </Link>
        </div>
    )
}
export default CartWidget;
