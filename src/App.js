import { useState } from 'react';
import './App.css';
import HompageOptions from './homepageOptions';
import Game from './Game';
import Header from './Header';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import DeckOptionsSection from './DeckOptionsSection';
import cats from './catDeck';
import dogs from './dogDeck';

function App() {
    // Global State
    const [deckOption, setDeckOption] = useState('cats');
    console.log(deckOption);

    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/play-game'>
                        <Game deck={deckOption} />
                    </Route>
                    <Route path='/change-deck'>
                        <DeckOptionsSection setDeckOption={setDeckOption} />
                    </Route>
                    <Route path='/'>
                        <HompageOptions />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
