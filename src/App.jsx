import './App.scss';
import Clock from './components/Clock/Clock';
import Countdown from './components/Countdown/Countdown';
import Cronometro from './components/Cronometro/Cronometro';

function App() {
  return (
    <div className='App'>
      <Cronometro />
      <Clock />
      <Countdown />
    </div>
  );
}

export default App;
