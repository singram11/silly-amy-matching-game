
import Container from 'react-bootstrap/Container';
import GameControls from './GameControls';
import Gameboard from './Gameboard';


function Game(props){

    return <Container><GameControls/><Gameboard/> </Container>
}

export default Game;