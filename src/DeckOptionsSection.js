import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeckOption from './DeckOption';
import cats from './catDeck';
import dogs from './dogDeck';

function DeckOptionsSection(props) {
    const setDeckOption = props.setDeckOption;

    const deckOptions = [
        ['cats', cats],
        ['dogs', dogs],
    ];

    let optionsArr = deckOptions.map((option) => {
        const deckOption = (
            <DeckOption
                key={option[0]}
                name={option[0]}
                images={option[1]}
                setDeckOption={setDeckOption}
            />
        );
        return deckOption;
    });

    return (
        <div className='homepage d-flex align-items-center justify-content-center'>
            <div className='options-card d-flex justify-content-center'>
                <Container>
                    <Row className='m-3'>
                        <p>Game Options - Change Deck</p>
                    </Row>
                    <Row className='mx-3'>{optionsArr}</Row>
                    <Row className='mx-3'>
                        <Link to='/'>Back</Link>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default DeckOptionsSection;
