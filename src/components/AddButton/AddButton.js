import React from "react"
import { Button } from "react-bootstrap"


export default function AddButton({stock,onSubmit}) {

    const [count, setCount] = React.useState(1)

    const onAdd = () => {
        if(count < stock) {
            
        setCount(count + 1)
        }
    }
    const onDecrease = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const StockButton = ({ handleOnclick, text }) => {
        return (
            <button className="stock-button" onClick= {()=>handleOnclick()}>
                {text}
            </button>
        )
    }

    const AddButton = ({handleOnSubmit}) => {
        return (
            <button className="add-button" onClick={() => handleOnSubmit()}>
                añadir al carrito
            </button>
        )
    }


    return (
        <button className="add-button">
            <StockButton text="-" handleOnclick={onDecrease} />
            <span className="add-button-count">{count}</span>
            <StockButton text="+" handleOnclick={onAdd} />
            <AddButton handleOnSubmit={onSubmit} />
        </button>
    );
}