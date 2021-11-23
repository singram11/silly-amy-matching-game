import React, {useState, useEffect} from "react"
import images from "./imageData"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from "./Card"

function Gameboard(props){  
    const deck = props.deck

   const [cardsFaceUp, setCardsFaceUp] = useState([])
   const [cardsMatched, setCardsMatched] = useState([])
   const [gameWon, setGameWon] = useState(false)


//     console.log("type of cardsFaceUp:")
//    console.log(typeof(cardsFaceUp))
//    console.log("value of: ")
//    console.log(cardsFaceUp)
//    console.log(cardsFaceUp.includes(1))
   function checkFaceUp(index) {
       if (!cardsFaceUp.includes(index)) {
           setCardsFaceUp([...cardsFaceUp, index])
       }
   }

   
   let cardArr = deck.map((image, index) => {
        const card = <Card
        key={image["id"]}  // what is the best thing to use if you dont have an id?
        onClick={ () => checkFaceUp(index)}
        isFaceUp = { cardsFaceUp.includes(index) || cardsMatched.includes(index) }
        className={image["imgName"]}
        imgSrc = {image["img"]}
        alt = {image["alt"]}
        />

        return card
   })
   
   console.log(`deck len: ${deck.length}`)
   console.log(`matched len: ${cardsMatched.length}`)

   
  
    useEffect(()=> {
        // console.log(cardsFaceUp)
        if (cardsFaceUp.length === 2){
            const [ idxCard1, idxCard2 ] = cardsFaceUp
        
            const card1 = deck[idxCard1].imgName
            const card2 = deck[idxCard2].imgName
        
            if (card1 === card2) {
                setCardsMatched([...cardsMatched, idxCard1, idxCard2])
            } 
            console.log(cardsMatched.length)
        
            
            setTimeout(() => {setCardsFaceUp([])}, 1000);
        } 

    }, [cardsFaceUp])

    // Check win condition 
    useEffect(()=> {
        if (cardsMatched.length == deck.length){
            setGameWon(true)
            console.log("won")
        }
    }, [cardsMatched])
    

    return <div>
            <Container>
                <Row>{cardArr}</Row>
            </Container>
            <p>{gameWon ? "yep" : "Nope"}</p>
            </div>
}

export default Gameboard;