import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Cantidad() {
    const [cantidad,setCantidad] = useState(5);

    const sumar = () =>{
        setCantidad (cantidad <5 ? cantidad + 1 : cantidad)  
    }
    const restar = () =>{
        setCantidad (cantidad >0 ? cantidad - 1 : cantidad)  
    }
    return (
        <>
            <Card.Text>Cantidad disponible: {cantidad}</Card.Text>
            <Button onClick={()=>sumar()} >+</Button>
            <Button onClick={()=>restar()} >-</Button>
        </>
    )
}

export default Cantidad
