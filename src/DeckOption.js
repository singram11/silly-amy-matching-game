import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function DeckOption(props) {
    const deckOption = props.name;
    const setDeckOption = props.setDeckOption;

    const [selected, setSelected] = useState(false);

    function changeDeckSelect() {
        setDeckOption(deckOption);
        console.log('change deck selection');
        setSelected(true);
    }

    const selectedClass = selected ? 'selected' : '';
    const classes = `${deckOption} ${selectedClass}`;

    return (
        <Button className={classes} onClick={changeDeckSelect}>
            {deckOption}{' '}
        </Button>
    );
}

export default DeckOption;
