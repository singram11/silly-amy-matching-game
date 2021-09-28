import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import questionMark from './images/questionMark.jpeg'

function Card(props){
    // [TODO] Remove the facedown face up text and change to ? image

    const isFaceUp = props.isFaceUp

    
    const active = isFaceUp ? 'active' : ""
 
    const divClasses = `${props.className} card ${active}`
    const frontClasses = "side front"
    const backClasses = "side back"
  

    return (
    <Col className="mb-3">
    <div className="scene">
        <div className={divClasses} onClick={props.onClick}> 
            <img className={frontClasses} src={props.imgSrc} height="100"/> 
            <img className={backClasses} src={questionMark} height="100"/>
            </div>
            </div>
    </Col>
        )
}

export default Card;