import images from "./imageData"
import dogs from "./dogDeck"
import Gameboard from "./Gameboard"

function ShuffleDeck(props){


    let shuffledDeck = dogs     //images
            .map((value) => ({value, sort: Math.random() }))
            .sort((a,b) => a.sort - b.sort)
            .map(({value}) => value)

    
    return <Gameboard deck={shuffledDeck}/>
};

export default ShuffleDeck;