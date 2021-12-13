import Container from 'react-bootstrap/Container';
import GameControls from './GameControls';
import ShuffleDeck from './ShuffleDeck';

function Game(props) {
    return (
        <Container>
            <GameControls />
            <ShuffleDeck deck={props.deck} />
        </Container>
    );
}

export default Game;
