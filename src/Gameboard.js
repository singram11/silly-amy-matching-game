import React, {useState, useEffect} from "react"
import images from "./imageData"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from "./Card"

function Gameboard(props){  
    const deck = props.deck

   const [cardsFaceUp, setCardsFaceUp] = useState([])
   const [cardsMatched, setCardsMatched] = useState([])


//     console.log("type of cardsFaceUp:")
//    console.log(typeof(cardsFaceUp))
//    console.log("value of: ")
//    console.log(cardsFaceUp)
//    console.log(cardsFaceUp.includes(1))
   
   
   let cardArr = deck.map((image, index) => {
        const card = <Card
        key={image["id"]}  // what is the best thing to use if you dont have an id?
        onClick={ () => setCardsFaceUp([ ...cardsFaceUp, index ])}
        isFaceUp = { cardsFaceUp.includes(index) || cardsMatched.includes(index) }
        className={image["imgName"]}
        imgSrc = {image["img"]}
        alt = {image["alt"]}
        />

        return card
   })
   console.log("Done with setting cards")
   console.log(images[0].imgName)


  
    useEffect(()=> {
        // console.log(cardsFaceUp)
        if (cardsFaceUp.length === 2){
            const [ idxCard1, idxCard2 ] = cardsFaceUp
        
            const card1 = deck[idxCard1].imgName
            const card2 = deck[idxCard2].imgName
        
            if (card1 === card2) {
                setCardsMatched([...cardsMatched, idxCard1, idxCard2])
            } 
            setTimeout(() => {setCardsFaceUp([])}, 1000);
        } 

    }, [cardsFaceUp])
    

    return <Container><Row>{cardArr}</Row></Container>
}

export default Gameboard;