import { useState } from 'react';
import './App.css';
import HompageOptions from './homepageOptions';
import Game from './Game';
import Header from './Header';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/play-game'>
                        <Game />
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