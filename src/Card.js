import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import questionMark from './images/questionMark.jpeg'

function Card(props){
    // [TODO] Remove the facedown face up text and change to ? image

    const isFaceUp = props.isFaceUp

    const showClass = isFaceUp ? 'side flip front' : "side back"

    const divClasses = `${props.className} inner-card`
  

    return <Col className="mb-3 outer-card">
        <div className={divClasses} onClick={props.onClick}> 
            {isFaceUp ? <img className={showClass} src={props.imgSrc} height="100"/> 
            : <img className={showClass} src={questionMark} height="100"/>} 
            </div>
        </Col>
}

export default Card;