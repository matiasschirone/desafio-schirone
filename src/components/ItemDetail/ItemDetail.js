import React from 'react'
import Item2 from '../Item/Item2'

export default function ItemDetail({items}) {
//console.log(items)
    return (
        <>
        <h3>producto</h3>
        <div>
           {items.map((product) => <Item2/>)}
        </div>
        </>
    )
}

