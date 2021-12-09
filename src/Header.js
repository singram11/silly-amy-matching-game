import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container className='header'>
                <Link to='/'>
                    <Navbar.Brand>Silly Amy Matching Game</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    );
}

export default Header;
