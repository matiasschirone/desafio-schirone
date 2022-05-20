import React, { useState } from 'react'

const ItemCounter = ({stock, initial, onAdd}) => {
    const [contador, setContador]=useState(initial)
    const sumar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const restar= ()=>{
        if(contador > 0){
            setContador(contador -1)
        }
    }
  return (
    <div className='d-flex fles-ccolumn align-items-center'>
        <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span className='btn btn-light px-5'>{contador}</span>
            <button className='btn btn-success' onClick={sumar}>+</button>
        </div>
        <button className='btn btn-primary m-2' onClick={onAdd}>sumar al carrito</button>
    </div>
  )
}

export default ItemCounter