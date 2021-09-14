
import { useState } from 'react';
import './App.css';
import PlayButton from './PlayButton'
import Game from './Game'

function App() {

  const [isPlay, setIsPlay] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
       Silly Amy Game!
      </header>
      {isPlay ? <Game/> : <PlayButton setIsPlay={setIsPlay}/> }
      
    </div>
  );
}

export default App;
