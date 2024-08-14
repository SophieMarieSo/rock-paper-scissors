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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState({ user: '', computer: '' });

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);

    const final = judgement(userChoice, computerChoice);
    if (final === 1) {
      setResult({ user: 1, computer: 0 });
    } else if (final === 0) {
      setResult({ user: 0, computer: 1 });
    } else {
      setResult({ user: final, computer: final });
    }
  };

  const randomChoice = () => {
    // 객체의 key값만 뽑아서 배열로 만듦
    const itemArray = Object.keys(choice);

    // 0 ~ 2
    const randomItem = Math.random() * itemArray.length;

    return itemArray[Math.floor(randomItem)];
  };

  const judgement = (user, computer) => {
    if (user === computer) {
      return 'TIE';
    } else if (user === 'rock') {
      return computer === 'scissors' ? 1 : 0;
    } else if (user === 'scissors') {
      return computer === 'paper' ? 1 : 0;
    } else if (user === 'paper') {
      return computer === 'rock' ? 1 : 0;
    }
  };

  return (
    <div>
      <h2 className='header'>🎮 가위 바위 보 GAME 🎮</h2>

      <div className='main'>
        <Box title='YOU' item={userSelect} result={result.user} />
        <Box title='COMPUTER' item={computerSelect} result={result.computer} />
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
