import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div>
      <div className='main'>
        <Box title='YOU' />
        <Box title='COMPUTER' />
      </div>

      <div className='main btn'>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
