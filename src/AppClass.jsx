import React, { Component } from 'react';
import BoxClass from './components/BoxClass';

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

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: { user: '', computer: '' },
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });

    const computerChoice = this.randomChoice();
    this.setState({ computerSelect: choice[computerChoice] });

    const final = this.judgement(userChoice, computerChoice);
    if (final === 1) {
      this.setState({ result: { user: 1, computer: 0 } });
    } else if (final === 0) {
      this.setState({ result: { user: 0, computer: 1 } });
    } else {
      this.setState({ result: { user: final, computer: final } });
    }
  };

  randomChoice = () => {
    // 객체의 key값만 뽑아서 배열로 만듦
    const itemArray = Object.keys(choice);

    // 0 ~ 2
    const randomItem = Math.random() * itemArray.length;

    return itemArray[Math.floor(randomItem)];
  };

  judgement = (user, computer) => {
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

  render() {
    return (
      <div>
        <h2 className='header'>🎮 가위 바위 보 GAME 🎮</h2>

        <div className='main'>
          <BoxClass
            title='YOU'
            item={this.state.userSelect}
            result={this.state.result.user}
          />
          <BoxClass
            title='COMPUTER'
            item={this.state.computerSelect}
            result={this.state.result.computer}
          />
        </div>

        <div className='main btn'>
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
