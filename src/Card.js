import React, {useState} from "react";
import Col from 'react-bootstrap/Col';

function Card(props){
    // [TODO] Remove the facedown face up text and change to ? image

    const [ isFaceUp, setIsFaceUp ] = useState(false)  

    function flipCard(){
        if (isFaceUp) {
            setIsFaceUp(false)
        } else {
            setIsFaceUp(true)
        }
    }


    return <Col>
        <div className={props.className} onClick={flipCard}> 
            <img src={props.imgSrc} height="200"/>
            {isFaceUp ? "Faceup" : "Facedown"} 
            </div>
        </Col>
}

export default Card;