
import Container from 'react-bootstrap/Container';
import GameControls from './GameControls';
import ShuffleDeck from './ShuffleDeck'
import { useEffect, useState } from 'react';

function Game(props){

    // const [restartGame, setRestartGame] = useState(false)

    // useEffect(()=> {
    //     console.log("re-rendered") 
    // }, [restartGame])

    return <Container><GameControls /><ShuffleDeck/> </Container>
}

export default Game;