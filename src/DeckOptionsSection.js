import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DeckOptionsSection(props) {
    const setDeckOption = props.setDeckOption;

    const deckOptions = ['cats', 'dogs'];

    for (let option of deckOptions) {
        console.log(option);
    }

    return (
        <div className='homepage d-flex align-items-center justify-content-center'>
            <div className='options-card d-flex justify-content-center'>
                <Container>
                    <Row className='m-3'>
                        <p>Game Options - Change Deck</p>
                    </Row>
                    <Row className='mx-3'></Row>
                    <Row className='mx-3'>
                        <Link to='/'>Back</Link>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default DeckOptionsSection;
