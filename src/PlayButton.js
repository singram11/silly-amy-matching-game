
import Button from 'react-bootstrap/Button';

function PlayButton(props) {

    function setPlay(){
        props.setIsPlay(true)
    }

    return <Button onClick={setPlay}>Let's Play!</Button>
}

export default PlayButton;