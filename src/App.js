
import { useState } from 'react';
import './App.css';
import PlayButton from './PlayButton'

function App() {

  const [isPlay, setIsPlay] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
       Silly Amy Game!
      </header>
      {isPlay ? "gameboard" : <PlayButton setIsPlay={setIsPlay}/> }
      
    </div>
  );
}

export default App;
