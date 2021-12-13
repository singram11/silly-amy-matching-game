import { Container, Row } from 'react-bootstrap';
import GameOptionButton from './GameOptionButton';

function HomepageOptions(props) {
    return (
        <div className='homepage d-flex align-items-center justify-content-center'>
            <div className='options-card d-flex justify-content-center'>
                <Container>
                    <Row className='m-3'>
                        <p>Game Options</p>
                    </Row>
                    <Row className='mx-3'>
                        <GameOptionButton to='/play-game' text="Let's Play" />
                    </Row>
                    <Row className='mx-3'>
                        <GameOptionButton
                            to='/change-deck'
                            text='Change Deck'
                        />
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomepageOptions;
