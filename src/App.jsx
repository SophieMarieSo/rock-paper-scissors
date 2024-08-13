import { useState } from 'react';
import './App.css';
import Box from './components/Box';

const choice = {
  rock: {
    name: 'rock',
    img: 'https://blackbearwow.github.io/image/rockPaperScissors/rock.png',
  },
  scissors: {
    name: 'scissors',
    img: 'https://blackbearwow.github.io/image/rockPaperScissors/scissors.png',
  },
  paper: {
    name: 'paper',
    img: 'https://blackbearwow.github.io/image/rockPaperScissors/paper.png',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className='main'>
        <Box title='YOU' item={userSelect} />
        {/* <Box title='COMPUTER' /> */}
      </div>

      <div className='main btn'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
