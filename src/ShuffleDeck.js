import cats from './catDeck';
// Using dogs file
import dogs from './dogDeck';
import Gameboard from './Gameboard';

function ShuffleDeck(props) {
    const deck = props.deck;

    console.log(deck);

    let shuffledDeck = deck //images
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    return <Gameboard deck={shuffledDeck} />;
}

export default ShuffleDeck;
