import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import questionMark from './images/questionMark.jpeg'

function Card(props){

    const isFaceUp = props.isFaceUp

    // define classes 
    const active = isFaceUp ? 'active' : ""
    const divClasses = `${props.className} catCard ${active}`
    const frontClasses = "side front"
    const backClasses = "side back"
    // const frontStyle = {
    //     backgroundImage: `url(${questionMark})`
    // }
    
    return (
    <Col className="mb-3 card-col">
    <div className="scene">
        <div className={divClasses} onClick={props.onClick}> 
            <img className={frontClasses} src={props.imgSrc} alt={props.alt} />
            <img className={backClasses} src={questionMark} alt={props.alt} height="100"/>
            </div>
        </div>
    </Col>
        )
}

export default Card;