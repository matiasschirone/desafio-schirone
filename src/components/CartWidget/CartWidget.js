import { MdOutlineShoppingCart} from "react-icons/md";
function CartWidget({count}){
    const CartStyle={
        margin: 10,
        padding:10,
        
    }
    return(
        <div style={CartStyle}>
           <MdOutlineShoppingCart/> 
           {count}
        </div>
    )
}
export default CartWidget;
