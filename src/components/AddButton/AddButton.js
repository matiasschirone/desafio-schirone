import React from "react"
export default function AddButton() {
    const [count, setCount] = React.useState(1)

    const stock = 10

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
            <button className="stock-button" onClick= {handleOnclick}>
                {text}
            </button>
        )
    }

    const AddButton = () => {
        return (
            <button className="add-button">
                añadir al carrito
            </button>
        )
    }


    return (
        <button className="add-button">
            <StockButton text="-" handleOnclick={onDecrease} />
            <span className="add-button-count">{count}</span>
            <StockButton text="+" handleOnclick={onAdd} />
            <AddButton />
        </button>
    );
}