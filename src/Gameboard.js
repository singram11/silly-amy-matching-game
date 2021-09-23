import React, {useState, useEffect} from "react"
import images from "./imageData"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from "./Card"

function Gameboard(props){

   const [cardsFaceUp, setCardsFaceUp] = useState([])
   const [cardsMatched, setCardsMatched] = useState([])
   const [cardDeck, setCardDeck] = useState()

    console.log("type of cardsFaceUp:")
   console.log(typeof(cardsFaceUp))
   console.log("value of: ")
   console.log(cardsFaceUp)
   console.log(cardsFaceUp.includes(1))
   
   
   let cardArr = images.map((image, index) => {
       console.log(image["id"])
        const card = <Card
        key={image["id"]}  // what is the best thing to use if you dont have an id?
        onClick={ () => setCardsFaceUp([ ...cardsFaceUp, image["id"] ])}
        isFaceUp = { cardsFaceUp.includes(image["id"]) || cardsMatched.includes(index) }
        className={image["imgName"]}
        imgSrc = {image["img"]}
        />

        return card
   })
   console.log("Done with setting cards")
   
   useEffect(()=> {
    //shuffle arrray
    let shuffledCardArr = cardArr
        .map((value) => ({value, sort: Math.random() }))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)

    }, [])

  
    useEffect(()=> {
        // console.log(cardsFaceUp)
        if (cardsFaceUp.length === 2){
            const { idxCard1, idxCard2 } = cardsFaceUp
            // need to get class
            if (idxCard1 === idxCard2) {
                setCardsMatched(idxCard1, idxCard2)
            }
            setCardsFaceUp([])
        } 

    }, [cardsFaceUp])
    

    return <Container><Row><div>{cardArr}</div></Row></Container>
}

export default Gameboard;