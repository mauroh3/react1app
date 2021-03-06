import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';
import Cantidad from './Contador';


const ItemListContainer = () => {
    return (
        <>
        <div class="container">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Cantidad/>
            </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default ItemListContainer
