import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

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
    <div>
        <div>
            <Button variant='danger' onClick={restar}>-</Button>
            <span className='btncontador' variant='ligth'>{contador}</span>
            <Button variant='success' onClick={sumar}>+</Button>   
        </div>
        <Button variant='primary' onClick={() => onAdd(contador)}>comprar</Button>
    </div>
  )
}

export default ItemCounter