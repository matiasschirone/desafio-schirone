export default function ItemListContainer(){
    const ItemStyle={
        margin: 10,
        padding:10,
        display:"flex-end",
        justifycontent: "space-between", 
   
    }
    return(
        <div style={ItemStyle}>
            <h3>El carrito esta vacio</h3>
        </div>
    )
}