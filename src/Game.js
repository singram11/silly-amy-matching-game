import Container from 'react-bootstrap/Container';
import GameControls from './GameControls';
import ShuffleDeck from './ShuffleDeck';

function Game(props) {
    const deck = props.deck;
    console.log(deck);
    return (
        <Container>
            <GameControls />
            <ShuffleDeck deck={deck} />
        </Container>
    );
}

export default Game;
