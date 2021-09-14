import React, {useState, useEffect} from "react"
import images from "./imageData"
import Container from 'react-bootstrap/Container';
import Card from "./Card"

function Gameboard(props){

        const cardArr = []
        for (const image in images) {
          
            const card = <Card
            key={image}
            className={images[image]["imgName"]}
            imgSrc = {images[image]["img"]}/>
            
            cardArr.push(card)
        }
    
        console.log(cardArr)

    return <Container><div>{cardArr}</div></Container>
}

export default Gameboard;