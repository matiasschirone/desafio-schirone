import AddButton from "../AddButton/AddButton"

export default function ItemListContainer({ title }) {
    const ItemStyle = {
        margin: 10,
        padding: 10,
        display: "flex-end",
        justifycontent: "space-between",

    }
    return (
        <div style={ItemStyle}>
            <h3>{title}</h3>
            <div className="item">
                <AddButton />
            </div>
        </div>
    )
}