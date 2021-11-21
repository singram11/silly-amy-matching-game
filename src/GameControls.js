import Button from 'react-bootstrap/Button';

function GameControls(props){
    // const restartGame = props.restartGame

    // function restart() {
    //     console.log("clicked")
    //     restartGame(true)
    // }

    function restart() {
        window.location.reload()
    }


    return <div className="game-controls mt-2 mb-3"> 
    <Button onClick={restart} variant="primary">Restart</Button> 
    </div>
}

export default GameControls;