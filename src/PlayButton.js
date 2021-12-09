
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function PlayButton(props) {

    return <Link to="play-game"><Button>Let's Play!</Button></Link>
}

export default PlayButton;