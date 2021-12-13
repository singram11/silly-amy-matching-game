import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GameOptionButton(props) {
    const path = props.to;
    const text = props.text;

    return (
        <Link to={path}>
            <Button>{text}</Button>
        </Link>
    );
}

export default GameOptionButton;
