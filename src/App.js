
import { useState } from 'react';
import './App.css';
import PlayButton from './PlayButton'
import Game from './Game'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

function App() {

 
  return (
    <div className="App">
     <Header/>
      <Router>
        <Switch>
          <Route path = "/play-game">
            <Game/>
          </Route>
          <Route path ="/">
            <PlayButton/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
