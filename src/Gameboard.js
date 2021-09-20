import React, {useState, useEffect} from "react"
import images from "./imageData"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from "./Card"

function Gameboard(props){

    const [ numberFlipped, setNumberFlipped ] = useState(0)
    const [ card1, setCard1 ] = useState(null)
    const [ card2, setCard2 ] = useState(null)

    let cardArr = []
    for (const image in images) {
        
        const card = <Card
        key={image}
        className={images[image]["imgName"]}
        imgSrc = {images[image]["img"]}/>
        
        cardArr.push(card)
    }
    //shuffle arrray
    let shuffledCardArr = cardArr
        .map((value) => ({value, sort: Math.random() }))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)

    function checkMatch(numberFlipped, card1, card2) {

        
    }
    

    return <Container><Row><div>{shuffledCardArr}</div></Row></Container>
}

export default Gameboard;