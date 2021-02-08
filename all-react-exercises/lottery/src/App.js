import './App.css';
import Lottery from './Lottery.js'

function App() {
  return (
    <div className="App">
      <Lottery></Lottery>
      <Lottery title="Mini Daily" maxNum={10} maxBalls={4}></Lottery>
    </div>
  );
}

export default App;
