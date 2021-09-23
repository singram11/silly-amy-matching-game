import React, {useState} from "react";
import Col from 'react-bootstrap/Col';

function Card(props){
    // [TODO] Remove the facedown face up text and change to ? image

    const isFaceUp = props.isFaceUp

    return <Col>
        <div className={props.className} onClick={props.onClick}> 
            <img src={props.imgSrc} height="200"/>
            {isFaceUp ? "Faceup" : "Facedown"} 
            </div>
        </Col>
}

export default Card;