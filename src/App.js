
import { useState } from 'react';
import './App.css';
import PlayButton from './PlayButton'
import Gameboard from './Gameboard'

function App() {

  const [isPlay, setIsPlay] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
       Silly Amy Game!
      </header>
      {isPlay ? <Gameboard/> : <PlayButton setIsPlay={setIsPlay}/> }
      
    </div>
  );
}

export default App;
