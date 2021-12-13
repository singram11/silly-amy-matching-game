import React, { useState, useEffect } from 'react';
import cats from './catDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';

function Gameboard(props) {
    const deck = props.deck;

    // Game play state
    const [cardsFaceUp, setCardsFaceUp] = useState([]);
    const [cardsMatched, setCardsMatched] = useState([]);
    const [gameWon, setGameWon] = useState(false);

    function checkFaceUp(index) {
        if (!cardsFaceUp.includes(index)) {
            setCardsFaceUp([...cardsFaceUp, index]);
        }
    }

    // Create cards
    let cardArr = deck.map((image, index) => {
        const card = (
            <Card
                key={image['id']} // what is the best thing to use if you dont have an id?
                onClick={() => checkFaceUp(index)}
                isFaceUp={
                    cardsFaceUp.includes(index) || cardsMatched.includes(index)
                }
                className={image['imgName']}
                imgSrc={image['img']}
                alt={image['alt']}
            />
        );

        return card;
    });

    // Check for matching cards on flip
    useEffect(() => {
        if (cardsFaceUp.length === 2) {
            const [idxCard1, idxCard2] = cardsFaceUp;
            const card1 = deck[idxCard1].imgName;
            const card2 = deck[idxCard2].imgName;

            if (card1 === card2) {
                setCardsMatched([...cardsMatched, idxCard1, idxCard2]);
            }

            setTimeout(() => {
                setCardsFaceUp([]);
            }, 1000);
        }
    }, [cardsFaceUp]);

    // Check win condition
    useEffect(() => {
        if (cardsMatched.length === deck.length) {
            setGameWon(true);
        }
    }, [cardsMatched]);

    return (
        <div>
            <Container>
                <Row>{cardArr}</Row>
            </Container>
            <p>{gameWon ? 'You win' : ''}</p>
        </div>
    );
}

export default Gameboard;
